import clsx from "clsx"
import styles from "./styles.module.css"

export default function MovieCardSkeleton() {
  return (
    <div className={styles.root}>
      <div className={clsx(styles.skeleton, styles.poster)} />
      <div className={styles.body}>
        <div className={clsx(styles.skeleton ,styles.title)} />
        <div className={clsx(styles.skeleton, styles.meta)} />
        <div className={clsx(styles.skeleton, styles.meta)} />
        <div className={clsx(styles.skeleton, styles.btn)} />
      </div>
    </div>
  )
}