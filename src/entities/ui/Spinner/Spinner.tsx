import classNames from "classnames";
import styles from "./Spinner.module.scss";

interface Props {
  className?: string;
  size?: number | string;
}

export const Spinner = ({ className, size = 50 }: Props) => {
  return (
    <div
      className={classNames(styles.wrapper, className)}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};
