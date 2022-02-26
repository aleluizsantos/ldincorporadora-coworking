import style from "./Menu.module.css";

export default function Menu() {
  return (
    <ul className={style.menu}>
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
  );
}
