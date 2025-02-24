import './style.css';

function knightMoves(start, end) {
  let possibleMovesBoard = [];
  findAllEdges(possibleMovesBoard, start, end);
  let moves = [];
  console.log(possibleMovesBoard);
}

function findAllEdges(board, start, end) {
  for (let i = 0; i < 8; i++) {
    board[i] = [];
    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }
  board[start[0]][start[1]] = 'start';
  board[end[0]][end[1]] = 'end';
  return board;
}

knightMoves([0, 0], [7, 7]);
