import React, { useEffect } from "react";
import aos from "aos";
import Link from "next/link";

import styles from "./Footer.module.css";

export default function Footer() {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div data-aos="zoom-in" className={styles.logo}>
          <img src="/images/logo-full.svg" alt="Ld Incorporadora" />
        </div>

        <div data-aos="zoom-out-down" className={styles.itens}>
          <div className={styles.Title}>
            <img src="/icons/localization.svg" alt="localization" />
            <span>Endereço:</span>
          </div>
          <p>Av. Dr. Shiguero Kitayama, 151 - Jd. Paulo VI</p>
          <p>Jales SP, 15706-417</p>
        </div>

        <div data-aos="zoom-out-down" className={styles.itens}>
          <div className={styles.Title}>
            <span>Horário de Funcionamento:</span>
          </div>
          <p>Segunda à Sexta 7h às 18h</p>
        </div>

        <div data-aos="zoom-out-down" className={styles.itens}>
          <div className={styles.telephone}>
            <Link href="tel:173632-2424">
              <a style={{ display: "flex" }}>
                <img src="/icons/telephone.svg" alt="telephone" />
                <p>(17) 3621-2424</p>
              </a>
            </Link>
          </div>
          <div className={styles.telephone}>
            <Link
              href={`https://wa.me/${process.env.numberWhatsapp}?text=Olá, gostaria de saber sobre a LD Incorporadora Coworking`}
            >
              <a style={{ display: "flex" }}>
                <img src="/icons/whatsapp.svg" alt="telephone" />
                <p>(17) 99624-0441</p>
              </a>
            </Link>
          </div>
          <div className={styles.email}>
            <img src="/icons/email.svg" alt="email" />
            <p>contato@ldincorporadoracoworking.com.br</p>
          </div>
        </div>
      </div>

      <div className={styles.socialNetworks}>
        <Link href="https://www.instagram.com/ldincorporadoracoworking/">
          <a target="_blank">
            <div className={styles.networks}>
              <img src="/icons/instagram.svg" alt="icone instagram" />
              <span>@ldincorporadoracoworking</span>
            </div>
          </a>
        </Link>

        <Link href="https://www.facebook.com/profile.php?id=100083195559107">
          <a target="_blank">
            <div className={styles.networks}>
              <img src="/icons/facebook.svg" alt="icone instagram" />
              <span>ldincorporadoracoworking</span>
            </div>
          </a>
        </Link>
      </div>

      {/* <div className={styles.cnpj}>
        <p>
          LD Incorporadora Coworking, inscrita no CNPJ sob o nº
          42.972.975/0001-21 é uma organização não governamental.
        </p>
      </div> */}

      <div className={styles.creator}>
        <span>2022 © Site desenvolvido por lesoftware.</span>
      </div>
    </footer>
  );
}
