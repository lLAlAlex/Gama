import React from 'react';
import { useGameStore } from '../store/gameStore';

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 101,
};

const modalContentStyle = {
  backgroundColor: '#2c3e50',
  color: '#ecf0f1',
  padding: '30px',
  borderRadius: '15px',
  width: '90%',
  maxWidth: '400px',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  border: '3px solid #3498db',
  boxShadow: '0 0 20px rgba(52, 152, 219, 0.5)',
};

const titleStyle = {
  fontSize: '28px',
  marginBottom: '20px',
  color: '#3498db',
  textTransform: 'uppercase',
};

const rewardSpriteStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: '#34495e',
  border: '2px solid #ecf0f1',
  borderRadius: '10px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
};

const rewardNameStyle = {
  fontSize: '22px',
  margin: '15px 0',
};

const claimButtonStyle = {
  padding: '12px 30px',
  fontSize: '18px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: '#27ae60',
  color: 'white',
  fontWeight: 'bold',
  marginTop: '20px',
  transition: 'background-color 0.2s',
};

export const RewardModal = () => {
  const { 
    isRewardModalOpen, 
    currentReward, 
    closeRewardModal, 
    addRewardToInventory,
    despawnChest,
  } = useGameStore();

  if (!isRewardModalOpen || !currentReward) {
    return null;
  }

  const handleClaim = () => {
    addRewardToInventory(currentReward);
    closeRewardModal();
    despawnChest();
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalContentStyle}>
        <h2 style={titleStyle}>Reward!</h2>
        <div style={rewardSpriteStyle}>
          <span>{currentReward.charAt(0)}</span>
        </div>
        <p style={rewardNameStyle}>You received 1 x {currentReward}</p>
        <button 
          style={claimButtonStyle}
          onClick={handleClaim}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2ecc71'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#27ae60'}
        >
          Claim Reward
        </button>
      </div>
    </div>
  );
};