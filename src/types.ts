export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  services: string[];
  message: string;
  urgency: 'low' | 'medium' | 'high';
}
