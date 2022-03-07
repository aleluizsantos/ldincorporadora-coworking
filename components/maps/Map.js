import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
  const token =
    "pk.eyJ1IjoiYWxlbHVpenNhbnRvcyIsImEiOiJjbDBmcjYwZWswcml5M2JtejVzYmJ1bGV2In0.phAuYLr0Io2m7hN4_UHyUg";

  return (
    <MapContainer
      center={[-20.259405, -50.560957]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`}
      />
      <Marker
        position={[-20.259405, -50.560957]}
        draggable={true}
        animate={true}
      >
        <Popup>
          <span>LD Incorporadora Coworking</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
