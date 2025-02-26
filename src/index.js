import './style.css';

function knightMoves(start, end) {
  let knightRules = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ]; // all move a knight can make from current position
  // [x(positive is right), y(positive is up)]

  let q = [];
  q.push(start);
  //que of positions to explore

  let board = [];
  makeBoard(board);

  board[start[0]][start[1]] = 1;
  // make board of visited positions
  console.log(board);
  let movePath = [];
  makeBoard(movePath);

  while (q.length) {
    let current = q.shift();
    if (end[0] === current[0] && end[1] === current[1]) {
      return movePath[current[0]][current[1]];
    }
    for (let i = 0; i < 8; i++) {
      let newPos = [
        current[0] + knightRules[i][0],
        current[1] + knightRules[i][1],
      ];
      if (onBoard(newPos) && board[newPos[0]][newPos[1]] === 0) {
        board[newPos[0]][newPos[1]] = 1;
        movePath[newPos[0]][newPos[1]] = movePath[current[0]][current[1]] + 1;
        q.push(newPos);
      }
    }
  }
  return -1;
}

function makeBoard(board) {
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }
  return board;
}

function onBoard(coords) {
  if (0 <= coords[0] && coords[0] < 8) {
    if (0 <= coords[1] && coords[1] < 8) {
      return true;
    }
  }
  return false;
}

console.log(knightMoves([0, 0], [7, 7]));
