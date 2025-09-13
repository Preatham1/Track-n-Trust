import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Bus icon
const busIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61205.png",
  iconSize: [35, 35],
});

// Hardcoded 10 routes
const routes = [
  { id: 1, name: "Route 1", coords: [17.385044, 78.486671] },
  { id: 2, name: "Route 2", coords: [17.45, 78.49] },
  { id: 3, name: "Route 3", coords: [17.39, 78.5] },
  { id: 4, name: "Route 4", coords: [17.41, 78.47] },
  { id: 5, name: "Route 5", coords: [17.43, 78.45] },
  { id: 6, name: "Route 6", coords: [17.37, 78.48] },
  { id: 7, name: "Route 7", coords: [17.4, 78.52] },
  { id: 8, name: "Route 8", coords: [17.44, 78.51] },
  { id: 9, name: "Route 9", coords: [17.42, 78.49] },
  { id: 10, name: "Route 10", coords: [17.38, 78.46] },
];

const BusMap = () => {
  return (
    <MapContainer
      center={[17.385044, 78.486671]} // Initial center (Hyderabad)
      zoom={12}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Add markers for routes */}
      {routes.map((route) => (
        <Marker key={route.id} position={route.coords} icon={busIcon}>
          <Popup>{route.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default BusMap;
