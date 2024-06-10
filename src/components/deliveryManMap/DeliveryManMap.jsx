// src/Map.js
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DeliveryManMap = ({ latitude, longitude, receiversAddress }) => {
  useEffect(() => {
    const map = L.map("map").setView([latitude, longitude], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(`${receiversAddress}`)
      .openPopup();

    return () => {
      map.remove();
    };
  }, [latitude, longitude, receiversAddress]);

  return <div id="map" style={{ height: "50vh", width: "100%" }}></div>;
};

export default DeliveryManMap;
