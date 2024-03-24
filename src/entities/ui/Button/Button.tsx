import classNames from "classnames";
import { type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";
import styles from "./Button.module.scss";

export const Button = ({
  className,
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button className={classNames(styles.wrapper, className)} {...props} />
  );
};
