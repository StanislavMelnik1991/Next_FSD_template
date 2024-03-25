"use client";
import { LanguageEnum } from "@entities/constants";
import { LocalesLayout } from "./locales/LocalesLayout";
import { ThemeLayout } from "./ui";

interface Props {
  className: string;
  children: React.ReactNode;
  lang?: LanguageEnum;
}

export const GlobalLayout = ({ className, children, lang }: Props) => {
  return (
    <ThemeLayout className={className}>
      <LocalesLayout lang={lang} />
      {children}
    </ThemeLayout>
  );
};
