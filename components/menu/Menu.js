import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link as Linkscroll, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import styles from "./Menu.module.css";
import { useRouter } from "next/router";

export default function Menu() {
  const { pathname } = useRouter();
  const [offset, setOffset] = useState(false);

  function logit() {
    setOffset(window.pageYOffset >= 500);
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
      {/* <img src="./images/logo-full.svg" alt="logo" /> */}
      <div className={styles.logoImage}>
        <Image
          src="/images/logo-full.svg"
          alt="Ld incorporadora"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Burguer />
      <ul className={styles.menu}>
        <li className="current">
          {pathname === "/" ? (
            <Linkscroll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Linkscroll>
          ) : (
            <Link href="/">
              <a>Home</a>
            </Link>
          )}
        </li>
        <li>
          {pathname === "/" ? (
            <Linkscroll
              activeClass="active"
              to="ourService"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Serviços
            </Linkscroll>
          ) : (
            <Link href="/">
              <a>Serviços</a>
            </Link>
          )}
        </li>
        <li>
          {pathname === "/" ? (
            <Linkscroll
              activeClass="active"
              to="localization"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Localização
            </Linkscroll>
          ) : (
            <Link href="/">
              <a>Localização</a>
            </Link>
          )}
        </li>
        <li>
          {pathname === "/" ? (
            <Linkscroll
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Galeria
            </Linkscroll>
          ) : (
            <Link href="/">
              <a>Galeria</a>
            </Link>
          )}
        </li>
        <li>
          {pathname === "/" ? (
            <Linkscroll
              activeClass="active"
              to="forms"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              contato
            </Linkscroll>
          ) : (
            <Link href="/">
              <a>contato</a>
            </Link>
          )}
        </li>
        <li>
          {pathname === "/" ? (
            <Linkscroll
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Blog
            </Linkscroll>
          ) : (
            <Link href="/">
              <a>Blog</a>
            </Link>
          )}
        </li>
        <li>
          <Link href={"/allotment"}>
            <a>Loteamento</a>
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
