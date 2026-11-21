export interface Gallery {
  id: string;
  day: string;
  startDate: string; // ISO date "YYYY-MM-DD" — used to auto-hide future days
  date: string;
  dayName: string;
  title: string;
  description: string;
  culturalProgram: string;
  driveUrl: string;
  thumbnail?: string;
  featured?: boolean;
}

export interface Competition {
  name: string;
  date: string;
  time: string;
  ageGroup?: string;
  note?: string;
}

export interface ScheduleDay {
  date: string;
  dayName: string;
  program: string[];
}
