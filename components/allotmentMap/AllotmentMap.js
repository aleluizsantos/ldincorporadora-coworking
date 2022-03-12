import dynamic from "next/dynamic";
import styles from "./AllotmentMap.module.css";

export default function AllotmentMap({ sourceData }) {
  const MapWithNoSSR = dynamic(() => import("../maps/Map"), { ssr: false });
  return (
    <div className={styles.containerMap}>
      <MapWithNoSSR sourceData={sourceData} />
    </div>
  );
}
