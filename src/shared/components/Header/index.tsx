"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import styles from "./Header.module.css";
import Button from "../Button";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>FakeStore</span>

        <Button aria-label="Carrinho de compras" className={styles.cartButton}>
          <ShoppingCart size={22} />

          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </Button>
      </div>
    </header>
  );
}
