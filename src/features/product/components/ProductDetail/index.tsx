"use client";

import Image from "next/image";
import Link from "next/link";
import { formatToBRL } from "@/src/shared/utils/formatCurrency";
import { Product } from "../../types";
import ProductCard from "../ProductCard";
import styles from "./ProductDetail.module.css";
import { useCart } from "@/src/shared/hooks/useCart";
import { ArrowLeft, PlusCircle } from "lucide-react";
import Button from "@/src/shared/components/Button";

interface ProductDetailProps {
  product: Product;
  related: Product[];
}

export default function ProductDetail({
  product,
  related,
}: ProductDetailProps) {
  const { addToCart } = useCart();
  const relatedProducts = related.filter((item) => item.id !== product.id);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.back}>
          <ArrowLeft size={16} /> Voltar para produtos
        </Link>

        <div className={styles.product}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.info}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.price}>{formatToBRL(product.price)}</p>

            <hr className={styles.divider} />

            <span className={styles.descriptionLabel}>Descrição</span>
            <p className={styles.description}>{product.description}</p>

            <Button
              className={styles.button}
              onClick={() => addToCart(product)}
            >
              Adicionar ao carrinho <PlusCircle size={16} />
            </Button>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className={styles.related}>
            <h2 className={styles.relatedTitle}>Produtos relacionados</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
