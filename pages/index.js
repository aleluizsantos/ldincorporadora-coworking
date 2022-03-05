import styles from "../styles/Home.module.css";
import { dataOutService } from "../components/data/sourceData";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import Carrossel from "../components/carrossel/Carrossel";
import About from "../components/about/About";
import Banner from "../components/Banner/Banner";
import OurService from "../components/ourService/OurService";
import Gallery from "../components/gallery/Gallery";

export default function Home() {
  return (
    <div className={styles.main}>
      <Menu />
      <Carrossel />
      <About />
      <Banner />
      <OurService souceData={dataOutService} />
      <Gallery />
      <Footer />
    </div>
  );
}
