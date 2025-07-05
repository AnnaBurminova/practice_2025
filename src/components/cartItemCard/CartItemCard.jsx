import styles from "./CartItemCard.module.scss";

export const CartItemCard = ({
  img,
  title,
  cost,
  count,
  checked,
  onCheck,
  onRemove,
  onIncrease,
  onDecrease,
}) => (
  <div className={styles.cartItem}>
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={checked}
      onChange={onCheck}
      aria-label="Выбрать товар"
    />
    <img src={img} alt={title} className={styles.cartItemImage} />
    <div className={styles.cartItemInfo}>
      <span className={styles.cartItemTitle}>{title}</span>
      <span className={styles.cartItemPrice}>{cost} ₽</span>
      <div className={styles.cartItemControls}>
        <button className={styles.controlBtn} onClick={onDecrease} aria-label="Уменьшить">−</button>
        <span className={styles.cartItemCount}>{count}</span>
        <button className={styles.controlBtn} onClick={onIncrease} aria-label="Увеличить">+</button>
      </div>
    </div>
    <button className={styles.removeBtn} onClick={onRemove}>Удалить</button>
  </div>
);
