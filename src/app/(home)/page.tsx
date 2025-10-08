import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import IncludedSection from "@/components/sections/IncludedSection/IncludedSection";
import CustomersSection from "@/components/sections/CustomersSection/CustomersSection";
import MachineSection from "@/components/sections/MachineSection/MachineSection";
import ShowreelSection from "@/components/sections/ShowreelSection/ShowreelSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection/AdvantagesSection";
import TechnoSection from "@/components/sections/TechnoSection/TechnoSection";

import { getPageData } from "@/services/api/requests";


const sectionsBase: { [key: string]: any } = {
  'sections.hero-section': HeroSection,
  'sections.about-section': AboutSection,
  'sections.included-section': IncludedSection,
  'sections.customers-section': CustomersSection,
  'sections.machine-section': MachineSection,
  'sections.showreel-section': ShowreelSection,
  'sections.advantages-section': AdvantagesSection,
  'sections.techno-section': TechnoSection,
};


  
export default async function Home() {
  let sectionsToRender: any[] = [];
  try {
    const response = await getPageData("home-page");
    console.log("Home page data:", response.data);
    sectionsToRender = response?.data?.data?.Sections ?? [];
  } catch (error) {
    console.error("Error fetching home page data:", error);
  }


  // Фоллбек, если секций нет
  if (!sectionsToRender.length) {
    return null;
  }

  return (
    <>
      {sectionsToRender.map((section: any, idx: number) => {
        
        const SectionComp = sectionsBase[section.__component];
        if (!SectionComp) return null;

        return (
          <SectionComp
            key={section.id || idx}
            data={section}
          />
        );
      })}
     


      {/* 
      <AboutSection />
      <IncludedSection />
      <CustomersSection />
      <MachineSection />
      <ShowreelSection />
      <AdvantagesSection />
      <TechnoSection /> */}
    </>
    
  );
}