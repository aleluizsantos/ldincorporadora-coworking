import { useRouter } from "next/router";
import React, { useEffect } from "react";
import aos from "aos";
import { dataGallery } from "../data/sourceData";
import styles from "./Gallery.module.css";
import Button from "../buttom/Buttom";

export default function Gallery({ id }) {
  const router = useRouter();
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const handleGotoPlans = () => {
    router.push({ pathname: "/planos" });
  };

  return (
    <div className={styles.containerGallery} id={id}>
      <span data-aos="zoom-out-right" className={styles.title}>
        Nossas acomodações
      </span>
      <p data-aos="zoom-out-right">Seu conforto é nossa prioridade</p>

      <div className={styles.containerItem}>
        {dataGallery.map((item, idx) => {
          return (
            <div key={idx} data-aos="zoom-in" className={styles.item}>
              <div className={styles.contentItem}>
                <img src={item.urlImage} alt={item.description.title} />
                <div className={styles.contentDescription}>
                  <h2>{item.description.title}</h2>
                  <p>{item.description.subTitle}</p>
                  <Button
                    onclick={handleGotoPlans}
                    outline={true}
                    title="Saiba mais »"
                  />
                </div>
                <span>{item.description.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
