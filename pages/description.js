import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import AllotmentMap from "../components/allotmentMap/AllotmentMap";
import Buttom from "../components/buttom/Buttom";
import Forms from "../components/forms/Forms";

import styles from "../styles/Description.module.css";

export default function Description({ itemPage }) {
  const itemPageJson = JSON.parse(itemPage);

  console.log(itemPageJson);

  const positionCompany = {
    lat: itemPageJson.allotment.coordinate.lat,
    log: itemPageJson.allotment.coordinate.log,
    title: itemPageJson.address.district,
    thumbnail: itemPageJson.url_imgCover,
  };

  const handleGoogleMaps = () => {
    window.open(
      `https://www.google.com.br/maps/@${positionCompany.lat},${positionCompany.log},926m/data=!3m1!1e3?hl=pt-BR`
    );
  };

  return (
    <div className={styles.containerDescription}>
      <Menu />
      <div
        style={{ backgroundImage: `url(${itemPageJson.url_imgCover})` }}
        className={styles.containerHeader}
      >
        <p className={styles.title}>{itemPageJson.address.district}</p>

        <p className={styles.subTitle}>
          {`${itemPageJson.address.city} - ${itemPageJson.address.uf}`}
        </p>
        <div className={styles.resume}>
          <div className={styles.item}>
            <img src="/icons/icon-area.svg" alt="scale" />
            <span>{`Área total ${itemPageJson.allotment.totalArea}`}</span>
          </div>
          <div className={styles.item}>
            <img src="/icons/icon-sheet.svg" alt="scale" />
            <span>{`Área verde ${itemPageJson.allotment.greenArea}`}</span>
          </div>
          <div className={styles.item}>
            <img src="/icons/icon-person.svg" alt="scale" />
            <span>{`Área lazer ${itemPageJson.allotment.leisureArea}`}</span>
          </div>
          <div className={styles.item}>
            <img src="/icons/icon-mountain.svg" alt="scale" />
            <span>{`Lotes ${itemPageJson.allotment.amountAllotment}`}</span>
          </div>
        </div>
        <div className={styles.wareBottom} />
      </div>

      <div className={styles.descriptionAllotment}>
        <div className={styles.headerDescription}>
          <div className={styles.titleAllotment}>
            <span>{itemPageJson.address.district}</span>
            <div className={styles.subTitleAllotment}>
              <img src="icons/icon-localization.svg" alt="localization" />
              <span>
                {itemPageJson.address.city} - {itemPageJson.address.uf}
              </span>
            </div>
          </div>

          <div className={styles.infoAllotment}>
            <div>
              <img src="icons/icon-clock.svg" alt="clock" />
              <span>{itemPageJson.status}</span>
            </div>
            <div>
              <span>{`Lotes a partir de ${itemPageJson.allotment.footage_from}`}</span>
            </div>
            <div>
              <span>{`Unidade a partir de ${itemPageJson.allotment.price_from}`}</span>
            </div>
          </div>
        </div>

        <p>{itemPageJson.allotment.description}</p>
      </div>

      <div className={styles.gallery}>
        {itemPageJson.allotment.images.map((item, idx) => {
          return (
            <div key={idx} className={styles.image}>
              <img src={item.url} alt="image allotment" />
            </div>
          );
        })}
      </div>

      <div className={styles.maps}>
        <div className={styles.titleMap}>
          <span>Localização do empreendimento</span>
          <Buttom
            onclick={handleGoogleMaps}
            outline
            title="Abrir no Google maps"
          />
        </div>
        <AllotmentMap sourceData={positionCompany} />
      </div>
      <div className={styles.FormTitle}>
        <h1>Venha conferir essa excelente oportunidade</h1>
      </div>
      <Forms />
      <Footer />
    </div>
  );
}

Description.getInitialProps = ({ query: { itemPage } }) => {
  return { itemPage };
};
