const { EAST, WEST, SOUTH, NORTH } = require('./constants');

const TURN_RIGHT = {
  [EAST]: { next: SOUTH, dy: 1, dx: 0 },
  [SOUTH]: { next: WEST, dy: 0, dx: -1 },
  [WEST]: { next: NORTH, dy: -1, dx: 0 },
  [NORTH]: { next: EAST, dy: 0, dx: 1 },
};

const TURN_LEFT = {
  [EAST]: { next: NORTH, dy: -1, dx: 0 },
  [SOUTH]: { next: EAST, dy: 0, dx: 1 },
  [WEST]: { next: SOUTH, dy: 1, dx: 0 },
  [NORTH]: { next: WEST, dy: 0, dx: -1 },
};

function beLikeAnAnt(grid, antDirection, dx, dy, antx, anty, funct) {
  const nextPos = funct(grid, antDirection, dx, dy, antx, anty, TURN_LEFT, TURN_RIGHT);

  return {
    grid: grid,
    antDirection: nextPos.next,
    dx: nextPos.dx,
    dy: nextPos.dy,
    antx: antx + nextPos.dx,
    anty: anty + nextPos.dy
  };
}

module.exports = {
  beLikeAnAnt: beLikeAnAnt
}
