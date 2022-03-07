import styles from "./Forms.module.css";
import Buttom from "../../components/buttom/Buttom";

export default function Forms() {
  return (
    <div className={styles.containerForms}>
      <div className={styles.description}>
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

      <div className={styles.contentForms}>
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
