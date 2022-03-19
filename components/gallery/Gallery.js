import React, { useEffect } from "react";
import styles from "./Gallery.module.css";
import aos from "aos";

export default function Gallery({ id }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <div className={styles.containerGallery} id={id}>
      <span data-aos="zoom-out-right" className={styles.title}>
        Nossas acomodações
      </span>
      <p data-aos="zoom-out-right">Seu conforto é nossa prioridade</p>

      <div className={styles.containerItem}>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img
              src="https://res.cloudinary.com/lesoftware/image/upload/v1647291141/lpincorporadora/LD_15_qu9di6.webp"
              alt="room-private"
            />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img
              src="https://res.cloudinary.com/lesoftware/image/upload/v1647291645/lpincorporadora/LD_11_lbf9n8.jpg"
              alt="room-private"
            />
            <span>Sala Colaborativas</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img
              src="https://res.cloudinary.com/lesoftware/image/upload/v1647291083/lpincorporadora/LD_1_zpip9o.webp"
              alt="room-private"
            />
            <span>Sala Reunião</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img
              src="https://res.cloudinary.com/lesoftware/image/upload/v1647291141/lpincorporadora/LD_14_yavosq.jpg"
              alt="room-private"
            />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img
              src="https://res.cloudinary.com/lesoftware/image/upload/v1647291141/lpincorporadora/LD_5_kqsshn.webp"
              alt="room-private"
            />
            <span>Sala recepção</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img
              src="https://res.cloudinary.com/lesoftware/image/upload/v1647291142/lpincorporadora/LD_7_cydywt.webp"
              alt="room-private"
            />
            <span>Sala Privativa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
