import { Marker, Popup } from "react-leaflet";

export default function MapMarker({
  position,
  markerName,
  icon,
  capacity,
  status,
  setTurbineClickedCoords,
  setTurbineIdClicked,
  turbineId
}) {

  // TODO: Look into useRef to trigger popup programmatically

  return (
    <Marker
      icon={icon}
      position={position}
      eventHandlers={{
        click: (e) => {
          console.log("marker clicked", e);
          setTurbineClickedCoords(position);
          setTurbineIdClicked(turbineId);
        },
      }}
    >
      <Popup>
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>{markerName}</div>
        <div
          style={{ fontSize: "12px", color: "#555" }}
        >{`Capacity: ${capacity} MW`}</div>
        <div
          style={{
            fontSize: "12px",
            color: status === "Active" ? "green" : "red",
          }}
        >
          {`Status: ${status}`}
        </div>
      </Popup>
    </Marker>
  );
}
