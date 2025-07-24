import create from 'zustand';
import * as THREE from 'three';
import { triviaQuestions } from '../data/trivia';

export const useGameStore = create((set, get) => ({
  // Player State
  playerPosition: new THREE.Vector3(),
  setPlayerPosition: (position) => set({ playerPosition: position }),

  // Chest State
  isNearChest: false,
  setIsNearChest: (isNear) => set({ isNearChest: isNear }),
  
  chestPosition: null, 
  isChestOpen: false,

  spawnChest: (position) => {
    set({
      chestPosition: position,
      isChestOpen: false,
      isNearChest: false,
    });
  },

  despawnChest: () => set({ chestPosition: null }),

  isNearChest: false,
  setIsNearChest: (isNear) => set({ isNearChest: isNear }),
  
  openChest: () => {
    if (get().chestPosition) {
      set({ isChestOpen: true });
    }
  },

  // Trivia State
  isTriviaModalOpen: false,
  currentTrivia: null,
  
  startTrivia: () => {
    const { isNearChest, isChestOpen } = get();
    if (isNearChest && !isChestOpen) {
      const randomQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
      set({ 
        isTriviaModalOpen: true, 
        currentTrivia: randomQuestion 
      });
    }
  },

  closeTriviaModal: () => set({ isTriviaModalOpen: false, currentTrivia: null }),
}));