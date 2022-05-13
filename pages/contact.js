import React, { useEffect } from "react";
import styles from "../styles/Contact.module.css";
import aos from "aos";
import Menu from "../components/menu/Menu";
import Forms from "../components/forms/Forms";
import Footer from "../components/footer/Footer";

export default function Contact() {
  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  return (
    <div className={styles.container}>
      <Menu />
      <header>
        <h1>Faça sua cotação</h1>
      </header>
      <section>
        <figure>
          <img src="/images/coworking.png" alt="coworking" />
        </figure>
        <article>
          <p data-aos="flip-left">Venha tomar um café conosco</p>
          <p data-aos="flip-left">
            <strong>
              Deixe seu contato e nós cuidamos do resto para você!
            </strong>
          </p>
        </article>
      </section>
      <Forms />
      <Footer />
    </div>
  );
}
