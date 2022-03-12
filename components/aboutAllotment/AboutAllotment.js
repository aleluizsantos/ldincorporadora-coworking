import React, { useEffect } from "react";
import styles from "./AboutAllotment.module.css";
import aos from "aos";

export default function AboutAllotment({ sourceData }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);
  return (
    <div className={styles.containerAboutAllotment}>
      <div className={styles.containerItem}>
        {sourceData.map((item, idx) => {
          return (
            <div
              data-aos="flip-up"
              key={idx}
              className={`${styles.item} ${
                item.dark ? styles.dark : styles.light
              }`}
            >
              <p>{item.title}</p>
              <p>{item.subTitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
