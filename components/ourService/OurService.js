import styles from "./OurService.module.css";

export default function OurService({ souceData }) {
  return (
    <div className={styles.containerOurService}>
      <span className={styles.title}>NOSSOS BENEFÍCIOS</span>
      <p>Seu conforto é nossa prioridade</p>

      <div className={styles.containerItem}>
        {souceData.map((item, idx) => {
          return (
            <div key={idx} className={styles.item}>
              <div className={styles.contentItem}>
                <img src={item.urlImage} alt={item.title} />
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
