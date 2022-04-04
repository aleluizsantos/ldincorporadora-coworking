import React from "react";

import styles from "./modal.module.css";

export default function Modal({ visible = false, open }) {
  return (
    <div className={`${styles.modal} ${visible && styles.visible}`}>
      <img src="/icons/confirmed.svg" alt="confirmed" />
      <div className={styles.content}>
        <span>Sua messagem foi enviada com sucesso!</span>
      </div>
      <button className={styles.buttom} onClick={() => open(false)}>
        Fechar
      </button>
    </div>
  );
}
