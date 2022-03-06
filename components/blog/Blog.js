import styles from "./Blog.module.css";

export default function Blog({ sourceData }) {
  return (
    <div className={styles.containerBlog}>
      <span className={styles.title}>BLOG</span>
      <div className={styles.containerItem}>
        <div className={styles.item}>
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

        <div className={styles.item}>
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

        <div className={styles.item}>
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
