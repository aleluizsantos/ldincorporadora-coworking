import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import Carrossel from "../components/carrossel/Carrossel";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Menu />
      <Carrossel />
      <Footer />
    </div>
  );
}
