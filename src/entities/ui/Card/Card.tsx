import classNames from "classnames";
import Image from "next/image";
import styles from "./Card.module.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
  image?: string;
}

export const Card = ({ className, children, image }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      {image && (
        <Image
          className={styles.image}
          width={0}
          height={0}
          sizes="100%"
          fill
          src={image}
          alt={"card-image"}
        />
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
