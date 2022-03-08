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
            <img src="/images/room-private.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-private.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-meet.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-master.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
        <div data-aos="zoom-in" className={styles.item}>
          <div className={styles.contentItem}>
            <img src="/images/room-worckshop.png" alt="room-private" />
            <span>Sala Privativa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
