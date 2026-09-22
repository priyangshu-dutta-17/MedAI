export type UserRole = 'patient' | 'doctor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  profileImage?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}
