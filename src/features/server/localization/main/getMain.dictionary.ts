import { LanguageEnum } from "@entities/constants";

const dictionaryConfig = {
  be: () => import(`./locales/be.json`).then((module) => module.default),
  en: () => import(`./locales/en.json`).then((module) => module.default),
  ru: () => import(`./locales/ru.json`).then((module) => module.default),
};

export const getMainDictionary = async (lang: LanguageEnum) => {
  return dictionaryConfig[lang]();
};
