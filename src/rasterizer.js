const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 800;
const PIXEL_SCALE = 2;

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
  const idata = ctx.createImageData(PIXEL_SCALE, PIXEL_SCALE);

  let color = [255, 55, 65, 255];

  if (COLOR_CHAR_MAP[cellColor]) {
    color = COLOR_CHAR_MAP[cellColor];
  }

  const byte_count = 4 * PIXEL_SCALE * PIXEL_SCALE;
  let byte = 0;

  while (byte < byte_count) {
    idata.data[byte + 0] = color[0];
    idata.data[byte + 1] = color[1];
    idata.data[byte + 2] = color[2];
    idata.data[byte + 3] = color[3];
    byte += 4;
  }

  ctx.putImageData(idata, (x * PIXEL_SCALE), (y * PIXEL_SCALE));
}

module.exports = {
  rasterize: () => {
  },
  rasterizeOne: rasterizeOne,
  CANVAS_WIDTH: CANVAS_WIDTH,
  CANVAS_HEIGHT: CANVAS_HEIGHT,
  PIXEL_SCALE: PIXEL_SCALE,
};
