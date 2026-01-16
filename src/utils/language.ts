export type Language = "en" | "es" | "ru";

/**
 * Определяет текущий язык на основе домена
 */
export const getCurrentLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  
  const host = window.location.host;
  
  if (host.startsWith("spanish.")) return "es";
  if (host.startsWith("russian.")) return "ru";
  
  return "en";
};

/**
 * Проверяет, является ли текущий язык испанским
 */
export const isSpanish = (): boolean => {
  return getCurrentLanguage() === "es";
};

/**
 * Проверяет, является ли текущий язык русским
 */
export const isRussian = (): boolean => {
  return getCurrentLanguage() === "ru";
};

/**
 * Проверяет, является ли текущий язык английским
 */
export const isEnglish = (): boolean => {
  return getCurrentLanguage() === "en";
};
