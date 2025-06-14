import styles from "./ItemList.module.scss";

export const ItemList = ({ title = "МЕНЮ", children, centered = false }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div
      className={`${styles.items} ${centered ? styles.centered : ""}`}
    >
      {children}
    </div>
  </section>
);
