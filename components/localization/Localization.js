import styles from "./Localization.module.css";
import Buttom from "../../components/buttom/Buttom";
import dynamic from "next/dynamic";

export default function Localization() {
  const MapWithNoSSR = dynamic(() => import("../maps/Map"), {
    ssr: false,
  });

  return (
    <div className={styles.containerLocalization}>
      <div className={styles.contentMaps}>
        <MapWithNoSSR />
      </div>

      <div className={styles.description}>
        <span className={styles.title}>Localização</span>
        <span className={styles.subTitle}>
          Estamos em um local privilegiado e de fácil acesso
        </span>
        <p>
          A Logo name está localizada próximo à região a Rua xxxx, no centro de
          Jales, local de fácio acesso.
        </p>

        <Buttom title="Agende uma Visita" />
      </div>
    </div>
  );
}
