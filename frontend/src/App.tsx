import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AlertBox from './components/AlertBox';
import './styles/App.css';

function App() {
  const [coins, setCoins] = useState<any[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>('bitcoin');
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    };
    fetchCoins();
  }, []);

  const fetchPrice = async (coinId: string) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd`);
      setSelectedCoin(coinId);
      setPrice(response.data[coinId]?.usd || null);
    } catch (error) {
      console.error('Error fetching price:', error);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <Sidebar coins={coins} fetchPrice={fetchPrice} />
        <div className="content">
          <h1>Crypto Price Tracker</h1>
          {price !== null ? (
            <p>
              The current price of <b>{selectedCoin}</b> is <b>${price}</b>.
            </p>
          ) : (
            <p>Select a coin to see its price.</p>
          )}
        </div>
      </div>
      <AlertBox />
    </div>
  );
}

export default App;
