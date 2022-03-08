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
        <div data-aos="flip-left" className={styles.item}>
          <span className={styles.titleItem}>
            Conheça as vantagens de alugar uma sala por hora
          </span>
          <p>
            A flexibilização do modo de trabalho é uma das consequências da
            pandemia que o mundo tem vivido. Com isso, empresas e profissionais
            liberais abriram mão dos seus escritórios fixos e optaram por
            ambientes flexíveis
          </p>
          <span className={styles.readMore}>Leia mais »</span>
        </div>

        <div data-aos="flip-left" className={styles.item}>
          <span className={styles.titleItem}>
            Conheça as vantagens de alugar uma sala por hora
          </span>
          <p>
            A flexibilização do modo de trabalho é uma das consequências da
            pandemia que o mundo tem vivido. Com isso, empresas e profissionais
            liberais abriram mão dos seus escritórios fixos e optaram por
            ambientes flexíveis
          </p>
          <span className={styles.readMore}>Leia mais »</span>
        </div>

        <div data-aos="flip-left" className={styles.item}>
          <span className={styles.titleItem}>
            Conheça as vantagens de alugar uma sala por hora
          </span>
          <p>
            A flexibilização do modo de trabalho é uma das consequências da
            pandemia que o mundo tem vivido. Com isso, empresas e profissionais
            liberais abriram mão dos seus escritórios fixos e optaram por
            ambientes flexíveis
          </p>
          <span className={styles.readMore}>Leia mais »</span>
        </div>
      </div>
    </div>
  );
}
