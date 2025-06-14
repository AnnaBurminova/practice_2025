import styles from "./CatalogBanner.module.scss";
import bannerLogo from "./images/bannerLogo.jpg";
import { PrimaryButton } from "../../../components/primaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";

export const CatalogBanner = () => {
  const navigate = useNavigate();

  const goToCatalog = () => {
    navigate("/catalog-items");
  };

  return (
    <section className={styles.catalogBanner}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            Открой для себя свои идеальные кроссовки
          </h2>
          <p className={styles.subtitle}>
            Ты заслуживаешь стиль и комфорт. Исследуй наш каталог — больше 500 моделей от топовых брендов.
          </p>
          <PrimaryButton onClick={goToCatalog}>
            Перейти в каталог
          </PrimaryButton>
        </div>
        <img
          src={bannerLogo}
          alt="Логотип"
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};
