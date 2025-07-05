import styles from "./Performance.module.scss";

export const Performance = ({
  title,
  img,
  alt = "Логотип"
}) => {
  return (
    <section className={styles.performance}>
      <h2 className={styles.performanceTitle}>{title}</h2>
      <img src={img} alt={alt} loading="lazy" />
    </section>
  );
};
