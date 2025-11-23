export enum UserRole {
  CUSTOMER = 'customer',
  CLEANER = 'cleaner',
  ADMIN = 'admin'
}

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  EN_ROUTE = 'en_route',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  avatar_url?: string;
}

export interface CleanerProfile {
  user_id: string;
  bio: string;
  rating: number;
  jobs_completed: number;
  is_verified: boolean;
  current_location?: {
    lat: number;
    lng: number;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  base_price: number;
  image_url: string;
  duration_minutes: number;
}

export interface Booking {
  id: string;
  customer_id: string;
  cleaner_id?: string;
  service_id: string;
  status: BookingStatus;
  scheduled_at: string; // ISO date
  total_price: number;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
}

// For chart data
export interface RevenueData {
  name: string;
  value: number;
}