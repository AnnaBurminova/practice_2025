import styles from "./ItemCard.module.scss";

const ItemCardButton = ({ width, height, children, className = "", onClick }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      style={{ width, height }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ItemCard = ({ title, description, img, cost }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} alt={title} src={img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.price}>{cost}</span>
        <ItemCardButton>Заказать</ItemCardButton>
      </div>
    </div>
  );
};
