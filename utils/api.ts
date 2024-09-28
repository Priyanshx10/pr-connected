/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiResponse, ContactSubmission } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

/**
 * Generic function to handle API requests
 */
async function apiRequest<T>(
  endpoint: string, 
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET', 
  data?: any
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result as T;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * Submit contact form
 */
export async function submitContactForm(formData: ContactSubmission): Promise<ApiResponse> {
  return apiRequest<ApiResponse>('/api/contact', 'POST', formData);
}

/**
 * Get services
 */
export async function getServices(): Promise<ApiResponse> {
  return apiRequest<ApiResponse>('/api/services');
}

/**
 * Get case studies
 */
export async function getCaseStudies(): Promise<ApiResponse> {
  return apiRequest<ApiResponse>('/api/case-studies');
}

/**
 * Get resources
 */
export async function getResources(): Promise<ApiResponse> {
  return apiRequest<ApiResponse>('/api/resources');
}

/**
 * Subscribe to newsletter
 */
export async function subscribeNewsletter(email: string): Promise<ApiResponse> {
  return apiRequest<ApiResponse>('/api/subscribe', 'POST', { email });
}

/**
 * Helper function to handle API errors
 */
export function handleApiError(error: any): string {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}