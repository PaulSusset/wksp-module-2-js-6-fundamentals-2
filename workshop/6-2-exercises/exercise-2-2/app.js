// Exercise 2.2 - the Custom Grid
// ------------

// Use the grid code you wrote in 2.1

// Objectives
// Allow the user to create cells on the board based on values he/she inputs.
// - Ask the user the number of ROWS and COLUMNS
// - Use those values to generate a grid

// Hints
// - use the 'blur' event
// - one event listener per input

// If you need extra hints, see somebody... :)
let columns = 10
let rows = 10

const board = document.querySelector('#board');
board.style.gridTemplate = `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`;
board.style.width = '600px';
board.style.height = '600px';

for (i=1; i<(columns * rows); i++){
    let tile = document.createElement('div');
    board.appendChild(tile);
    tile.classList.add('cell');
    tile.id = `cell${i}`;
}
function reMakeBoard(){
    board.innerHTML = '';
    board.style.gridTemplate = `repeat(${rows}, 1fr) / repeat(${columns}, 1fr)`;
    for (i=1; i<(columns * rows); i++){
        let tile = document.createElement('div');
        board.appendChild(tile);
        tile.classList.add('cell');
        tile.id = `cell${i}`;
    }
}

function newColumns(event){
    columns = event.target.value;
    reMakeBoard();
}
function newRows(event){
    rows = event.target.value;
    reMakeBoard();
}
document.getElementById('columns-input').addEventListener('blur', newColumns);
document.getElementById('rows-input').addEventListener('blur', newRows);