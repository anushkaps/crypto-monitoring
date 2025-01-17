import React, { useState } from 'react';

export default function AlertBox() {
  const [coinId, setCoinId] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [direction, setDirection] = useState<'above' | 'below'>('above');

  const handleCreateAlert = () => {
    alert(`Alert created for ${coinId} when price is ${direction} $${targetPrice}`);
  };

  return (
    <div className="alert-box">
      <h3>Create Alert</h3>
      <input
        type="text"
        placeholder="Coin ID (e.g., bitcoin)"
        value={coinId}
        onChange={(e) => setCoinId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Target Price"
        value={targetPrice}
        onChange={(e) => setTargetPrice(e.target.value)}
      />
      <select value={direction} onChange={(e) => setDirection(e.target.value as any)}>
        <option value="above">Above</option>
        <option value="below">Below</option>
      </select>
      <button onClick={handleCreateAlert}>Create Alert</button>
    </div>
  );
}
