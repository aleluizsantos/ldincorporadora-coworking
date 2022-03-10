import styles from "./Buttom.module.css";

export default function Buttom({
  title,
  outline = false,
  onclick = () => {},
  ...props
}) {
  return (
    <button
      {...props}
      onClick={onclick}
      className={`${styles.container} ${outline && styles.bottomOutLine}`}
    >
      {title}
    </button>
  );
}
