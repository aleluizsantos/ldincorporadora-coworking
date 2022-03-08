import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Menu() {
  const [offset, setOffset] = useState(false);
  function logit() {
    setOffset(window.pageYOffset >= 200);
  }

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", logit);
    })();

    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);
  return (
    <nav className={styles.contentNav}>
      <img src="./images/logo-full.svg" alt="logo" />
      <Burguer />
      <ul className={styles.menu}>
        <li className="current">
          <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="ourService"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="localization"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Localização
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Galeria
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="forms"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            contato
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="localization"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Loteamento
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const Burguer = () => {
  return (
    <div className={styles.burguer}>
      <div className={styles.burguer1} />
      <div className={styles.burguer2} />
      <div className={styles.burguer3} />
    </div>
  );
};
