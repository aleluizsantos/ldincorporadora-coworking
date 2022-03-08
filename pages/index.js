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
import Forms from "../components/forms/Forms";

export default function Home() {
  return (
    <div className={styles.main} id="top">
      <Menu id="navbar" />
      <Carrossel id="carrossel" />
      <About id="about" />
      <Banner id="banner" />
      <OurService souceData={dataOutService} id="ourService" />
      <Gallery id="gallery" />
      <Blog id="blog" />
      <Localization id="localization" />
      <Forms id="forms" />
      <Footer sourceData={dataBlog} id="footer" />
    </div>
  );
}
