import React from 'react';

export default function AlertCornerIcon() {
  return (
    <div style={iconStyle}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    </div>
  );
}

const iconStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#6D28D9', // Dark purple color
  borderRadius: '50%',
  padding: '10px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
};