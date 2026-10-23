export type EventCategory = 
  | 'Abertura' 
  | 'Palestra' 
  | 'Painel' 
  | 'Apresentação' 
  | 'Projetos' 
  | 'Encerramento' 
  | 'Workshop'
  | 'Evento Especial'
  | 'Ideathon';

export interface ProgramItem {
  id: string;
  time: string;
  timeToConfirm?: boolean;
  title: string;
  speaker?: string;
  roleOrCompany?: string;
  description?: string;
  location: string;
  category: EventCategory;
  tags: string[];
}

export interface DaySchedule {
  id: string;
  dayOfWeek: string;
  dateStr: string;
  dayNumber: string;
  month: string;
  themeTitle: string;
  items: ProgramItem[];
}

export interface Speaker {
  id: string;
  name: string;
  institution: string;
  role: string;
  bio: string;
  topic: string;
  dayDate: string;
  tags: string[];
  avatarFallback: string;
  accentColor?: string;
  linkedInUrl?: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Network' | 'Briefcase' | 'Cpu' | 'GraduationCap' | 'Code';
  gradient: string;
}
