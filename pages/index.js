import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import { dataOutService, dataBlog } from "../components/data/sourceData";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import Carrossel from "../components/carrossel/Carrossel";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import OurService from "../components/ourService/OurService";
import Gallery from "../components/gallery/Gallery";
import Blog from "../components/blog/Blog";
import Localization from "../components/localization/Localization";

export default function Home() {
  return (
    <div className={styles.main}>
      <Menu />
      <Carrossel />
      <About />
      <Banner />
      <OurService souceData={dataOutService} />
      <Gallery />
      <Blog />
      <Localization />
      <Footer sourceData={dataBlog} />
    </div>
  );
}
