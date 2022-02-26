import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.lesoftware.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desenvolvido por{" "}
        <span className={styles.logo}>
          <Image
            src="https://res.cloudinary.com/lesoftware/image/upload/v1641345038/lesoftware/logo-red-text-write_dzzpu9.webp"
            alt="Lesoftare"
            width={110}
            height={26}
          />
        </span>
      </a>
    </footer>
  );
}
