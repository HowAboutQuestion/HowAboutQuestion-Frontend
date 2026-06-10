export interface HelpStep {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface HelpCategory {
  id: string;
  label: string;
  steps: HelpStep[];
}
