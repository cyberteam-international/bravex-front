import HeroSection from "@/components/sections/HeroSection/HeroSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import Included from "@/components/sections/Included/Included";
import CustomersSection from "@/components/sections/CustomersSection/CustomersSection";


  
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Included />
      <CustomersSection />
    </>
    
  );
}
