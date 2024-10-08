import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Forms.module.css";
import aos from "aos";
import validate from "validate.js";
import axios from "axios";
import { useRouter } from "next/router";

import schemaforms from "./schemaForms";
import Errors from "./Errors";
import Modal from "../modal/modal";

const typeForms = {
  isValid: false,
  values: {},
  touched: {},
  errors: {},
};

export default function Forms({ id }) {
  const { pathname } = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [formState, setFormState] = useState(typeForms);
  // const openWhatsapp = `https://web.whatsapp.com/send?phone=${process.env.numberWhatsapp}&text=Olá, gostaria de saber mais informações`;
  const openWhatsapp = `https://wa.me/${process.env.numberWhatsapp}?text=Olá, gostaria de saber mais informações`;

  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  /**
   * Validação do Formulário
   * @param {object} form Recebe um objeto values do formulário
   * @returns Array Retorna um array com os erros de cada campo
   */
  const validationForm = async (form) => {
    const errors = await validate(form, schemaforms);
    return errors;
  };

  // Dados do Formulário
  const handleChangeform = async (event) => {
    const dataForm = {
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.name === "phone"
            ? maskPhone(event.target.value)
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    };

    const errors = await validationForm(dataForm.values);

    dataForm = {
      ...dataForm,
      isValid: errors ? false : true,
      errors: errors || {},
    };
    setFormState(dataForm);
  };
  // Mascara de Telefone
  const maskPhone = (value) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  // Enviar dados dos formulário
  const handleSubmitForm = async () => {
    const { isValid, values } = formState;

    if (isValid) {
      console.log("valido");
      axios
        .post(
          "https://ldincorporadoracoworking.herokuapp.com/api/email",
          values
        )
        .then((resp) => console.log(resp.data));
      setFormState(typeForms);
      setOpenModal(true);
    } else {
      const errors = await validationForm(formState.values);

      let obj = {};
      const arrayErros = Object.keys(errors);
      arrayErros.forEach((element) => {
        obj = { ...obj, [element]: true };
      });

      const dataForms = {
        ...formState,
        isValid: errors ? false : true,
        touched: obj || {},
        errors: errors || {},
      };

      setFormState(dataForms);
    }
  };

  return (
    <div className={styles.containerForms} id={id}>
      <Modal visible={openModal} open={setOpenModal} />
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
          <span>contato@ldincorporadorcoworking.com.br</span>
        </div>

        <div className={styles.contentTelefone}>
          <img src="/icons/icon-cell.svg" alt="telefone" />
          <span>17 3621-2424 ∘ 17 99624-0441</span>
        </div>

        <Link href={openWhatsapp} scroll={false}>
          <a target="_blank" className={styles.buttomWhatsapp}>
            <img src="/images/icon-whatsapp.svg" alt="whatsapp" />
            Nosso Whatsapp
          </a>
        </Link>
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        className={styles.contentForms}
      >
        <div className={styles.FormGroup}>
          <label htmlFor="name">Nome Completo *</label>
          <input
            name="name"
            type="text"
            onBlur={(event) => handleChangeform(event)}
            value={formState.values.name || ""}
            onChange={(event) => handleChangeform(event)}
            // placeholder="Nome completo"
          />
          <Errors
            touched={formState.touched.name}
            errors={formState.errors.name}
          />
        </div>

        <div className={styles.groupField}>
          <div className={styles.FormGroup}>
            <label htmlFor="phone">Telefone *</label>
            <input
              name="phone"
              type="text"
              onBlur={(event) => handleChangeform(event)}
              placeholder="(00) 0000-0000"
              onChange={(event) => handleChangeform(event)}
              value={formState.values.phone || ""}
              maxLength={15}
            />
            <Errors
              touched={formState.touched.phone}
              errors={formState.errors.phone}
            />
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor="email">E-mail *</label>
            <input
              name="email"
              type="email"
              onBlur={(event) => handleChangeform(event)}
              value={formState.values.email || ""}
              onChange={(event) => handleChangeform(event)}
              // placeholder="Email"
            />
            <Errors
              touched={formState.touched.email}
              errors={formState.errors.email}
            />
          </div>
        </div>

        <div className={styles.FormGroup}>
          <label htmlFor="description">Mensagem *</label>
          <textarea
            name="description"
            type="text"
            maxLength={500}
            onBlur={(event) => handleChangeform(event)}
            value={formState.values.description || ""}
            onChange={(event) => handleChangeform(event)}
            placeholder="Conte um pouco o que você precisa"
          />
          <Errors
            touched={formState.touched.description}
            errors={formState.errors.description}
          />
        </div>

        <button
          // disabled={!formState.isValid}
          onClick={handleSubmitForm}
          className={styles.buttomForms}
        >
          Enviar mensagem
        </button>
      </div>
    </div>
  );
}
