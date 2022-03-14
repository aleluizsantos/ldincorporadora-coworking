import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import { Link as Linkscroll } from "react-scroll";
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
          <img
            src="/images/logo-full.svg"
            alt="logo"
            width="auto"
            height="15rem"
          />
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
              <Linkscroll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img
                  src="/icons/icon-arrow-right.svg"
                  alt="arrow"
                  height="12px"
                  width="auto"
                />
                <span>Home</span>
              </Linkscroll>
            </div>
            <div>
              <Linkscroll
                activeClass="active"
                to="ourService"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src="/icons/icon-arrow-right.svg" alt="arrow" />
                <span>Servisos</span>
              </Linkscroll>
            </div>
            <div>
              <Linkscroll
                activeClass="active"
                to="localization"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src="/icons/icon-arrow-right.svg" alt="arrow" />
                <span>Localização</span>
              </Linkscroll>
            </div>
            <div>
              <Linkscroll
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src="/icons/icon-arrow-right.svg" alt="arrow" />
                <span>Galeria</span>
              </Linkscroll>
            </div>
            <div>
              <Linkscroll
                activeClass="active"
                to="forms"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src="/icons/icon-arrow-right.svg" alt="arrow" />
                <span>Contato</span>
              </Linkscroll>
            </div>
            <div>
              <Linkscroll
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src="/icons/icon-arrow-right.svg" alt="arrow" />
                <span>Blog</span>
              </Linkscroll>
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
            <p>Telefone: (17) 99823-2323 </p>
            <p>WhatsApp: (17) 98820-2020 </p>
            <p>E-mail: contato@ldincorporadoracoworking.com.br</p>
          </div>
        </div>
      </div>

      <div className={styles.contentDeveloper}>
        <p>2022 © Site desenvolvido por lesoftware.</p>
        <div className={styles.groupSocialNetwork}>
          <img
            src="/images/icon-faceboock-footer.svg"
            alt="facebook"
            width="32px"
            height="32px"
          />
          <img
            src="/images/icon-whatsapp-footer.svg"
            alt="wahtsapp"
            width="32px"
            height="32px"
          />
          <img
            src="/images/icon-instagram-footer.svg"
            alt="instagram"
            width="32px"
            height="32px"
          />
        </div>
      </div>
    </footer>
  );
}
