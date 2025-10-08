


export interface ButtonFormation {
  Text: string;
  href: string;
  Variant: 'primary' | 'secondary';
}

export interface SectionProps {
  data: {
    Title?: string;
    Image?: [] ;
    Button?: [ButtonFormation] | ButtonFormation;
    Description?: string;
  };
}