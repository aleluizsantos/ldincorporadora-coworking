import {
  dataOutService,
  dataBlog,
  dataBanner,
} from "../components/data/sourceData";
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
import News from "../components/news/news";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main} id="top">
      <News />
      <Menu id="navbar" />
      <Carrossel id="carrossel" />
      <About id="about" />
      <Banner id="banner" souceData={dataBanner} />
      <OurService souceData={dataOutService} id="ourService" />
      <Gallery id="gallery" />
      <Blog id="blog" sourceData={dataBlog} />
      <Localization id="localization" />
      <Forms id="forms" />
      <Footer id="footer" />
    </div>
  );
}
