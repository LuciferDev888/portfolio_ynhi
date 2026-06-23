export interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

export interface BenefitItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface BenefitsSectionProps {
  title: string;
  subtitle?: string;
  items: BenefitItem[];
  className?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

export interface SocialProofSectionProps {
  title: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
  className?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface PricingSectionProps {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  className?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
}

export interface CTAFooterSectionProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

export interface LandingPageContent {
  campaignName: string;
  seoTitle: string;
  seoDescription: string;
  hero: HeroSectionProps;
  benefits: BenefitsSectionProps;
  socialProof: SocialProofSectionProps;
  pricing: PricingSectionProps;
  faq: FAQItem[];
  cta: CTAFooterSectionProps;
}

export interface JackLandingPageContent {
  campaignName: string;
  seoTitle: string;
  seoDescription: string;
  hero: HeroSectionProps & { portraitUrl?: string };
  marquee: {
    row1: string[];
    row2: string[];
  };
  about: {
    heading: string;
    paragraph: string;
    decorations: {
      topLeft: string;
      bottomLeft: string;
      topRight: string;
      bottomRight: string;
    };
  };
  services: {
    heading: string;
    items: {
      id: string;
      num: string;
      name: string;
      description: string;
    }[];
  };
  projects: {
    heading: string;
    items: {
      id: string;
      num: string;
      category: string;
      name: string;
      liveUrl: string;
      images: {
        col1_1: string;
        col1_2: string;
        col2: string;
      };
    }[];
  };
}

export interface YenNhiLandingPageContent {
  campaignName: string;
  seoTitle: string;
  seoDescription: string;
  hero: HeroSectionProps & { portraitUrl?: string };
  about: {
    heading: string;
    paragraph: string;
    decorations: {
      topLeft: string;
      bottomLeft: string;
      topRight: string;
      bottomRight: string;
    };
  };
  services: {
    heading: string;
    items: {
      id: string;
      num: string;
      name: string;
      description: string;
    }[];
  };
  certificates: {
    heading: string;
    items: {
      id: string;
      title: string;
      issuer: string;
      date: string;
    }[];
  };
  projects: {
    heading: string;
    items: {
      id: string;
      num: string;
      category: string;
      name: string;
      liveUrl: string;
      images: {
        col1_1: string;
        col1_2: string;
        col2: string;
      };
    }[];
  };
  contact: {
    title: string;
    description?: string;
  };
}


