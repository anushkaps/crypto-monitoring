import React from 'react';
import { FaBell } from 'react-icons/fa'; // npm install react-icons

export default function AlertCornerIcon() {
  return (
    <div style={iconStyle}>
      <FaBell size={24} color="#ffffff" />
    </div>
  );
}

const iconStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#FF4500',
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
};
