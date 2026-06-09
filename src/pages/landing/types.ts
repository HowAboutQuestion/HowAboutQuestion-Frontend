export type FeatureTabId = 'dashboard' | 'solving' | 'management';

export interface FeatureContentBlock {
  type: 'text' | 'image';
  content?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface FeatureItem {
  id: FeatureTabId;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  imageUrl?: string;
}
