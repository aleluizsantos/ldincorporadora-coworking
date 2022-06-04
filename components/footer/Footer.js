import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import aos from "aos";

export default function Footer({ id }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <footer className={styles.contentFooter} id={id}>
      <div className={styles.footerMain}>
        <div data-aos="flip-down" className={styles.organization}>
          <div className={styles.logoImage}>
            <Image
              src="/images/logo-full.svg"
              alt="Ld incorporadora"
              width={200}
              height={200}
            />
          </div>
          <p>
            Traga a sua empresa para um coworking e faça parte da nossa
            comunidade.
          </p>
          <p>
            Salas climatizadas, internet de alta velocidade, contratos
            flexíveis, localização acessível e muito mais.
          </p>
        </div>

        <div data-aos="flip-down" className={styles.contentLink}>
          <p>Links Rapidos</p>
          <div className={styles.link}>
            <div>
              <Link href="/">
                <a>
                  <Image
                    src="/icons/icon-arrow-right.svg"
                    alt="arrow"
                    layout="fixed"
                    height={24}
                    width={24}
                  />
                  {/* <img
                    src="/icons/icon-arrow-right.svg"
                    alt="arrow"
                    height="12px"
                    width="auto"
                  /> */}
                  <span>Home</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/#ourService">
                <a>
                  <Image
                    src="/icons/icon-arrow-right.svg"
                    alt="arrow"
                    layout="fixed"
                    height={24}
                    width={24}
                  />
                  <span>Serviços</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/#localization">
                <a>
                  <Image
                    src="/icons/icon-arrow-right.svg"
                    alt="arrow"
                    layout="fixed"
                    height={24}
                    width={24}
                  />
                  <span>Localização</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/#gallery">
                <a>
                  <Image
                    src="/icons/icon-arrow-right.svg"
                    alt="arrow"
                    layout="fixed"
                    height={24}
                    width={24}
                  />
                  <span>Galeria</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/contact">
                <a>
                  <Image
                    src="/icons/icon-arrow-right.svg"
                    alt="arrow"
                    layout="fixed"
                    height={24}
                    width={24}
                  />
                  <span>Contato</span>
                </a>
              </Link>
            </div>
            <div>
              <Link href="/#blog">
                <a>
                  <Image
                    src="/icons/icon-arrow-right.svg"
                    alt="arrow"
                    layout="fixed"
                    height={24}
                    width={24}
                  />
                  <span>Blog</span>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div data-aos="flip-down" className={styles.contentAddress}>
          <div className={styles.address}>
            <span>Enderço:</span>
            <p>
              Av. Dr. Shiguero Kitayama, 151 - Jd. Paulo VI, Jales SP, 15706-417
            </p>
          </div>

          <div className={styles.schedules}>
            <span>Horário de Funcionamento:</span>
            <p>Segunda à Sexta 7h às 18h</p>
            <p>Telefone: (17) 3621-2424 </p>
            <p>WhatsApp: (17) 99624-0441 </p>
            <p>E-mail: contato@ldincorporadoracoworking.com.br</p>
          </div>
        </div>
      </div>

      <div className={styles.contentDeveloper}>
        <p>2022 © Site desenvolvido por lesoftware.</p>
        <div className={styles.groupSocialNetwork}>
          <Link href="https://www.facebook.com/LD-Incorporadora-Coworking-110745614887500">
            <a className={styles.socialNetwork} target="_blank">
              <Image
                src="/images/icon-faceboock-footer.svg"
                alt="facebook"
                layout="fixed"
                height={32}
                width={32}
              />
            </a>
          </Link>
          <Link
            href={`https://wa.me/${process.env.numberWhatsapp}?text=Olá, gostaria de saber sobre a LD Incorporadora Coworking`}
          >
            <a className={styles.socialNetwork} target="_blank">
              <Image
                src="/images/icon-whatsapp-footer.svg"
                alt="facebook"
                layout="fixed"
                height={32}
                width={32}
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/ldincorporadoracoworking/">
            <a className={styles.socialNetwork} target="_blank">
              <Image
                src="/images/icon-instagram-footer.svg"
                alt="facebook"
                layout="fixed"
                height={32}
                width={32}
              />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
