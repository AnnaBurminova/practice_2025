import styles from "./ItemCard.module.scss";
import { useCart } from "../../context/cart/CartContext";
import { useNavigate } from "react-router-dom";

export const ItemCard = ({ id, title, description, img, cost }) => {
const { cart, addToCart, decreaseFromCart } = useCart();
  const navigate = useNavigate();
  const cartItem = cart.find((item) => item.id === id);
  const count = cartItem ? cartItem.count : 0;

  return (
    <div className={styles.card}>
      <img className={styles.image} alt={title} src={img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.bottomRow}>
        <span className={styles.price}>{cost} ₽</span>
        {count === 0 ? (
          <button
            className={styles.button}
            onClick={() => addToCart({ id, title, cost, img })}
          >
            В корзину
          </button>
        ) : (
          <button
            className={styles.goToCart}
            onClick={() => navigate("/items-cart")}
          >
            Перейти
          </button>
        )}
      </div>
      {count > 0 && (
        <div className={styles.cartControls}>
          <button
            className={styles.decrease}
            onClick={() => decreaseFromCart(id)}
            aria-label="Уменьшить количество"
          >
            −
          </button>
          <span className={styles.count}>{count}</span>
          <button
            className={styles.increase}
            onClick={() => addToCart({ id, title, cost, img })}
            aria-label="Увеличить количество"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};
