import create from 'zustand';
import * as THREE from 'three';
import { triviaQuestions } from '../data/trivia';

export const useGameStore = create((set, get) => ({
  playerPosition: new THREE.Vector3(),
  setPlayerPosition: (position) => set({ playerPosition: position }),

  isNearChest: false,
  setIsNearChest: (isNear) => set({ isNearChest: isNear }),
  
  isChestOpen: false,
  openChest: () => set({ isChestOpen: true }),

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