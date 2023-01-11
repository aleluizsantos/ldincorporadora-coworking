import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./About.module.css";
import Buttom from "../buttom/Buttom";
import aos from "aos";

export default function About({ id }) {
  const router = useRouter();
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const handleGotoPlans = () => {
    router.push({
      pathname: "/planos",
    });
  };

  return (
    <div className={styles.container} id={id}>
      <article>
        <div data-aos="zoom-in" className={styles.contentImage}>
          <Image
            src="/images/ld1.jpg"
            loading="lazy"
            alt="coworking"
            width={400}
            height={400}
          />
          {/* <img alt="espaço colaborativo" src="/images/ld1.jpg" /> */}
        </div>
        <div data-aos="fade-left" className={styles.contentArticle}>
          <span>Espaços Colaborativos</span>
          <p>
            Um espaço colaborativo para trabalhar, conhecer novas pessoas,
            adquirir mais conhecimento e crescer.
          </p>
          <Buttom onclick={handleGotoPlans} title="Saiba mais »" />
        </div>
      </article>

      <article className={styles.contentInvert}>
        <div data-aos="zoom-in" className={styles.contentImage}>
          <Image
            src="/images/ld13.jpg"
            loading="lazy"
            layout="fill"
            alt="coworking"
          />
          {/* <img src="/images/ld13.jpg" alt="sala de reunião" /> */}
        </div>
        <div data-aos="fade-right" className={styles.contentArticle}>
          <span>SALAS PARA REUNIÕES</span>
          <p>
            Ambientes para realização de reuniões com possibilidade para
            locações de pacotes por hora, dia ou até mensais.
          </p>
          <Buttom onclick={handleGotoPlans} title="Saiba mais »" />
        </div>
      </article>
    </div>
  );
}
