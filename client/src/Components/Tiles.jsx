import React, { useState, useEffect } from 'react';
import { useChannelStateContext, useChatContext } from "stream-chat-react"
import redCard from '../Assets/Images/rr.png';
import explosionGif from '../Assets/Images/explosion.gif';

function Tiles({ className, value, onClick }) {
  const [exploded, setExploded] = useState(true);
  const { channel } = useChannelStateContext();
  const { client } = useChatContext();

  const tileClass =
    value === 1
      ? 'red-message'
      : value === 2
        ? 'blue-message'
        : value === -1
          ? 'mine'
          : 'yellow-message';

  const handleClick = async () => {
    if (value === -1) {
      setExploded(true); 
      await channel.sendEvent({
        type: "tile event",
        data: true
      })
    }
    onClick();
  };

  useEffect(() => {
    if (exploded && value == -1) {
      setTimeout(() => setExploded(false), 200);
    }
    channel.on((event) => {
      if (event.type === "tile event" && event.user.id !== client.userID) {
        console.log("hehe");
        setExploded(true);
      }
    })
  },);

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
