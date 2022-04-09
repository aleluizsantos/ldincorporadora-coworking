import {
  dataAboutAllotment,
  dataEnterprise,
} from "../components/data/sourceData";
import AboutAllotment from "../components/aboutAllotment/AboutAllotment";
import Footer from "../components/footer/Footer";
import Forms from "../components/forms/Forms";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Enterprise from "../components/enterprise/Enterprise";
import TalkToOurTeam from "../components/talkToOurTeam/TalkToOurTeam";
import Banner from "../components/banner/Banner";

const dataBanner = {
  title: "TORNANDO SEU SONHO POSSÍVEL",
  subTitle: "Essa é uma oportunidade única!",
  url_img: "/images/img-engineering.svg",
};

const dataHeader = {
  title:
    "Nós ajudamos famílias a construir sonhos com parceria, transparência e facilidade!",
  subTitle: "Venha conhecer nossos loteamentos",
  url_img: "/images/img-allotment.svg",
};

export default function Allotment() {
  return (
    <div>
      <Menu />
      <Header sourceData={dataHeader} />
      <AboutAllotment sourceData={dataAboutAllotment} />
      <Enterprise sourceData={dataEnterprise} />
      <TalkToOurTeam />
      <Banner souceData={dataBanner} />
      <Forms />
      <Footer />
    </div>
  );
}
