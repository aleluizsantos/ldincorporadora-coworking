import React, { useEffect } from "react";
import { scroller } from "react-scroll";
import styles from "./Localization.module.css";
import Buttom from "../../components/buttom/Buttom";
import dynamic from "next/dynamic";
import aos from "aos";

export default function Localization({ id }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const handleGotoForms = () => {
    scroller.scrollTo("forms", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  const MapWithNoSSR = dynamic(() => import("../maps/Map"), {
    ssr: false,
  });

  return (
    <div className={styles.containerLocalization} id={id}>
      <div data-aos="flip-up" className={styles.contentMaps}>
        <MapWithNoSSR />
      </div>

      <div data-aos="fade-left" className={styles.description}>
        <span className={styles.title}>Localização</span>
        <span className={styles.subTitle}>
          Estamos em um local privilegiado e de fácil acesso
        </span>
        <p>
          A <strong>LD Incorporadora Coworking</strong> está localizada próximo
          ao Hospital do Amor, na Avenida Dr. Shiguero Kitayama, 151, Jales,
          local de fácil acesso.
        </p>

        <Buttom onclick={handleGotoForms} title="Agende uma Visita" />
      </div>
    </div>
  );
}
