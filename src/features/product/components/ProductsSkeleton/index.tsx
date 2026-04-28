import styles from "./ProductsSkeleton.module.css";

const cx = (...classes: string[]) => classes.join(" ");

function SkeletonCard() {
  return (
    <div className={styles.card}>
      <div className={cx(styles.skeleton, styles.cardImage)} />
      <div className={styles.cardBody}>
        <div className={cx(styles.skeleton, styles.lineShort)} />
        <div className={cx(styles.skeleton, styles.line)} />
        <div className={cx(styles.skeleton, styles.lineShort)} />
        <div className={cx(styles.skeleton, styles.linePrice)} />
        <div className={cx(styles.skeleton, styles.line)} />
        <div className={cx(styles.skeleton, styles.lineShort)} />
        <div className={cx(styles.skeleton, styles.lineButton)} />
      </div>
    </div>
  );
}

export default function ProductsSkeleton() {
  return (
    <div className={styles.page}>
      <div className={styles.filtersWrapper}>
        <div className={styles.filtersRow}>
          <div className={cx(styles.skeleton, styles.searchSkeleton)} />
          <div className={cx(styles.skeleton, styles.selectSkeleton)} />
        </div>
        <div className={cx(styles.skeleton, styles.countSkeleton)} />
      </div>
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}
