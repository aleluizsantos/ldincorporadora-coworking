import React, { useEffect } from "react";
import styles from "./Forms.module.css";
import aos from "aos";

export default function Forms({ id }) {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <div className={styles.containerForms} id={id}>
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        className={styles.description}
      >
        <span className={styles.title}>Descubra como podemos lhe ajudar!</span>
        <p>
          Estamos com grandes expectativas para atender você. Preencha o
          formulário ao lado:
        </p>
        <div className={styles.contentEmail}>
          <img src="/icons/icon-email.svg" alt="email" />
          <span>contato@logoname.com.br</span>
        </div>

        <div className={styles.contentTelefone}>
          <img src="/icons/icon-cell.svg" alt="telefone" />
          <span>(17) 3632-1212</span>
        </div>

        <button className={styles.buttomWhatsapp}>
          <img src="/images/icon-whatsapp.svg" alt="whatsapp" />
          Nosso Whatsapp
        </button>
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        className={styles.contentForms}
      >
        <input placeholder="Nome completo" />
        <div className={styles.groupField}>
          <input placeholder="(DDD) + Telefone" />
          <input placeholder="Email" />
        </div>
        <input type="number" min={1} placeholder="Numero de pessoa" />
        <textarea type="text" placeholder="Conte um pouco o que você precisa" />
        <button className={styles.buttomForms}>Enviar mensagem</button>
      </div>
    </div>
  );
}
