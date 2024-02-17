import React, { useState, useContext } from 'react';
import ArrowDown from '../assets/arrow-down-dark.svg';
import ArrowDownLight from '../assets/arrow-down-light.svg'
import { useRegionContext } from './RegionContext';
import { ThemeContext } from '../App';

export default function Dropdown() {
  const { setSelectedRegion } = useRegionContext();
  const [openMenu, setOpenMenu] = useState(false); 
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  }

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  }

  return (
    <div className={`dropdown-container ${openMenu ? 'open-menu' : ''}`}>
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleMenu}>
          Filter By Region <img src={theme === 'dark'? ArrowDownLight: ArrowDown } alt="" />
        </button>
      </div>
      <div className="dropdown-menu">
        <ul className="dropdown-links">
          <li onClick={() => handleRegionClick('Africa')}>Africa</li>
          <li onClick={() => handleRegionClick('Asia')}>Asia</li>
          <li onClick={() => handleRegionClick('Americas')}>Americas</li>
          <li onClick={() => handleRegionClick('Europe')}>Europe</li>
          <li onClick={() => handleRegionClick('Oceania')}>Oceania</li>
        </ul>
      </div>
    </div>
  );
}
