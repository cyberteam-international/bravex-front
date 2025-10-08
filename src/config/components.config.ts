import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import IncludedSection from "@/components/sections/IncludedSection/IncludedSection";
import CustomersSection from "@/components/sections/CustomersSection/CustomersSection";
import VideoSection from "@/components/sections/VideoSection/VideoSection";
import ShowreelSection from "@/components/sections/ShowreelSection/ShowreelSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection/AdvantagesSection";
import TechnoSection from "@/components/sections/TechnoSection/TechnoSection";

export const sectionsBase: { [key: string]: any } = {
  'sections.hero-section': HeroSection,
  'sections.about-section': AboutSection,
  'sections.included-section': IncludedSection,
  'sections.customers-section': CustomersSection,
  'sections.video-section': VideoSection,
  'sections.showreel-section': ShowreelSection,
  'sections.advantages-section': AdvantagesSection,
  'sections.techno-section': TechnoSection,
};