import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main style={{ padding: '2rem 0' }}>
      <h1>Zazim Movers Hub</h1>
      <ul>
        <li><Link to="/diagnostics">Diagnostics</Link></li>
        <li><Link to="/movers">Movers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </main>
  );
}
