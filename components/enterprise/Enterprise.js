import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./Enterprise.module.css";
import aos from "aos";

export default function Enterprise({ sourceData = [] }) {
  const router = useRouter();
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const handleGotoPageDescription = (itemPage) => {
    const convertStringItemPage = JSON.stringify(itemPage);
    router.push({
      pathname: "/description",
      query: { itemPage: convertStringItemPage },
    });
  };

  return (
    <div className={styles.containerEnterprise}>
      <span data-aos="zoom-in" className={styles.title}>
        CONHEÇA NOSSOS EMPREENDIMENTOS
      </span>
      <p data-aos="zoom-in">Para você que busca qualidade de vida</p>

      <div className={styles.containerItem}>
        {sourceData.map((item, idx) => {
          return (
            <div
              onClick={() => handleGotoPageDescription(item)}
              data-aos="zoom-in"
              key={idx}
              className={styles.item}
            >
              <div className={styles.imageEnterprise}>
                <Image
                  loading="lazy"
                  src={item.url_imgCover}
                  alt={item.address.district}
                  layout="fill"
                  width={200}
                  height={200}
                />
                {/* <img src={item.url_imgCover} alt={item.address.district} /> */}
                <span className={styles.statusEnterprise}>{item.status}</span>
              </div>
              <div className={styles.description}>
                <p>{item.address.district}</p>
                <p>
                  {item.address.city}-{item.address.uf}
                </p>

                <div className={styles.values}>
                  <div className={styles.priceFrom}>
                    <span>A partir de:</span>
                    <span className={styles.price}>
                      {item.allotment.price_from}
                    </span>
                  </div>
                  <div className={styles.scale}>
                    <div className={styles.imgScale}>
                      <Image
                        src="/icons/icon-scale.svg"
                        alt="icone"
                        width={25}
                        height={25}
                      />
                    </div>

                    <span>{item.allotment.footage_from}</span>
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
