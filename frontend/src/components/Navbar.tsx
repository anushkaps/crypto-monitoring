import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.title}>Crypto Monitor</div>
    </nav>
  );
}

const styles = {
  nav: {
    background: '#1E1E1E',
    padding: '10px',
    color: 'white',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
};
