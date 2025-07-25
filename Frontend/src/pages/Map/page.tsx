import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { initialMarkers } from "@/lib/data";
import L from "leaflet";
import { useLandmarkModalStore } from "@/store/landmarkStore";
import MarkerModal from "@/components/map/LandmarkModal";
import { MarkerLayer, Marker as MarkerReact } from "react-leaflet-marker";
import { User } from "lucide-react";
import FloatingMenuButton from "@/components/map/MenuButton";

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
  className: 'animate-pulse'
});

// const customIcon = new icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconSize: [38, 38], // size of the icon
// });

const defaultIcon = new L.Icon.Default();

// function LocationMarker() {
//   const [position, setPosition] = useState<latlngprop | null>(null);
//   const map = useMap();

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported by your browser");
//       return;
//     }

//     const watchId = navigator.geolocation.watchPosition(
//       (pos) => {
//         const latlng = {
//           lat: pos.coords.latitude,
//           lng: pos.coords.longitude,
//         };
//         setPosition(latlng);
//         map.flyTo(latlng, 16);
//       },
//       (err) => {
//         console.error("Geolocation error:", err);
//         alert("Unable to retrieve your location");
//       },
//       {
//         enableHighAccuracy: true,
//         maximumAge: 1000,
//         timeout: 10000,
//       }
//     );

//     return () => navigator.geolocation.clearWatch(watchId);
//   }, [map]);

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }

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
    <MarkerLayer>
      <MarkerReact position={[-6.60132, 106.63574]}>
        <div className="relative" onClick={() => {console.log('clicked')}}>
          <div className="w-12 h-12 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
          {/* Selection rings */}
          <div className="absolute inset-0 w-12 h-12 border-2 border-white rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 w-16 h-16 -m-2 border-2 border-white/50 rounded-full animate-ping opacity-50 animation-delay-300"></div>
        </div>
      </MarkerReact>
    </MarkerLayer>
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

  useEffect(() => {
    if (!userPosition) return; // Do nothing if we don't have the user's location yet

    const newRedMarkersState = markers.reduce((acc, marker) => {
      const distance = haversineDistance(userPosition, {
        lat: marker.lat,
        lng: marker.lng,
      });

      // If distance is less than 5km, mark it as red
      if (distance < 5) {
        acc[marker.id] = true;
      }
      return acc;
    }, {} as { [id: number]: boolean });

    setRedMarkers(newRedMarkersState);
  }, [userPosition, markers]);

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
          </Marker>
        ))}
      </MapContainer>
      <MarkerModal />
      <FloatingMenuButton />
    </div>
  );
}

export default MapPage;
