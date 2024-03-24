import { LanguageEnum } from "@entities/constants";

const dictionaryConfig = {
  be: () => import(`./locales/be/index.json`).then((module) => module.default),
  en: () => import(`./locales/en/index.json`).then((module) => module.default),
  ru: () => import(`./locales/ru/index.json`).then((module) => module.default),
};

export const getMainDictionary = async (lang: LanguageEnum) => {
  return dictionaryConfig[lang]();
};
