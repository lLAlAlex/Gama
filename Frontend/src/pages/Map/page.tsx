import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { initialMarkers } from "@/lib/data";

interface latlngprop {
  lat: number;
  lng: number;
}

interface LatLngProp {
  lat: number;
  lng: number;
  id: number;
}

function LocationMarker() {
  const [position, setPosition] = useState<latlngprop | null>(null);
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const latlng = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setPosition(latlng);
        map.flyTo(latlng, 16);
      },
      (err) => {
        console.error("Geolocation error:", err);
        alert("Unable to retrieve your location");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MapPage() {
    const [markers, ] = useState<LatLngProp[]>(initialMarkers);

  return (
    <MapContainer
      center={[-6.256594023427226, 106.61834581534255]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh", width: "100vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {markers.map((marker) => (
          <Marker key={marker.id} position={[marker.lat, marker.lng]}>
            <Popup>
              Marker at [{marker.lat.toFixed(5)}, {marker.lng.toFixed(5)}]
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default MapPage;
