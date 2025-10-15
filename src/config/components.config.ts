import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import IncludedSection from "@/components/sections/IncludedSection/IncludedSection";
import CustomersSection from "@/components/sections/CustomersSection/CustomersSection";
import VideoSection from "@/components/sections/VideoSection/VideoSection";
import BigGallarySection from "@/components/sections/BigGallarySection/BigGallarySection";
import GallarySection from "@/components/sections/GallarySection/GallarySection";
import GallaryWithButtons from "@/components/sections/GallaryWithButtons/GallaryWithButtons";
import AdvantagesSection from "@/components/sections/AdvantagesSection/AdvantagesSection";
import AdvantagesSectionV2 from "@/components/sections/AdvantagesSectionV2/AdvantagesSectionV2";
import CallToAction from "@/components/sections/CallToAction/CallToAction";
import CallToActionV2 from "@/components/sections/CallToActionV2/CallToActionV2";
import TextSection from "@/components/sections/TextSection/TextSection";
import ContentSection from "@/components/sections/ContentSection/ContentSection";

export const sectionsBase: { [key: string]: any } = {
  'sections.hero-section': HeroSection,
  'sections.about-section': AboutSection,
  'sections.included-section': IncludedSection,
  'sections.customers-section': CustomersSection,
  'sections.video-section': VideoSection,
  'sections.big-gallary-section': BigGallarySection,
  'sections.gallary-section': GallarySection,
  'sections.gallary-with-buttons': GallaryWithButtons,
  'sections.advantages-section': AdvantagesSection,
  'sections.advantages-section-v2': AdvantagesSectionV2,
  'sections.call-to-action': CallToAction,
  'sections.call-to-action-v2': CallToActionV2,
  'sections.text-section': TextSection,
  'sections.content-section': ContentSection,
};