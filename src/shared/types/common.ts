export interface SectionProps {
  data: {
    Title?: string;
    Image?: [] ;
    Button?: [ButtonFormation] | ButtonFormation;
    Description?: string;
    Gallary?: GalleryItem[];
    GallaryItems?: GalleryItem[];
    AdvantagesBoxes?: AdvantageItem[];
    // CallToAction specific fields
    Video?: {
      url: string;
    };
    MobileVideo?: {
      url: string;
    };
    TopLeftText?: string;
    CallToActionItems?: CallToActionItem[];
  };
}

export interface CallToActionItem {
  Title: string;
  href?: string;
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

export interface ContentSectionImage {
  id: number;
  url: string;
  width?: number;
}

export interface ContentSectionRow {
  id: number;
  Title: string;
  Description: string;
  addSecondPicture: boolean | null;
  Image: ContentSectionImage;
  Image2: ContentSectionImage | null;
}

export interface ContentSectionData {
  __component: string;
  id: number;
  Rows: ContentSectionRow[];
}