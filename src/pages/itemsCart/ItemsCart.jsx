import React from 'react';
import styles from "./ItemsCart.module.scss";

import { useCart } from "../../context/cart/CartContext";
import { CartItemCard } from "../../components/cartItemCard/CartItemCard";
import { useState } from "react";

export const ItemsCart = () => {
  const { cart, addToCart, removeFromCart, decreaseFromCart } = useCart();
  const [checkedIds, setCheckedIds] = useState(cart.map(item => item.id));

  React.useEffect(() => {
    setCheckedIds((prev) => prev.filter(id => cart.some(item => item.id === id)));
  }, [cart]);

  const handleCheck = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const allChecked = checkedIds.length === cart.length && cart.length > 0;
  const handleCheckAll = () => {
    setCheckedIds(allChecked ? [] : cart.map(item => item.id));
  };

  const selectedItems = cart.filter(item => checkedIds.includes(item.id));
  const total = selectedItems.reduce((sum, item) => sum + item.cost * item.count, 0);
  const totalCount = selectedItems.reduce((sum, item) => sum + item.count, 0);

  return (
    <section className={styles.cartSection}>
      <h2 className={styles.heading}>Корзина</h2>
      <div className={styles.summaryBlock}>
        <label className={styles.checkAllLabel}>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={handleCheckAll}
            className={styles.checkAll}
          />
          Выбрать всё
        </label>
        <div className={styles.summaryInfo}>
          <span>Товаров: <b>{totalCount}</b></span>
          <span>Сумма: <b>{total} ₽</b></span>
        </div>
      </div>
      <div className={styles.cartList}>
        {cart.map((item) => (
          <CartItemCard
            key={item.id}
            img={item.img}
            title={item.title}
            cost={item.cost}
            count={item.count}
            checked={checkedIds.includes(item.id)}
            onCheck={() => handleCheck(item.id)}
            onRemove={() => removeFromCart(item.id)}
            onIncrease={() => addToCart(item)}
            onDecrease={() => decreaseFromCart(item.id)}
          />
        ))}
      </div>
      <button
        className={styles.orderBtn}
        disabled={selectedItems.length === 0}
        onClick={() => alert("Оформление заказа пока не реализовано")}
      >
        Оформить заказ
      </button>
    </section>
  );
};
