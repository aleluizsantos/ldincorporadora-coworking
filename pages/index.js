import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import Carrossel from "../components/carrossel/Carrossel";
import styles from "../styles/Home.module.css";
import About from "../components/about/About";

export default function Home() {
  return (
    <div className={styles.main}>
      <Menu />
      <Carrossel />
      <About />
      <Footer />
    </div>
  );
}
