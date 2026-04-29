"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>FakeStore</span>

        <Link
          href={"/cart"}
          aria-label="Carrinho de compras"
          className={styles.cartButton}
        >
          <ShoppingCart size={22} />

          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
}
