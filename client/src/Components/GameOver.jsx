import React from "react";
import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.gameover:
      return <div className="game-over">Game Over!</div>;
    case GameState.playerOWins:
      return <div className="game-over">Player O Wins!</div>;
    case GameState.tie:
      return <div className="game-over">It's a tie!</div>;
    case GameState.inProgress:
      return <div className="game-over"> Who wins? Place your bets! </div>;
    default:
      return <div className="game-over">Let' Play!</div>;
  }
}

export default GameOver;
