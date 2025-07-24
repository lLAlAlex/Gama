import React from 'react';
import { useGameStore } from '../store/gameStore';

const buttonStyle = {
  position: 'absolute',
  bottom: '10%',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '12px 24px',
  backgroundColor: '#ffc107',
  color: 'black',
  borderRadius: '12px',
  border: '2px solid #a37a00',
  fontSize: '18px',
  fontFamily: 'sans-serif',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  transition: 'opacity 0.3s, transform 0.3s, background-color 0.2s',
  zIndex: 100
};

export const ChestInteraction = () => {
  const { isNearChest, isChestOpen, startTrivia } = useGameStore();

  const showButton = isNearChest && !isChestOpen;

  const handleClick = (e) => {
    e.stopPropagation();
    startTrivia();
  };

  if (!showButton) {
    return null; 
  }

  return (
    <button 
      style={buttonStyle}
      onClick={handleClick}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ffd54f'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
    >
      Open Chest
    </button>
  );
};
