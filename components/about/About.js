import styles from "./About.module.css";
import Buttom from "../buttom/Buttom";

export default function About() {
  return (
    <div className={styles.container}>
      <article>
        <div className={styles.contentImage}>
          <img alt="about-room-working" src="/images/about-room-working.svg" />
        </div>
        <div className={styles.contentArticle}>
          <span>Espaços Colaborativos</span>
          <p>
            Um espaço colaborativo para trabalhar, conhecer novas pessoas,
            adquirir mais conhecimento e crescer.
          </p>
          <Buttom title="SAIBA MAIS »" />
        </div>
      </article>

      <article className={styles.contentInvert}>
        <div className={styles.contentImage}>
          <img alt="about-room-private" src="/images/about-room-private.svg" />
        </div>
        <div className={styles.contentArticle}>
          <span>SALAS PARA REUNIÕES</span>
          <p>
            Ambientes para realização de reuniões com possibilidade para
            locações de pacotes por hora, dia ou até mensais.
          </p>
          <Buttom title="SAIBA MAIS »" />
        </div>
      </article>
    </div>
  );
}
