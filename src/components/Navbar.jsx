import React, { useContext } from 'react'; // Import useContext
import Darklogo from '../assets/techover-logo-dark.png';
import Lightlogo from '../assets/techover-logo.png'
import moon from '../assets/moon-bordered.svg';
import lightmoon from '../assets/moon.svg'
import { ThemeContext } from '../App'; // Import the ThemeContext

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggleTheme from ThemeContext

    const toggleDarkMode = () => {
        toggleTheme();
    };

    return (
        <div className="navbar">
            <h2>The Flag App</h2>
            <img src={theme === 'dark' ? Lightlogo : Darklogo} alt="" className='logo' />
            <div>
                <button onClick={toggleDarkMode}> 
                    <img src={theme === 'dark' ? lightmoon : moon} alt="" />
                    <p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p> 
                </button>
            </div>
        </div>
    );
}
