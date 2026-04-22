import React from 'react';
import Background from '../../assets/background.jpg';
import './styles.css';

const Header: React.FC = () => (
  <div className="app-header">
    <img className="header-image" src={Background} alt="Pessoas usando máscaras" />
    <div className="header-overlay">
      <h1 className="header-title">COVID-19 Brasil</h1>
      <p className="header-subtitle">Dados por estado</p>
    </div>
  </div>
);

export default Header;
