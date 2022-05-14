import React, { useEffect } from "react";
import styles from "./Blog.module.css";
import aos from "aos";

export default function Blog({ id, sourceData }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <div className={styles.containerBlog} id={id}>
      <span className={styles.title}>BLOG</span>

      <div className={styles.containerItem}>
        {sourceData.map((item, idx) => {
          return (
            <div key={idx} data-aos="flip-left" className={styles.item}>
              <span className={styles.titleItem}>{item.title}</span>
              <p>{item.description}</p>
              {/* <span className={styles.readMore}>Leia mais »</span> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
