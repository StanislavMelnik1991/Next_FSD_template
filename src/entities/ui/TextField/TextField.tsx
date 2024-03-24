import classNames from "classnames";
import { type DetailedHTMLProps, type InputHTMLAttributes } from "react";
import styles from "./TextField.module.scss";

export const TextField = ({
  className,
  type = "text",
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      className={classNames(styles.wrapper, className)}
      type={type}
      {...props}
    />
  );
};
