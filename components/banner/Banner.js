import React, { useEffect } from "react";
import styles from "./Banner.module.css";
import aos from "aos";

export default function Banner({ id, souceData }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${souceData.url_img})` }}
      className={styles.containerBanner}
      id={id}
    >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={styles.contentBanner}
      >
        <span>{souceData.title}</span>
        <p>{souceData.subTitle}</p>
      </div>
    </div>
  );
}
