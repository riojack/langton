const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 300;

COLOR_CHAR_MAP = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((map, char) => {
  return {
    ...map,
    [char]: [
      Math.floor(255 * Math.random()),
      Math.floor(255 * Math.random()),
      Math.floor(255 * Math.random()),
      255
    ]
  }
}, {});


function rasterizeOne(cellColor, x, y, ctx) {
  const idata = ctx.createImageData(1, 1);

  let color = [255, 55, 65, 255];

  if (COLOR_CHAR_MAP[cellColor]) {
    color = COLOR_CHAR_MAP[cellColor];
  }

  idata.data[0 + 0] = color[0];
  idata.data[0 + 1] = color[1];
  idata.data[0 + 2] = color[2];
  idata.data[0 + 3] = color[3];

  ctx.putImageData(idata, x + 0.5, y + 0.5);
}

module.exports = {
  rasterize: () => { },
  rasterizeOne: rasterizeOne,
  CANVAS_WIDTH: CANVAS_WIDTH,
  CANVAS_HEIGHT: CANVAS_HEIGHT
};