const LANG = process.env.NEXT_PUBLIC_LANGUAGE_TAG || "english";

const SITE_URL =
  LANG === "spanish"
    ? "https://spanish.bravexgroup.eu"
    : LANG === "russian"
      ? "https://russian.bravexgroup.eu"
      : "https://bravexgroup.eu";

const API = process.env.NEXT_PUBLIC_BASE_API_URL; // e.g. http://167.99.130.86:1337/api

async function fetchPageSlugsFromHomePage() {
  if (!API) return [];

  const url = `${API}/home-page?language_tag=${encodeURIComponent(LANG)}`;

  const res = await fetch(url);
  if (!res.ok) {
    console.log("[sitemap] Failed:", url, res.status);
    return [];
  }

  const json = await res.json();

  // Your response: { data: { pages: [ { slug: "stal" }, ... ] } }
  const pages = json?.data?.pages || [];

  const slugs = pages.map((p) => p?.slug).filter(Boolean);

  // dedupe
  return Array.from(new Set(slugs));
}

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: false,

  additionalPaths: async () => {
    const slugs = await fetchPageSlugsFromHomePage();

    // ✅ choose your real route:
    // If your Next route is "/[slug]" -> use `/${slug}`
    // If your Next route is "/pages/[slug]" -> use `/pages/${slug}`
    const urls = slugs.map((slug) => `/${slug}`);

    return urls.map((loc) => ({
      loc,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    }));
  },
};
