import styles from "./Main.module.scss";
import { AppBanner } from "./appBanner/AppBanner";
import { CatalogBanner } from "./catalogBanner/CatalogBanner";

export const Main = () => (
  <section className={styles.mainPage}>
    <AppBanner />
    <CatalogBanner />
  </section>
);
