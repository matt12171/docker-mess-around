import { Marker, Popup } from "react-leaflet";

export default function MapMarker({
  position,
  markerName,
  icon,
  capacity,
  status,
}) {
  // [x, y]
  // markerName

  // TODO: fix popup not displaying information on first click
  return (
    <Marker
      icon={icon}
      position={position}
      eventHandlers={{
        click: (e) => {
          console.log("marker clicked", e);
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
