import React, { useState } from 'react';
import redCard from '../Assets/Images/rr.png';
import explosionGif from '../Assets/Images/explosion.gif';

function Tiles({ className, value, onClick }) {
  const [exploded, setExploded] = useState(false);

  const tileClass =
    value === 1
      ? 'red-message'
      : value === 2
      ? 'blue-message'
      : value === -1
      ? 'mine'
      : 'yellow-message';

  const handleClick = () => {
    if (value === -1) {
      setExploded(true); // trigger explosion
      setTimeout(() => setExploded(false), 200); // reset so it can replay next time
    }
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`tile ${className} ${tileClass}`}
      style={
        value === -1
          ? {
              backgroundImage: `url(${redCard})`,
              backgroundSize: '175%',
              backgroundPosition: '-27px center',
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            }
          : { position: 'relative' }
      }
    >
      {value !== -1 ? (
        value
      ) : exploded ? (
        <img
          src={explosionGif}
          alt="Explosion"
          className="gif-overlay"
        />
      ) : null}
    </div>
  );
}

export default Tiles;
