import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "./Card.module.css";
import { dataPlans } from "../data/sourceData";
import Button from "../../components/buttom/Buttom";
import aos from "aos";

export default function Card() {
  const router = useRouter();

  useEffect(() => {
    aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-out-cubic",
    });
  }, []);

  const handleGotoContact = () => {
    router.push({
      pathname: "/contact",
    });
  };

  return (
    <div className={styles.containerCard}>
      <div id="fiscal" className={styles.containerItem}>
        {dataPlans.map((item, idx) => {
          return (
            <div data-aos="zoom-in" key={idx} className={styles.item}>
              <div className={styles.contentHeader}>
                <span className={styles.title}>{item.title}</span>
                <div className={styles.price}>
                  <span>R$</span>
                  <span>{item.pricePlans}</span>
                </div>
                <span className={styles.description}>{item.description}</span>
              </div>

              <div className={styles.contentBenefit}>
                {item.benefit.map((itemBenefit, idx) => {
                  return (
                    <div key={idx} className={styles.benefit}>
                      <img
                        src="/icons/confirmed-orange.svg"
                        alt="icone confirmed"
                      />
                      <span>{itemBenefit.description}</span>
                    </div>
                  );
                })}
              </div>

              <div className={styles.contentButton}>
                <Button
                  onclick={handleGotoContact}
                  style={{ width: "100%" }}
                  title="Contrate já"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
