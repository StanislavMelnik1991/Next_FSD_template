"use client";
import { useEffect } from "react";
import { setLocaleCookies } from "features/server";
import { LanguageEnum } from "@entities/constants";

interface Props {
  lang?: LanguageEnum;
}

export const LocalesLayout = ({ lang }: Props) => {
  useEffect(() => {
    if (lang) {
      setLocaleCookies(lang);
    }
  }, [lang]);
  return <div></div>;
};
