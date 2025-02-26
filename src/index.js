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
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }
  board[start[0]][start[1]] = 1;
  // make board of visited positions
  console.log(board);
}

knightMoves([0, 0], [7, 7]);
