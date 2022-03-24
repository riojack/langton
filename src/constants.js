const EAST = 'EAST',
  WEST = 'WEST',
  NORTH = 'NORTH',
  SOUTH = 'SOUTH';

const PRELUDE = `var grid = arguments[0];
var antDirection = arguments[1];
var dx = arguments[2];
var dy = arguments[3];
var antx = arguments[4];
var anty = arguments[5];
var TURN_LEFT = arguments[6][antDirection];
var TURN_RIGHT = arguments[7][antDirection];
var FORWARD = { next: antDirection, dy: dy, dx: dx};
var STAND_STILL = { next: antDirection, dy: 0, dx: 0};
var TURN_AROUND = arguments[6][TURN_LEFT.next];
var cell = grid[anty][antx];
var NEXT_COLOR = String.fromCharCode(cell.charCodeAt(0) + 1);

function colorCell(color) { grid[anty][antx] = color; }

`;

const STARTING_BODY = `if (cell === 'A') {
  colorCell('B');
  return TURN_LEFT;
}
else {
  colorCell('A');
  return TURN_RIGHT;
}`;

module.exports = {
  EAST, WEST, NORTH, SOUTH,
  PRELUDE, STARTING_BODY
}
