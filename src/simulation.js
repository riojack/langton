const { rasterizeOne, CANVAS_HEIGHT, CANVAS_WIDTH } = require('./rasterizer');
const { beLikeAnAnt } = require('./logic');

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

function colorCell(color) { grid[anty][antx] = color; }

`;

const STARTING_BODY = `if (cell === 'B') {
  colorCell('W');
  return TURN_LEFT;
}
else {
  colorCell('B');
  return TURN_RIGHT;
}`;

let simTimer;
function doSimulation(ctx, funct) {
  const speedUp = 1000;

  let grid = (Array(CANVAS_HEIGHT).fill()).map((x) => Array(CANVAS_WIDTH).fill('A')),
    dx = 0,
    dy = 0,
    antx = CANVAS_WIDTH / 2.0,
    anty = CANVAS_HEIGHT / 2.0,
    direction = 'SOUTH';

  rasterizeOne(grid[antx][anty], antx, anty, ctx);
  clearInterval(simTimer);
  simTimer = ttt = setInterval(() => {
    let j = 0;
    while (j < speedUp) {
      const nextStage = beLikeAnAnt(grid, direction, dx, dy, antx, anty, funct);

      grid = nextStage.grid;
      dx = nextStage.dx;
      dy = nextStage.dy;
      antx = nextStage.antx;
      anty = nextStage.anty;
      direction = nextStage.antDirection;

      if (antx < 0 || antx >= CANVAS_WIDTH || anty < 0 || anty >= CANVAS_HEIGHT) {
        clearInterval(simTimer);
        return;
      }

      rasterizeOne(grid[antx][anty], antx, anty, ctx);
      j++;
    }
  }, 1);
}

(function () {
  const SCALING = 0.5;
  const canvas = document.createElement('canvas');
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;
  canvas.style.width = `${canvas.width * SCALING * 4}px`;
  canvas.style.height = `${canvas.height * SCALING * 4}px`;
  canvas.style.borderWidth = 1;
  canvas.style.borderCollapse = 'black';
  canvas.style.borderStyle = 'dotted';

  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  ctx.imageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;

  const codeField = document.createElement('textarea');
  codeField.rows = 30;
  codeField.cols = 60;
  codeField.value = STARTING_BODY;
  document.body.appendChild(codeField);

  const goButton = document.createElement('button');
  goButton.innerHTML = 'Go';
  goButton.onclick = () => {
    const codeBody = document.getElementsByTagName('textarea')[0].value;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    doSimulation(ctx, new Function(PRELUDE + codeBody));
  };

  document.body.appendChild(goButton);

  const stopBtn = document.createElement('button');
  stopBtn.innerHTML = 'Stop!';
  stopBtn.onclick = () => {
    clearInterval(simTimer);
  };

  document.body.appendChild(stopBtn);
})();