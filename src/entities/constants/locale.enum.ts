export enum LanguageEnum {
  RU = "ru",
  EN = "en",
  BE = "be",
}
export const ACCEPTED_LANGUAGES = Object.values(LanguageEnum);
export const DEFAULT_LANGUAGE = LanguageEnum.BE;

export const USER_LOCALE_COOKIE_NAME = "user-locale";
