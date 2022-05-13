import React, { useEffect } from "react";
import aos from "aos";
import dynamic from "next/dynamic";
import styles from "../styles/Plans.module.css";
import Menu from "../components/menu/Menu";
import Card from "../components/card/Card";
import Gallery from "../components/gallery/Gallery";
import Footer from "../components/footer/Footer";

export default function Plans() {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const MapWithNoSSR = dynamic(() => import("../components/maps/Map"), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <Menu />
      <header>
        <h1>Planos</h1>
      </header>
      <section>
        <h2 data-aos="fade-right">Posições Fixas</h2>
        <figure>
          <img src="/images/coworking.png" alt="coworking" />
        </figure>
        <article>
          <p data-aos="flip-left">
            <strong>
              Alugue conforme sua necessidade e aumente seu networking.
            </strong>
          </p>
          <p data-aos="flip-left">
            São ideias para quem procura dinamismo, flexibilidade e conforto.
            Espaço dedicado para sua equipe, sempre pronto para trabalhar. Uma
            infraestrutura completa e moderna para sua empresa. Menos burocracia
            e mais tempo para focar no seu negócio.
          </p>
        </article>
      </section>

      <Card />
      <Gallery />

      <div data-aos="flip-up" className={styles.contentMaps}>
        <MapWithNoSSR />
      </div>
      <Footer />
    </div>
  );
}
