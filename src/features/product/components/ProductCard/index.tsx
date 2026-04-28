import Image from "next/image";
import { formatToBRL } from "@/src/shared/utils/formatCurrency";
import { Product } from "../../types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={priority}
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>{formatToBRL(product.price)}</p>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.button}>Ver produto</button>
      </div>
    </div>
  );
}
