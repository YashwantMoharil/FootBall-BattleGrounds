import React, { useEffect } from "react";
import { useChannelStateContext, useChatContext } from "stream-chat-react"
import { useState } from "react";
import Cookies from "universal-cookie"
import Board from "./Board";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import Mines from "./Mines";


function TicTacToe() {
  const [player, setPlayer] = useState("X");
  const [turn, setTurn] = useState("X");


  const { channel } = useChannelStateContext();
  const { client } = useChatContext();
  const [tiles, setTiles] = useState(Array(64).fill(null));
  const [mines, setMines] = useState(Array(64).fill(null));
  const [mineCount, setMineCount] = useState(5);
  const [strike, setStrike] = useState(null);
  const [gameState, setGameState] = useState(GameState.mineCreation);
  const cookies = new Cookies();
  const [minesBlasted, setMinesBlasted] = useState(() => new Map());

  function fillMines() {
    if (gameState !== GameState.mineCreation) return;
    let newGrid = Mines(mineCount);
    setMines(newGrid);
    //console.log(newGrid);
    setGameState(GameState.start);
  }

  useEffect(() => {
    fillMines(mines, setMines);
  }, [mines]);

  const handleTileclick = async (index) => {
    console.log(minesBlasted[client.userID])
    if (gameState !== GameState.start && gameState !== GameState.inProgress) return;
    setGameState(GameState.inProgress);
    if (tiles[index] !== null || player !== turn) return;
    const newTiles = [...tiles];
    newTiles[index] = mines[index];
    setTiles(newTiles);

    if (newTiles[index] === -1) {
      const newMineCount = mineCount - 1;
      setMineCount(newMineCount);
      setMinesBlasted(prev => ({
        ...prev,
        [client.userID]: (prev[client.userID] ?? 0) + 1
      }));
      if (newMineCount === 0) {
        setGameState(GameState.gameover);
      }
    }
    setTurn(turn === 'X' ? 'O' : 'X');
    console.log(channel)
    await channel.sendEvent({
      type: "game move",
      data: { mines, newTiles, turn: turn === 'X' ? 'O' : 'X' }
    })
  };

  channel.on((event) => {
    if (event.type === "game move" && event.user.id !== client.userID) {
      setMines(event.data.mines)
      setTiles(event.data.newTiles)
      setPlayer(event.data.turn);
      setTurn(event.data.turn);
    }
  })

  const handleReset = () => {
    setTiles(Array(64).fill(null));
    setTurn("X");
    setGameState(GameState.start);
    setStrike(null);
  };

  function checkWinner() {
    const isBoardFull = !tiles.includes(null);
    if (isBoardFull) {
      setGameState(GameState.tie);
    }
  }

  useEffect(() => {
    checkWinner(tiles, setStrike);
  }, [tiles]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <h4>{turn === player ? client.user.name : "Opponent"} plays with {JSON.stringify(minesBlasted)} tiles broken</h4>
      <Board
        player={player}
        tiles={tiles}
        onTileClick={handleTileclick}
        strike={strike}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  );
}
export default TicTacToe;
