import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.contentFooter}>
      <div className={styles.footerMain}>
        <div className={styles.organization}>
          <img src="/Image/logo-full.svg" alt="logo" />
          <p>
            Traga a sua empresa para um coworking e faça parte da nossa
            comunidade.
          </p>
          <p>
            Salas climatizadas, internet de alta velocidade, contratos
            flexíveis, localização acessível e muito mais.
          </p>
        </div>

        <div className={styles.contentLink}>
          <p>Links Rapidos</p>
          <div className={styles.link}>
            <div>
              <img src="/Image/icon-arrow-right.svg" alt="arrow" />
              <span>Home</span>
            </div>
            <div>
              <img src="/Image/icon-arrow-right.svg" alt="arrow" />
              <span>Servisos</span>
            </div>
            <div>
              <img src="/Image/icon-arrow-right.svg" alt="arrow" />
              <span>Localização</span>
            </div>
            <div>
              <img src="/Image/icon-arrow-right.svg" alt="arrow" />
              <span>Galeria</span>
            </div>
            <div>
              <img src="/Image/icon-arrow-right.svg" alt="arrow" />
              <span>Contato</span>
            </div>
            <div>
              <img src="/Image/icon-arrow-right.svg" alt="arrow" />
              <span>Blog</span>
            </div>
          </div>
        </div>

        <div className={styles.contentAddress}>
          <div className={styles.address}>
            <span>Enderço:</span>
            <p>R. da Saudade, 1864 - São Jorge, Jales SP, 15704-200</p>
          </div>

          <div className={styles.schedules}>
            <span>Horário de Funcionamento:</span>
            <p>Segunda à Sexta 7h às 18h</p>
            <p>Telefone: (17) 99823-2323 </p>
            <p>WhatsApp: (17) 98820-2020 </p>
            <p>E-mail: contato@lesoftware.com.br</p>
          </div>
        </div>
      </div>

      <div className={styles.contentDeveloper}>
        <p>2022 © Site desenvolvido por lesoftware.</p>
        <div className={styles.groupSocialNetwork}>
          <a href="https://www.facebook.com/aleluiz.santos" target="_blank">
            <img src="/Image/icon-faceboock-footer.svg" alt="facebook" />
          </a>
          <img src="/Image/icon-whatsapp-footer.svg" alt="wahtsapp" />
          <img src="/Image/icon-instagram-footer.svg" alt="instagram" />
        </div>
      </div>
    </footer>
  );
}
