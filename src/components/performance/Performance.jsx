import { PrimaryButton } from "../primaryButton/PrimaryButton";
import styles from "./Performance.module.scss";

export const Performance = ({
  title,
  description = "Закажите прямо сейчас",
  img,
  alt = "Логотип"
}) => {
  return (
    <section className={styles.performance}>
      <h2 className={styles.performanceTitle}>{title}</h2>
      <p className={styles.performanceDescription}>{description}</p>
      <PrimaryButton>Заказать</PrimaryButton>
      <img src={img} alt={alt} loading="lazy" />
    </section>
  );
};
