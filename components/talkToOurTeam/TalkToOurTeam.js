import Buttom from "../buttom/Buttom";
import styles from "./TalkToOurTeam.module.css";
import { animateScroll as scroll } from "react-scroll";

const handleSetActive = (to) => {
  scroll.scrollMore(900);
};

export default function TalkToOurTeam() {
  return (
    <div className={styles.containerTalkToOurTeam}>
      <div className={styles.title}>
        <span>Fale com a nossa equipe</span>
        <p>Segunda à Sexta das 8h às 18hs</p>
      </div>
      <div className={styles.buttom}>
        <Buttom outline title="Enviar Mensagem" onclick={handleSetActive} />
      </div>
    </div>
  );
}
