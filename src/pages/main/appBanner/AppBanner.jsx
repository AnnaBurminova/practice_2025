import bannerLogo from "./images/bannerLogo.png";
import styles from "./AppBanner.module.scss";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";

export const AppBanner = () => (
  <section className={styles.banner}>
    <div className={styles.content}>
      <div className={styles.titleWrapper}>
        <p className={styles.text}>Твои кроссовки — всегда под рукой</p>
        <p className={styles.subtext}>
          Выбирай, заказывай и получай бонусы за стильные покупки в пару касаний.
        </p>
        <PrimaryButton>Скачать приложение</PrimaryButton>
      </div>
      <img alt="Логотип" src={bannerLogo} className={styles.phone} />
    </div>
  </section>
);
