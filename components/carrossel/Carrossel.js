import { useRouter } from "next/router";
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
      setImgActive(positionScroll());
      handleRight();
    }, 20000);
    return () => clearInterval(interval);
  }, [imgActive]);

  const handleLeft = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const positionScroll = () => {
    const totalScreen = window.screen.width;
    const totalScreenScroll = carousel.current.scrollWidth;
    const totalPage = totalScreenScroll / totalScreen;
    const posScroll = carousel.current.scrollLeft;

    const posImg =
      totalPage - (totalScreenScroll - posScroll) / totalScreen + 1;

    return posImg >= totalPage ? 0 : posImg;
  };

  const handleRight = () => {
    const totalScrollWidth =
      carousel.current.scrollWidth - carousel.current.offsetWidth;
    const currentScrollLeft = carousel.current.scrollLeft;

    if (currentScrollLeft >= totalScrollWidth) {
      carousel.current.scrollLeft = 0;
    } else {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  const handleReserve = () => {
    router.push({
      pathname: "/contact",
    });
  };

  return (
    <div className={styles.container} id={id}>
      <div className={styles.carrossel} ref={carousel}>
        {databackground.map((item, idx) => {
          return (
            <div key={idx} className={styles.item}>
              <img src={item.url} alt={item.title} />
              <div className={styles.contentTitleAndSubTitle}>
                <p className={styles.textTitle}>{item.title}</p>
                <p className={styles.textSubTitle}>{item.subTitle}</p>
                <div className={styles.contentButton}>
                  <Buttom onclick={handleReserve} title="RESERVE AGORA MESMO" />
                </div>
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
