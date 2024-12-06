import L from "leaflet";
import marker from "./assets/wind-power.png";

const turbineIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [16, 16],
});

export { turbineIcon };
