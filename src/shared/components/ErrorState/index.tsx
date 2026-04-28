import styles from "./ErrorState.module.css";

interface ErrorStateProps {
  reset: () => void;
}

export default function ErrorState({ reset }: ErrorStateProps) {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h2 className={styles.title}>Algo deu errado</h2>
        <p className={styles.message}>
          Não foi possível carregar os produtos. Verifique sua conexão e tente
          novamente.
        </p>
        <button onClick={reset} className={styles.button}>
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
