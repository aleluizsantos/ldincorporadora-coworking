import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.contentNav}>
      <img src="./images/logo-full.svg" alt="logo" />
      <Burguer />
      <ul className={styles.menu}>
        <li className="current">
          <a href="#" data-hover="Home">
            Home
          </a>
        </li>
        <li>
          <a href="#" data-hover="About Us">
            Serviços
          </a>
        </li>
        <li>
          <a href="#" data-hover="Blog">
            Localização
          </a>
        </li>
        <li>
          <a href="#" data-hover="Services">
            Galerias
          </a>
        </li>
        <li>
          <a href="#" data-hover="Products">
            Contato
          </a>
        </li>
        <li>
          <a href="#" data-hover="Contact">
            Blog
          </a>
        </li>
        <li>
          <a href="#" data-hover="Contact">
            Loteamento
          </a>
        </li>
      </ul>
    </nav>
  );
}

const Burguer = () => {
  return (
    <div className={styles.burguer}>
      <div className={styles.burguer1} />
      <div className={styles.burguer2} />
      <div className={styles.burguer3} />
    </div>
  );
};
