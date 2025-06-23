import React from 'react';
import GameState from './GameState';
function Reset({gameState, onReset}) {
    if(gameState !== GameState.inProgress && gameState !== GameState.start) {
        return <button onClick = {onReset} className="reset-button">Play Again</button>;
    }
    return;
}

export default Reset;