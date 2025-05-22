import Router, { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import styles from "./Carrossel.module.css";
import Buttom from "../buttom/Buttom";
import { databackground } from "../data/sourceData";

export default function Carrossel({ id }) {
  const carousel = useRef(null);
  const router = useRouter();
  const [imgActive, setImgActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgActive((prev) => {
        const nextIndex = (prev + 1) % databackground.length;
        carousel.current.scrollLeft = nextIndex * carousel.current.offsetWidth;
        return nextIndex;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleReserve = () => {
    router.push({
      pathname: "/contact",
    });
  };

  const gotoLink = (to) => {
    Router.push(to);
  };

  return (
    <div className={styles.container} id={id}>
      <div className={styles.carrossel} ref={carousel}>
        {databackground.map((item, idx) => {
          return (
            <div key={idx} className={styles.item}>
              <Image
                src={item.url}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/placeholder.jpg" // pode ser um blur base64 gerado
                priority={idx === 0}
              />
              {/* <img src={item.url} alt={item.title} /> */}
              <div className={styles.contentTitleAndSubTitle}>
                <p className={styles.textTitle}>{item.title}</p>
                <p className={styles.textSubTitle}>{item.subTitle}</p>
                <div className={styles.contentButton}>
                  <Buttom onclick={handleReserve} title="RESERVE AGORA MESMO" />
                </div>
                {item.link && (
                  <a
                    onClick={() => gotoLink(item.link)}
                    className={styles.link}
                  >
                    Saiba sobre o plano &rarr;
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.indicator}>
        {databackground.map((item, idx) => {
          return (
            <div key={idx} className={imgActive === idx ? styles.active : ""} />
          );
        })}
      </div>
    </div>
  );
}
