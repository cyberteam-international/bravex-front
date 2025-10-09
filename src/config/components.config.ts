import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import IncludedSection from "@/components/sections/IncludedSection/IncludedSection";
import CustomersSection from "@/components/sections/CustomersSection/CustomersSection";
import VideoSection from "@/components/sections/VideoSection/VideoSection";
import BigGallarySection from "@/components/sections/BigGallarySection/BigGallarySection";
import AdvantagesSection from "@/components/sections/AdvantagesSection/AdvantagesSection";
import CallToAction from "@/components/sections/CallToAction/CallToAction";

export const sectionsBase: { [key: string]: any } = {
  'sections.hero-section': HeroSection,
  'sections.about-section': AboutSection,
  'sections.included-section': IncludedSection,
  'sections.customers-section': CustomersSection,
  'sections.video-section': VideoSection,
  'sections.big-gallary-section': BigGallarySection,
  'sections.advantages-section': AdvantagesSection,
  'sections.call-to-action': CallToAction,
};