export interface MediaItem {
  url: string;
  mime: string;
}

export interface CategoryOfProject {
  id: number;
  Name: string;
  slug: string;
}

export interface ProjectMediaPreview {
  id: number;
  name: string;
  alternativeText: string | null;
  width: number;
  height: number;
  mime: string;
  size: number;
  url: string;
}

export interface ProjectItem {
  id: number;
  Title: string;
  slug: string;
  ColorCode: string;
  category_of_projects: CategoryOfProject[];
  MediaPreview: ProjectMediaPreview;
  SEO: any | null;
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
    // Font size customization
    UnicFontSizeForTitle?: string;
    UnicFontSizeForTitileMobile?: string;
    // AboutSection specific fields
    lightVersion?: boolean;
    Media?: MediaItem;
    MobileMedia?: MediaItem;
    // ProjectsListSection specific fields
    Projects?: ProjectItem[];
    // VideoSection specific fields
    TitlePositionV2?: boolean;
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
  Media: {
    url: string;
  };
  name?: string;
  Title?: string;
  href?: string;
  LinkText?: string;
  Button?: ButtonFormation[] | ButtonFormation;
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
  Button?: {
    Text: string;
    href: string;
  };
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
  height?: number;
}

export interface ContentSectionRow {
  id: number;
  Title: string;
  Description: string;
  addSecondPicture: boolean | null;
  imageSide?: 'left' | 'right';
  Image: ContentSectionImage;
  Image2: ContentSectionImage | null;
}

export interface ContentSectionData {
  __component: string;
  id: number;
  Rows: ContentSectionRow[];
}