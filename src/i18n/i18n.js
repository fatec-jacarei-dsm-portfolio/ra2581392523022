import en from "./en.json";
import pt from "./pt.json";

const dict = { en, pt };
export const defaultLang = "en";

export function getDict(lang) {
  return dict[lang] || dict[defaultLang];
}

export function t(lang, key) {
  const value = key
    .split(".")
    .reduce((acc, part) => acc && acc[part], getDict(lang));
  return value ?? key;
}
