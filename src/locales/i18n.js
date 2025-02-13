import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";
import hi from "./hi.json";
// Define translations
const resources = {
  en: en,
  hi: hi,
  es: es
};

// Initialize i18next
i18next.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
