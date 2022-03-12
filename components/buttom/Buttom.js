import styles from "./Buttom.module.css";

export default function Buttom({
  title,
  outline = false,
  onclick = () => {},
  ...props
}) {
  return (
    <button
      className={`${styles.container} ${outline && styles.bottomOutLine}`}
      onClick={onclick}
      {...props}
    >
      {title}
    </button>
  );
}
