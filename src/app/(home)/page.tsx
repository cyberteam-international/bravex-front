import { sectionsBase } from "@/config/components.config";
import { getHomePageData } from "@/services/api/requests";
import StartScreen from "@/components/StartScreen/StartScreen";

export default async function Home() {
  let homePageData: any = null;
  try {
    const response = await getHomePageData();
    console.log("Home page data:", response.data);
    console.log("Home page test:");
    homePageData = response.data.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
  }

  // Фоллбек, если данных нет
  if (!homePageData || !homePageData.pages) {
    console.error("No home page data or pages found:", homePageData);
    return <main>Загрузка данных...</main>;
  }

  return (
    <>
      <StartScreen pages={homePageData.pages} />
    </>
  );
}