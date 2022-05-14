import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import styles from "./Map.module.css";
import mapIcon from "../../utils/mapIcon";

// Company coordinate
const positionOrganization = {
  lat: -20.259405,
  log: -50.560957,
  title: "LD Incorporador Coworking",
  thumbnail: "/images/company.jpg",
};

const Map = ({ id, sourceData = positionOrganization }) => {
  const token = process.env.mapboxToken;

  return (
    <MapContainer
      center={[sourceData.lat, sourceData.log]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      id={id}
    >
      <TileLayer
        attribution='&amp;copy <a href="httpa://lesoftware.com.br">lesoftware</a> contributors'
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
      />
      <Marker
        position={[sourceData.lat, sourceData.log]}
        title={sourceData.title}
        icon={mapIcon}
        draggable={false}
        animate={true}
      >
        <Popup>
          <div className={styles.mapPopup}>
            <img src={sourceData.thumbnail} alt="company" />
            <span>{sourceData.title}</span>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
