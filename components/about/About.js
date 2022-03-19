import React, { useEffect } from "react";
import styles from "./About.module.css";
import Buttom from "../buttom/Buttom";
import aos from "aos";

export default function About({ id }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <div className={styles.container} id={id}>
      <article>
        <div data-aos="zoom-in" className={styles.contentImage}>
          <img
            alt="about-room-working"
            src="https://res.cloudinary.com/lesoftware/image/upload/v1647291141/lpincorporadora/LD_15_qu9di6.webp"
          />
        </div>
        <div data-aos="fade-left" className={styles.contentArticle}>
          <span>Espaços Colaborativos</span>
          <p>
            Um espaço colaborativo para trabalhar, conhecer novas pessoas,
            adquirir mais conhecimento e crescer.
          </p>
          {/* <Buttom title="SAIBA MAIS »" /> */}
        </div>
      </article>

      <article className={styles.contentInvert}>
        <div data-aos="zoom-in" className={styles.contentImage}>
          <img
            alt="about-room-private"
            src="https://res.cloudinary.com/lesoftware/image/upload/v1647291142/lpincorporadora/LD_7_cydywt.webp"
          />
        </div>
        <div data-aos="fade-right" className={styles.contentArticle}>
          <span>SALAS PARA REUNIÕES</span>
          <p>
            Ambientes para realização de reuniões com possibilidade para
            locações de pacotes por hora, dia ou até mensais.
          </p>
          {/* <Buttom title="SAIBA MAIS »" /> */}
        </div>
      </article>
    </div>
  );
}
