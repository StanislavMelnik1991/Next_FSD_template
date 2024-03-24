import styles from "./NotFound.module.scss";

export const NotFound = async () => {
  return (
    <div className={styles.wrapper}>
      <h2>{"notFound"}</h2>
    </div>
  );
};
