function Mines (numMines) {
  console.log("filling mines");
  let minesPlaced = 0;
  let numRows = 8;
  let numCols = 8;
  let mine = numMines;

  const grid = Array(numRows * numCols).fill(0); // 0 means no mine, grid size is 64
  while (minesPlaced < mine) {
    const randomIndex = Math.floor(Math.random() * (numRows * numCols)); // Random index in 1D array
    if (grid[randomIndex] !== -1) {
      if (randomIndex + 8 < 64 && grid[randomIndex + 8] === -1) continue; // Increment below
      if (randomIndex - 8 >= 0 && grid[randomIndex - 8] === -1) continue; // Increment above
      if (randomIndex + 1 < 64 && grid[randomIndex + 1] === -1) continue; // Increment below
      if (randomIndex - 1 >= 0 && grid[randomIndex - 1] === -1) continue; // Increment above
      //if (randomIndex + 9 < 64 && grid[randomIndex + 9] === -1) continue; // Increment below
      //if (randomIndex - 9 >= 0 && grid[randomIndex - 9] === -1) continue; // Increment above
      //if (randomIndex + 7 < 64 && grid[randomIndex + 7] === -1) continue; // Increment below
      //if (randomIndex - 7 >= 0 && grid[randomIndex - 7] === -1) continue; // Increment above
      grid[randomIndex] = -1; // Mark as a mine
      minesPlaced++;
    }
  }

  for (let i = 0; i < numRows * numCols; i++) {
    if (grid[i] === -1) continue;
    if (i + 8 < 64 && grid[i + 8] === -1) grid[i]++; // Increment below
    if (i - 8 >= 0 && grid[i - 8] === -1) grid[i]++; // Increment above
    if (i + 1 < 64 && grid[i + 1] === -1) grid[i]++; // Increment below
    if (i - 1 >= 0 && grid[i - 1] === -1) grid[i]++; // Increment above
    if (i + 9 < 64 && grid[i + 9] === -1) grid[i]++; // Increment below
    if (i - 9 >= 0 && grid[i - 9] === -1) grid[i]++; // Increment above
    if (i + 7 < 64 && grid[i + 7] === -1) grid[i]++; // Increment below
    if (i - 7 >= 0 && grid[i - 7] === -1) grid[i]++; // Increment above
  }
  return grid;
}
  export default Mines;