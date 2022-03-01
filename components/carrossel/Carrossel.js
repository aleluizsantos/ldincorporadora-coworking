import React, { Component } from "react";
import Image from "next/image";
import styles from "./Carrossel.module.css";
import Buttom from "../buttom/Buttom";

export default class Carrossel extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.bgWrap}>
          <Image
            alt="meeting room"
            src="/images/meeting-room.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className={styles.contentTitleAndSubTitle}>
            <p className={styles.textTitle}>Salas de Reuniões</p>
            <p className={styles.textSubTitle}>
              Temos salas de reuniões para que você possa receber seus cliente
              onde precisar. Impressione clientes, realize treinamentos ou faça
              uma apresentação de vendas de sucesso em nossos espaços de reunião
              completos.
            </p>
            <Buttom title="RESERVE AGORA MESMO" />
          </div>
        </div>
      </div>
    );
  }
}
