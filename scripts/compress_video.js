const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('--- Bắt đầu tối ưu hóa video ---');
  
  // Kiểm tra hoặc cài đặt ffmpeg-static
  let ffmpeg;
  try {
    ffmpeg = require('ffmpeg-static');
    console.log('Đã tìm thấy ffmpeg-static tại:', ffmpeg);
  } catch (e) {
    console.log('Chưa cài đặt ffmpeg-static. Tiến hành cài đặt tạm thời...');
    execSync('npm install ffmpeg-static --no-save', { stdio: 'inherit' });
    ffmpeg = require('ffmpeg-static');
    console.log('Đã cài đặt ffmpeg-static thành công tại:', ffmpeg);
  }

  const publicDir = path.join(__dirname, '..', 'public', 'video_background_hero_banner');
  const inputPath = path.join(publicDir, 'video_background.mp4');
  const outputMp4Path = path.join(publicDir, 'video_background_optimized.mp4');
  const outputWebmPath = path.join(publicDir, 'video_background_optimized.webm');
  const outputPosterPath = path.join(publicDir, 'video_background_poster.jpg');

  if (!fs.existsSync(inputPath)) {
    console.error(`Không tìm thấy file video gốc tại: ${inputPath}`);
    process.exit(1);
  }

  console.log('1. Đang nén thành định dạng MP4 (H.264, giảm bitrate, bỏ âm thanh)...');
  // -an: tắt âm thanh
  // -vcodec libx264: codec h264 phổ biến
  // -crf 28: độ nén (CRF cao hơn = dung lượng nhỏ hơn, 23 là mặc định, 28 là tối ưu cho background video)
  // -preset medium: tốc độ mã hóa trung bình
  // -vf "scale='min(1280,iw)':-2": scale chiều rộng tối đa 1280px, giữ nguyên tỷ lệ chia hết cho 2
  try {
    execSync(`"${ffmpeg}" -y -i "${inputPath}" -an -vcodec libx264 -crf 28 -preset medium -vf "scale='min(1280,iw)':-2" "${outputMp4Path}"`, { stdio: 'inherit' });
    console.log('Đã nén xong MP4!');
  } catch (err) {
    console.error('Lỗi khi nén MP4:', err.message);
  }

  console.log('2. Đang chuyển đổi và nén sang định dạng WebM (VP9, siêu nhẹ)...');
  // -vcodec libvpx-vp9: codec VP9 cho chất lượng tốt ở dung lượng rất nhỏ
  // -crf 35 -b:v 0: cách nén chuẩn VP9
  try {
    execSync(`"${ffmpeg}" -y -i "${inputPath}" -an -vcodec libvpx-vp9 -crf 35 -b:v 0 -vf "scale='min(1280,iw)':-2" "${outputWebmPath}"`, { stdio: 'inherit' });
    console.log('Đã nén xong WebM!');
  } catch (err) {
    console.error('Lỗi khi nén WebM:', err.message);
  }

  console.log('3. Đang trích xuất ảnh tĩnh (poster frame) tại giây 00:00:00...');
  // -ss 00:00:00: trích xuất giây đầu tiên
  // -vframes 1: chỉ trích xuất 1 frame
  try {
    execSync(`"${ffmpeg}" -y -i "${inputPath}" -ss 00:00:00 -vframes 1 "${outputPosterPath}"`, { stdio: 'inherit' });
    console.log('Đã trích xuất ảnh tĩnh poster xong!');
  } catch (err) {
    console.error('Lỗi khi trích xuất ảnh tĩnh:', err.message);
  }

  console.log('--- Hoàn tất tối ưu hóa video ---');
  
  // In thông tin dung lượng
  const sizeOriginal = fs.statSync(inputPath).size;
  const sizeMp4 = fs.existsSync(outputMp4Path) ? fs.statSync(outputMp4Path).size : 0;
  const sizeWebm = fs.existsSync(outputWebmPath) ? fs.statSync(outputWebmPath).size : 0;
  const sizePoster = fs.existsSync(outputPosterPath) ? fs.statSync(outputPosterPath).size : 0;

  console.log(`Dung lượng ban đầu: ${(sizeOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Dung lượng MP4 tối ưu: ${(sizeMp4 / 1024 / 1024).toFixed(2)} MB (${((sizeMp4/sizeOriginal)*100).toFixed(1)}% dung lượng gốc)`);
  console.log(`Dung lượng WebM tối ưu: ${(sizeWebm / 1024 / 1024).toFixed(2)} MB (${((sizeWebm/sizeOriginal)*100).toFixed(1)}% dung lượng gốc)`);
  console.log(`Dung lượng Ảnh tĩnh Poster: ${(sizePoster / 1024).toFixed(2)} KB`);
}

main().catch(console.error);
