import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import Image from "next/image";
import styles from "./Carrossel.module.css";
import Buttom from "../buttom/Buttom";
import { databackground } from "../data/sourceData";

export default function Carrossel({ id }) {
  const [imgActive, setImgActive] = useState({});
  const [count, setCount] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setImgActive(databackground[0]);
    setisLoading(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setisLoading(true);
      const nextImage = count + 1;
      setCount(nextImage);
      const amountImageBg = databackground.length;

      if (nextImage >= amountImageBg) {
        setImgActive(databackground[0]);
        setCount(0);
      } else {
        setImgActive(databackground[nextImage]);
      }
      setisLoading(false);
    }, 20000);
    return () => clearInterval(interval);
  }, [count]);

  const handleReserve = () => {
    scroller.scrollTo("forms", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -70,
    });
  };

  return (
    <div className={styles.container} id={id}>
      <div className={styles.bgWrap}>
        {!isLoading && (
          <Image
            className={styles.imageBackgroundSlide}
            alt={imgActive.title}
            src={imgActive.url}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        )}

        <div className={styles.contentTitleAndSubTitle}>
          <p className={styles.textTitle}>{imgActive.title}</p>
          <p className={styles.textSubTitle}>{imgActive.subTitle}</p>
          <Buttom onclick={handleReserve} title="RESERVE AGORA MESMO" />
        </div>
      </div>
      <div className={styles.indicator}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
