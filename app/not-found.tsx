import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Página não encontrada</h1>
      <p className={styles.message}>
        O conteúdo que você está procurando não existe ou foi removido.
      </p>
      <Link href="/" className={styles.link}>
        Voltar para a loja
      </Link>
    </div>
  );
}
