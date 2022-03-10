import React, { useEffect } from "react";
import styles from "./Enterprise.module.css";
import aos from "aos";

export default function Enterprise({ sourceData = [] }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);
  return (
    <div className={styles.containerEnterprise}>
      <span data-aos="zoom-in" className={styles.title}>
        CONHEÇA NOSSOS EMPREENDIMENTOS
      </span>
      <p data-aos="zoom-in">Para você que busca qualidade de vida</p>

      <div className={styles.containerItem}>
        {sourceData.map((item, idx) => {
          return (
            <div data-aos="zoom-in" key={idx} className={styles.item}>
              <div className={styles.imageEnterprise}>
                <img src={item.url_img} alt={item.address.district} />
                <span className={styles.statusEnterprise}>{item.status}</span>
              </div>
              <div className={styles.description}>
                <p>{item.address.district}</p>
                <p>
                  {item.address.city}-{item.address.uf}
                </p>

                <div className={styles.values}>
                  <div className={styles.priceFrom}>
                    <span>Mesail apartir de:</span>
                    <span className={styles.price}>{item.price_from}</span>
                  </div>
                  <div className={styles.scale}>
                    <img
                      src="/icons/icon-scale.svg"
                      alt="icone"
                      width="25px"
                      height="12px"
                    />
                    <span>{item.footage_from}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
