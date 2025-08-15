// src/components/NavBar.jsx
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    padding: '8px 10px',
    borderRadius: 8,
    fontSize: 14,
    color: isActive ? '#1d4ed8' : '#334155',
    background: isActive ? 'rgba(29,78,216,0.08)' : 'transparent',
  });

  return (
    <div style={{
      position: 'sticky',
      top: 0,
      background: '#fff',
      borderBottom: '1px solid #e5e7eb',
      padding: '10px 16px',
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      zIndex: 10
    }}>
      <strong style={{ marginRight: 'auto', fontSize: 16 }}>Zazim</strong>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/diagnostics" style={linkStyle}>Diagnostics</NavLink>
      <NavLink to="/movers" style={linkStyle}>Movers</NavLink>
      <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
    </div>
  );
}
