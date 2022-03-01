import { container } from "./Buttom.module.css";

export default function Buttom({ title, onclick = () => {} }) {
  return (
    <button onClick={onclick} className={container}>
      {title}
    </button>
  );
}
