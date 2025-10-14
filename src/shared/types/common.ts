export interface MediaItem {
  url: string;
  mime: string;
}

export interface SectionProps {
  data: {
    id?: string | number;
    Title?: string;
    Content?: string;
    Image?: {
      url: string;
    } | Array<{url: string}>;
    Button?: [ButtonFormation] | ButtonFormation;
    Description?: string;
    Gallary?: GalleryItem[];
    GallaryItems?: GalleryItem[];
    AdvantagesBoxes?: AdvantageItem[];
    CustomersBlocks?: CustomerBlock[];
    IncludedBoxes?: IncludedBlockData[];
    // CallToAction specific fields
    Video?: {
      url: string;
    };
    MobileVideo?: {
      url: string;
    };
    TopLeftText?: string;
    CallToActionItems?: CallToActionItem[];
    // AboutSection specific fields
    lightVersion?: boolean;
    Media?: MediaItem;
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
  number: string;
  Title: string;
  Description: string;
  Descriptio: string; // оставляем для обратной совместимости
  Number?: string; // для обратной совместимости
  Icon: {
    url: string;
  };
}

export interface ButtonFormation {
  Text: string;
  href: string;
  Variant: 'primary' | 'secondary';
}


export interface IncludedBlockData {
  id: number;
  image: string;
  Image?: {
    url: string;
  };
  number: string;
  Number?: string; // для обратной совместимости
  name: string;
  Title?: string;
  text: string;
  Description?: string;
  buttonText: string;
  buttonHref?: string;
}




export interface CustomerBlock {
  id: number;
  iconDefault: string;
  iconWhite: string;
  title: string;
  Title?: string; // для обратной совместимости
  description: string;
  Description?: string; // для обратной совместимости
  CustomersBlockIconUp?: {
    url: string;
  };
  CustomersBlockIconCenter?: {
    url: string;
  };
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