import i18n from "i18next";
import Languagedetector from "i18next-browser-languagedetector";

import { messages } from "./languages";

i18n.use(Languagedetector).init({
  debug: false,
  defaultNS: "translations",
  fallbackLng: "pt",
  ns: ["translations"],
  resources: messages,
});

export { i18n };
