import { sectionsBase } from "@/config/components.config";
import { getHomePageData } from "@/services/api/requests";
import StartScreen from "@/components/StartScreen/StartScreen";

export default async function Home() {
  let homePageData: any = null;
  try {
    const response = await getHomePageData();
    console.log("Home page data:", response.data);
    homePageData = response.data.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
  }

  // Фоллбек, если данных нет
  if (!homePageData || !homePageData.pages) {
    return null;
  }

  return (
    <>
      <StartScreen pages={homePageData.pages} />
    </>
  );
}