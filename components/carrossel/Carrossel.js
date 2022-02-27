import Image from "next/image";
import styles from "./Carrossel.module.css";

export default function Carrossel() {
  return (
    <div className={styles.container}>
      <img src="/image/bg_1.jpg" alt="background" />
    </div>
  );
}
