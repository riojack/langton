const { PRELUDE, STARTING_BODY, SOUTH } = require('./constants');
const { rasterizeOne, CANVAS_HEIGHT, CANVAS_WIDTH } = require('./rasterizer');
const { beLikeAnAnt } = require('./logic');

let simTimer;
function doSimulation(ctx, funct) {
  const batchSize = 1000;

  let grid = (Array(CANVAS_HEIGHT).fill()).map(() => Array(CANVAS_WIDTH).fill('A')),
    dx = 0,
    dy = 0,
    antx = (CANVAS_WIDTH / 4.0),
    anty = (CANVAS_HEIGHT / 4.0),
    direction = SOUTH;

  rasterizeOne(grid[antx][anty], antx, anty, ctx);
  clearInterval(simTimer);

  simTimer = setInterval(() => {
    let j = 0;
    while (j < batchSize) {
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

      rasterizeOne(grid[anty][antx], antx, anty, ctx);
      j++;
    }
  }, 1);
}

(function () {
  const canvas = document.getElementById('langtons-world');
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;

  const ctx = canvas.getContext('2d');
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;

  const codeField = document.getElementById('langtons-brain');
  codeField.rows = 35;
  codeField.cols = 60;
  codeField.value = STARTING_BODY;

  const goButton = document.getElementById('turn-on-langtons-brain');
  goButton.innerHTML = '&nbsp;';
  goButton.onclick = () => {
    const codeBody = document.getElementById('langtons-brain').value;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    doSimulation(ctx, new Function(PRELUDE + codeBody));
  };

  goButton.ontouchstart = goButton.onclick;

  const stopBtn = document.getElementById('turn-off-langtons-brain');
  stopBtn.innerHTML = '&nbsp;';
  stopBtn.onclick = () => {
    clearInterval(simTimer);
  };
})();
