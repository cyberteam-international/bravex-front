import { sectionsBase } from "@/config/components.config";
import { getPageData } from "@/services/api/requests";

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
      <IncludedSection />
      <CustomersSection />
      <MachineSection />
      <ShowreelSection />
      <AdvantagesSection />
      <TechnoSection /> */}
    </>
    
  );
}