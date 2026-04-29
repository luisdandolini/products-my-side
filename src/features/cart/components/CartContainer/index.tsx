import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CartItemsList from "../CartItemsList";
import styles from "./Cart.module.css";

export default function CartContainer() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>
          <ArrowLeft size={16} /> Voltar para produtos
        </Link>

        <CartItemsList />
      </div>
    </div>
  );
}
