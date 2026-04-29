"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useCart } from "@/src/shared/hooks/useCart";
import { formatToBRL } from "@/src/shared/utils/formatCurrency";
import styles from "./CartItemsList.module.css";

export default function CartItemsList() {
  const { items, removeFromCart, totalItems } = useCart();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>Seu carrinho está vazio</p>
        <p className={styles.emptyText}>
          Adicione produtos para continuar comprando.
        </p>
        <Link href="/" className={styles.emptyLink}>
          Ver produtos
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.title}>
          Seu Carrinho ({totalItems} {totalItems === 1 ? "item" : "itens"})
        </h1>

        <div className={styles.list}>
          {items.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="88px"
                  className={styles.image}
                />
              </div>

              <div className={styles.info}>
                <span className={styles.itemCategory}>{item.category}</span>
                <p className={styles.itemTitle}>{item.title}</p>
                <p className={styles.itemQuantity}>Qtd: {item.quantity}</p>
              </div>

              <p className={styles.itemPrice}>
                {formatToBRL(item.price * item.quantity)}
              </p>

              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remover ${item.title}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.summary}>
        <h2 className={styles.summaryTitle}>Resumo do pedido</h2>

        <div className={styles.summaryRow}>
          <span>Subtotal ({totalItems} {totalItems === 1 ? "item" : "itens"})</span>
          <span>{formatToBRL(total)}</span>
        </div>

        <hr className={styles.summaryDivider} />

        <div className={styles.summaryTotal}>
          <span>Total</span>
          <span>{formatToBRL(total)}</span>
        </div>

        <button className={styles.checkoutButton}>Finalizar compra</button>
      </div>
    </div>
  );
}
