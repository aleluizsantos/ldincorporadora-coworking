import styles from "./Buttom.module.css";

export default function Buttom({
  title,
  outline = false,
  onclick = () => {},
  ...props
}) {
  return (
    <button
      className={`${outline ? styles.bottomOutLine : styles.buttomBG}`}
      onClick={onclick}
      {...props}
    >
      {title}
    </button>
  );
}
