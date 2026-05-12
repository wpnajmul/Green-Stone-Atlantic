export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  process: {
    step: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  serviceId: string;
  preferredDate: string;
  budgetRange: string;
  description: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  location: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}
