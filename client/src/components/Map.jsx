import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MapMarker from "./MapMarker";
import { MOCK_TURBINE } from "../data";

export default function Map() {
    // Data to feed into map? 

  return (
    <div>
      <MapContainer
        id="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "60vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {MOCK_TURBINE.map((turbine) => {
            return (
                <MapMarker
                key={turbine.id}
                position={turbine.coords}
                markerName={turbine.name}
                icon={turbine.icon}
                />
            );
        })}
      </MapContainer>
    </div>
  );
}
