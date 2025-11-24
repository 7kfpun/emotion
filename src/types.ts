export interface Feeling {
  id: string;
  name: string;
  color: string;
  position: { x: number; y: number };
  category: string;
  relatedFeelings: string[];
  description?: string;
}

export interface FeelingLog {
  id: string;
  date: string;
  feelingId: string;
  feelingName: string;
  note?: string;
  timestamp: number;
}

export interface NotificationSettings {
  enabled: boolean;
  time: string; // "HH:MM" format
}
