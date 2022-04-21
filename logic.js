let players = ['x', 'o'];
let activePlayer = 0;
let board;

function startGame() {
   board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
  activePlayer = 0;
  renderBoard(board);
}

function click(row, column) {
  let currentPlayer = players[activePlayer];
  board[row][column] = currentPlayer;
  renderBoard(board);
  let busyColumn = 0;
  let busyRow = 0;
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < board.length; i = i + 1) {
    if (board[row][i] === currentPlayer) {
      busyColumn = busyColumn + 1;
      if (busyColumn === board.length) {
        showWinner(players.indexOf(currentPlayer));
      }
    }
  }
  
  for (let i = 0; i < board.length; i = i + 1) {
    if (board[i][column] === currentPlayer) {
      busyRow = busyRow + 1;
      if (busyRow === board.length) {
        showWinner(players.indexOf(currentPlayer));
      }
    }
  }

  for (let i = 0; i < board.length; i = i + 1) {
    if (board[i][board.length - 1 - i] === currentPlayer) {
      diagonal1 = diagonal1 + 1;
      if (diagonal1 === board.length) {
        showWinner(players.indexOf(currentPlayer));
      }
    }
  }

  for (let i = 0; i < board.length; i = i + 1) {
    if (board[i][i] === currentPlayer) {
      diagonal2 = diagonal2 + 1;
      if (diagonal2 === board.length) {
        showWinner(players.indexOf(currentPlayer));
      }
    }
}

  switch (activePlayer) {
    case 0:
      activePlayer = 1;
      break;
    default:
      activePlayer = 0;
      break;
  }
}  