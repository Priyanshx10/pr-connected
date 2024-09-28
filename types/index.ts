// Contact form submission type
export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

// API response type
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

// Service type
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Case study type
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  results: string[];
}

// Resource type
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'webinar' | 'case-study';
  link: string;
}

// User type (for potential future use)
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}