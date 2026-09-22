export type NotificationType = 'appointment' | 'medical_record' | 'system' | 'doctor_verification';

export interface AppNotification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  isRead: boolean;
  link?: string;
  createdAt: string;
}
