import React, { useState } from 'react';

interface SidebarProps {
  coins: { id: string; name: string }[]; // Array of coins with id and name
  fetchPrice: (coinId: string) => void; // Function to fetch the price
}

export default function Sidebar({ coins, fetchPrice }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search input

  // Filter coins based on the search term
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar">
      <h2>Coins</h2>
      <input
        type="text"
        placeholder="Search coins..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul className="coin-list">
        {filteredCoins.slice(0, 100).map((coin) => (
          <li key={coin.id} onClick={() => fetchPrice(coin.id)} className="coin-item">
            {coin.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
