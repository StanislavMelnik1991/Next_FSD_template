"use client";
import classNames from "classnames";
import styles from "./Theme.module.scss";
import "./globals.scss";

interface Props {
  className: string;
  children: React.ReactNode;
}

export const ThemeLayout = ({ className, children }: Props) => {
  return (
    <body className={classNames(styles.wrapper, className)}>{children}</body>
  );
};
