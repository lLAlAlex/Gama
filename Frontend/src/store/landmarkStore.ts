import create from "zustand";

interface Marker {
  id: number;
  lat: number;
  lng: number;
}

interface LandmarkModalState {
  isModalOpen: boolean;
  selectedMarker: Marker | null;
  isMarkerNear: boolean;
  distance: number; // added distance (nullable)
  openModal: (marker: Marker) => void;
  closeModal: () => void;
  setMarkerNear: (near: boolean) => void;
  setDistance: (distance: number) => void; // action to set distance
}

export const useLandmarkModalStore = create<LandmarkModalState>((set) => ({
  isModalOpen: false,
  selectedMarker: null,
  isMarkerNear: false,
  distance: 0, // initialize distance as null (or 0 if you prefer)
  openModal: (marker: Marker) => {
    set({ isModalOpen: true, selectedMarker: marker });
  },
  closeModal: () =>
    set({ isModalOpen: false, selectedMarker: null, distance: 0 }),
  setMarkerNear: (near: boolean) => set({ isMarkerNear: near }),
  setDistance: (distance: number) => set({ distance }),
}));
