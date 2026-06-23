import LandingPage, { generateMetadata as generateSlugMetadata } from "./(landing)/[slug]/page";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return generateSlugMetadata({ params: { slug: "yen-nhi" } });
}

export default async function Home() {
  return <LandingPage params={{ slug: "yen-nhi" }} />;
}

