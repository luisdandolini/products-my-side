import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../Button";
import styles from "./Pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.button}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeft size={14} /> Anterior
      </Button>

      <span className={styles.info}>
        {currentPage} de {totalPages}
      </span>

      <Button
        className={styles.button}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Próximo <ArrowRight size={14} />
      </Button>
    </div>
  );
}
