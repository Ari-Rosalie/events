function makeBoard() {
    const ticTacToe = document.querySelector('.tic-tac-toe');
    ticTacToe.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const square = document.createElement('div');
        square.classList.add('square', 'empty');
        square.addEventListener('click', makeMove);
        ticTacToe.appendChild(square);
    }
}

let currentPlayer = 'X';

function makeMove() {
    if (!this.classList.contains('empty')) {
        return; 
    }
    this.textContent = currentPlayer;
    this.classList.remove('empty');
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function reset() {
    currentPlayer = 'X';
    makeBoard();
}

document.getElementById('reset').addEventListener('click', reset);
makeBoard();


