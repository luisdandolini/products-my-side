"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import styles from "./Header.module.css";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>FakeStore</span>

        <button className={styles.cartButton} aria-label="Carrinho de compras">
          <ShoppingCart size={22} />

          {totalItems > 0 && (
            <span className={styles.badge}>{totalItems}</span>
          )}
        </button>
      </div>
    </header>
  );
}
