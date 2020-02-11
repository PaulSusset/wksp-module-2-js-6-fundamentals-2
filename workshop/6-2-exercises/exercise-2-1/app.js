// Exercise 2.1 - The GRID
// ------------

// Create a game board.
// The CSS will, for the most part, take care of itself
// as long as you assign the right classes to the cells.

// Objectives
// - set the size of the board to a square of 600px;
// - set a number of cells per row;
// - the cells should all be square.
// - cells should have a class of 'cell'
// - cells should have and id of 'cell-#'
const board = document.querySelector('.board');
board.style.gridTemplate = 'repeat(10, 1fr) / repeat(10, 1fr)';
board.style.width = '600px';
board.style.height = '600px';

for (i=1; i<101; i++){
    let tile = document.createElement('div');
    board.appendChild(tile);
    tile.classList.add('cell');
    tile.id = `cell${i}`;
}