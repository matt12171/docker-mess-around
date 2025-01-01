import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MapMarker from "./MapMarker";
// import { MOCK_TURBINE } from "../data";
import { turbineIcon } from "../Icon";


const MapWrapper = ({ coords }) => {
  const map = useMap();

  map.flyTo(coords, map.getZoom());
};

export default function Map({ setTurbineIdClicked, setTurbineClickedCoords, turbineClickedCoords, fetchedTurbineData }) {
  return (
    <div id="map-wrapper">
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
        {fetchedTurbineData.map((turbine) => {
          return (
            <MapMarker
              key={turbine.id}
              turbineId={turbine.id}
              position={[turbine.coords_lat, turbine.coords_long]}
              markerName={turbine.name}
              icon={turbineIcon}
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
