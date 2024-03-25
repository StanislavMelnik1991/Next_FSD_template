"use server";
import { cookies } from "next/headers";
import {
  USER_LOCALE_COOKIE_NAME,
  LanguageEnum,
  ACCEPTED_LANGUAGES,
  DEFAULT_LANGUAGE,
} from "@entities/constants";

export const setLocaleCookies = async (lang: LanguageEnum) => {
  const locale = ACCEPTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
  cookies().set({
    name: USER_LOCALE_COOKIE_NAME,
    value: locale,
  });
};
