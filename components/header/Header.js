import styles from "./Header.module.css";

export default function Header({ sourceDate }) {
  return (
    <div
      style={{ backgroundImage: `url(${sourceDate?.url_img})` }}
      className={styles.containerAllotment}
    >
      <p className={styles.title}>{sourceDate?.title}</p>
      <p className={styles.subTitle}>{sourceDate?.subTitle}</p>
      <div className={styles.wareBottom} />
    </div>
  );
}
