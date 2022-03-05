import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.containerBanner}>
      <div className={styles.contentBanner}>
        <span>UM ESPAÇO PARA ALAVANCAR SUA CARREIRA</span>
        <p>
          Aqui você encontra salas privativas e todas as condições necessárias
          para desenvolver suas habilidades profissionais
        </p>
      </div>
    </div>
  );
}
