export interface SectionProps {
  data: {
    Title?: string;
    Image?: [] ;
    Button?: [ButtonFormation] | ButtonFormation;
    Description?: string;
    Gallary?: GalleryItem[];
    GallaryItems?: GalleryItem[];
    AdvantagesBoxes?: AdvantageItem[];
  };
}

export interface GalleryItem {
  id: number;
  Image: {
    url: string;
  };
  name?: string;
  Title?: string;
  href?: string;
  LinkText?: string;
}

export interface AdvantageItem {
  id: string;
  Title: string;
  Descriptio: string;
  Icon: Array<{
    url: string;
  }>;
}

export interface ButtonFormation {
  Text: string;
  href: string;
  Variant: 'primary' | 'secondary';
}


export interface IncludedBlockData {
  id: number;
  image: string;
  number: string;
  name: string;
  text: string;
  buttonText: string;
  buttonHref?: string;
}




export interface CustomerBlock {
  id: number;
  iconDefault: string;
  iconWhite: string;
  title: string;
  description: string;
}