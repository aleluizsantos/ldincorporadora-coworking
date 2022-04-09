import styles from "./Header.module.css";

export default function Header({ sourceData }) {
  return (
    <div
      style={{ backgroundImage: `url(${sourceData?.url_img})` }}
      className={styles.containerAllotment}
    >
      <h1 className={styles.title}>{sourceData?.title}</h1>
      <p className={styles.subTitle}>{sourceData?.subTitle}</p>
      <div className={styles.wareBottom} />
    </div>
  );
}
