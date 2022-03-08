import React, { useEffect } from "react";
import styles from "./Banner.module.css";
import aos from "aos";

export default function Banner({ id }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);
  return (
    <div className={styles.containerBanner} id={id}>
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={styles.contentBanner}
      >
        <span>UM ESPAÇO PARA ALAVANCAR SUA CARREIRA</span>
        <p>
          Aqui você encontra salas privativas e todas as condições necessárias
          para desenvolver suas habilidades profissionais
        </p>
      </div>
    </div>
  );
}
