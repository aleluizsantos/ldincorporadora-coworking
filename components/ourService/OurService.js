import React, { useEffect } from "react";
import styles from "./OurService.module.css";
import aos from "aos";

export default function OurService({ id, souceData }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <div className={styles.containerOurService} id={id}>
      <span data-aos="zoom-in" className={styles.title}>
        NOSSOS BENEFÍCIOS
      </span>
      <p data-aos="zoom-in">Seu conforto é nossa prioridade</p>

      <div className={styles.containerItem}>
        {souceData.map((item, idx) => {
          return (
            <div data-aos="zoom-in-down" key={idx} className={styles.item}>
              <div className={styles.contentItem}>
                <img src={item.urlImage} alt={item.title} />
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
