import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { initialMarkers } from "@/lib/data";
import L from "leaflet";
import { useLandmarkModalStore } from "@/store/landmarkStore";
import MarkerModal from "@/components/map/LandmarkModal";

interface latlngprop {
  lat: number;
  lng: number;
}

interface LatLngProp {
  lat: number;
  lng: number;
  id: number;
}

const redIcon = new L.Icon({
  iconUrl:
    "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const defaultIcon = new L.Icon.Default();

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

function Dummy({
  setUserPosition,
}: {
  setUserPosition: (pos: latlngprop) => void;
}) {
  const map = useMap();
  useEffect(() => {
    const position = { lat: -6.60132, lng: 106.63574 };
    setUserPosition(position);
    map.flyTo([position.lat, position.lng], 16);
  }, [map, setUserPosition]);

  return (
    <Marker position={[-6.60132, 106.63574]}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MapPage() {
  const [markers] = useState<LatLngProp[]>(initialMarkers);
  const [userPosition, setUserPosition] = useState<latlngprop | null>(null);
  // Track markers that should be red
  const [redMarkers, setRedMarkers] = useState<{ [id: number]: boolean }>({});
  const [selectedDistance, setSelectedDistance] = useState<{
    [id: number]: number;
  }>({});
  const openModal = useLandmarkModalStore((state) => state.openModal);
  const setMarkerNear = useLandmarkModalStore((state) => state.setMarkerNear);
  const setDistance = useLandmarkModalStore((state) => state.setDistance);

  const toRad = (value: number) => (value * Math.PI) / 180;

  const haversineDistance = (pos1: latlngprop, pos2: latlngprop) => {
    const R = 6371; // Earth radius in km
    const dLat = toRad(pos2.lat - pos1.lat);
    const dLng = toRad(pos2.lng - pos1.lng);

    const lat1Rad = toRad(pos1.lat);
    const lat2Rad = toRad(pos2.lat);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  };

  const onMarkerClick = (marker: LatLngProp) => {
    if (userPosition) {
      const dist = haversineDistance(userPosition, {
        lat: marker.lat,
        lng: marker.lng,
      });
      setSelectedDistance((prev) => ({ ...prev, [marker.id]: dist }));

      // If distance less than 0.5km, mark it red, else reset
      if (dist < 0.5) {
        setRedMarkers((prev) => ({ ...prev, [marker.id]: true }));
        setMarkerNear(true);
      } else {
        setRedMarkers((prev) => ({ ...prev, [marker.id]: false }));
        setMarkerNear(false);
      }
      setDistance(dist);
      openModal(marker);
    } else {
      setSelectedDistance((prev) => ({ ...prev, [marker.id]: NaN }));
    }
  };

  return (
    <div className="relative">
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
        <Dummy setUserPosition={setUserPosition} />

        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={redMarkers[marker.id] ? redIcon : defaultIcon}
            eventHandlers={{
              click: () => onMarkerClick(marker),
            }}
          >
            {/* <Popup>
              Marker at [{marker.lat.toFixed(5)}, {marker.lng.toFixed(5)}]
              <br />
              {selectedDistance[marker.id] !== undefined
                ? isNaN(selectedDistance[marker.id])
                  ? "User location unknown"
                  : `Distance: ${selectedDistance[marker.id].toFixed(3)} km`
                : "Click marker to calculate distance"}
            </Popup> */}
          </Marker>
        ))}
      </MapContainer>
      <MarkerModal />
    </div>
  );
}

export default MapPage;
