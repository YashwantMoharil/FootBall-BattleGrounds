import React, { useState } from 'react';
import redCard from '../Assets/Images/rr.png';
import explosionGif from '../Assets/Images/explosion.gif';

function Tiles({ className, value, onClick }) {

    let tileClass;
    if (value === 1) {
        tileClass = "red-message";  // Apply 'red-message' class for value 1
    } else if (value === 2) {
        tileClass = "blue-message";  // Apply 'blue-message' class for value 2
    } else if(value === -1) {
        tileClass = "mine";  // Apply 'yellow-message' class for other values
    }
    else {
        tileClass = "yellow-message";  // Apply 'yellow-message' class for other values
    }

    return (
        <div
            onClick={onClick} 
            className={`tile ${className} ${tileClass}`}
            style={
                value === -1 ? {
                    backgroundImage: `url(${redCard})`,
                    backgroundSize: '175%',
                    backgroundPosition: '-27px center', // Adjust background image positioning
                    backgroundRepeat: 'no-repeat'
                } : {}
            }
        >
            {value !== -1 ? value : ''}  {/* Show the value, if not a mine */}
            {tileClass === "mine" && <img src={explosionGif} alt="Explosion" className="gif-overlay" />} {/* Show GIF on mine click */}
        </div>
    );
}

export default Tiles;
