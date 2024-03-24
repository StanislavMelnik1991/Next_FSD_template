"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./NavLink.module.scss";

export const NavLink = ({
  href = "/",
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  const pathname = usePathname();
  return (
    <Link
      className={classNames(styles.wrapper, {
        [styles.active]: pathname.startsWith(href),
      })}
      href={href}
      {...props}
    />
  );
};
