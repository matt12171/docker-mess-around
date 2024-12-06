import { Marker, Popup } from "react-leaflet";

export default function MapMarker({ position, markerName }) {
    // [x, y]
    // markerName
    return (
        <Marker
        position={position}
        eventHandlers={{
          click: (e) => {
            console.log("marker clicked", e);
          },
        }}
      >
        <Popup>
          {markerName}
        </Popup>
      </Marker>
    );
}