import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MapMarker from "./MapMarker";
import { MOCK_TURBINE } from "../data";


const MapWrapper = ({ coords }) => {
  const map = useMap();

  map.flyTo(coords, map.getZoom());
};

export default function Map({ setTurbineIdClicked, setTurbineClickedCoords, turbineClickedCoords }) {
  return (
    <div>
      <MapContainer
        id="map"
        center={[51.481402, 1.600944]}
        zoom={10}
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
              turbineId={turbine.id}
              position={turbine.coords}
              markerName={turbine.name}
              icon={turbine.icon}
              capacity={turbine.capacity}
              status={turbine.status}
              setTurbineClickedCoords={setTurbineClickedCoords}
              setTurbineIdClicked={setTurbineIdClicked}
            />
          );
        })}
        <MapWrapper coords={turbineClickedCoords} />
      </MapContainer>
    </div>
  );
}
