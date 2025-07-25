import create from 'zustand';
import * as THREE from 'three';
import { triviaQuestions } from '../data/trivia';
import { REWARDS } from '../data/resources';

export const useGameStore = create((set, get) => ({
  // Player state
  playerPosition: new THREE.Vector3(),
  setPlayerPosition: (position) => set({ playerPosition: position }),

  // Inventory state curr player
  inventory: {
    Wood: 0,
    Iron: 0,
  },
  addRewardToInventory: (reward) => {
    set((state) => ({
      inventory: {
        ...state.inventory,
        [reward]: state.inventory[reward] + 1,
      }
    }));
    console.log(`Added ${reward} to inventory. New count:`, get().inventory);
  },

  // Chest state
  chestPosition: null, 
  isChestOpen: false,
  spawnChest: (position) => set({ chestPosition: position, isChestOpen: false, isNearChest: false }),
  despawnChest: () => set({ chestPosition: null }),
  openChest: () => { if (get().chestPosition) set({ isChestOpen: true }) },

  // Interaction state
  isNearChest: false,
  setIsNearChest: (isNear) => set({ isNearChest: isNear }),

  // Trivia state
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

  // Reward state
  isRewardModalOpen: false,
  currentReward: null,
  showReward: () => {
    const reward = REWARDS[Math.floor(Math.random() * REWARDS.length)];
    set({ isRewardModalOpen: true, currentReward: reward });
  },
  closeRewardModal: () => set({ isRewardModalOpen: false, currentReward: null }),
}));