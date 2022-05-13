import React, { useState, useEffect } from "react";
import Image from "next/image";
import { animateScroll as scroll, scroller } from "react-scroll";

import Link from "next/link";
import styles from "./Menu.module.css";
import Router, { useRouter } from "next/router";

export default function Menu() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function updateSize() {
      const width = window.innerWidth;
      setOpen(width >= 1240 && false);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  function handleOpenMenu() {
    setOpen(!open);
  }

  const gotoLink = (to) => {
    setOpen(false);
    if (pathname === "/") {
      scroller.scrollTo(to, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    } else {
      to === "forms" ? scroll.scrollMore(2200) : Router.push(`/#${to}`);
    }
  };

  return (
    <nav className={styles.contentNav}>
      <div className={styles.logoImage}>
        <Image
          onClick={() => gotoLink("top")}
          src="/images/logo-full.svg"
          alt="Ld incorporadora"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Burguer open={open} onClick={handleOpenMenu} />

      <ul className={`${styles.menu} ${open && styles.menuSmall}`}>
        <li className="current">
          <a onClick={() => gotoLink("top")}>Home</a>
        </li>
        <li>
          <Link href={"/allotment"}>
            <a>Loteamento</a>
          </Link>
        </li>
        <li>
          <a onClick={() => gotoLink("ourService")}>Serviços</a>
        </li>
        <li>
          <Link href={"/planos"}>
            <a>Planos</a>
          </Link>
        </li>
        <li>
          <a onClick={() => gotoLink("localization")}>Localização</a>
        </li>
        <li>
          <a onClick={() => gotoLink("gallery")}>Galeria</a>
        </li>
        <li>
          <a onClick={() => gotoLink("forms")}>Contato</a>
        </li>
        <li>
          <a onClick={() => gotoLink("blog")}>Blog</a>
        </li>
      </ul>
    </nav>
  );
}

const Burguer = ({ onClick, open }) => {
  return (
    <div onClick={onClick} className={styles.burguer}>
      <div className={`${styles.burguer1} ${open && styles.burguer1Open}`} />
      <div className={`${styles.burguer2} ${open && styles.burguer2Open}`} />
      <div className={`${styles.burguer3} ${open && styles.burguer3Open}`} />
    </div>
  );
};
