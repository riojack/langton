### Triangle Highway
```js
if ('CDEGHI'.indexOf(cell) >= 0) {
  colorCell(NEXT_COLOR);
  return TURN_LEFT;
}
else if ('ABFJKL'.indexOf(cell) >= 0) {
  colorCell(NEXT_COLOR);
  return TURN_RIGHT;
}
else {
  colorCell('A');
  return DO_NOTHING;
}
```
### Self-filling Square
```js
if ('BCDEFI'.indexOf(cell) >= 0) {
  colorCell(NEXT_COLOR);
  return TURN_LEFT;
}
else if ('AGH'.indexOf(cell) >= 0) {
  colorCell(NEXT_COLOR);
  return TURN_RIGHT;
}
else {
  colorCell('A');
  return DO_NOTHING;
}
```
### Faint Rings
```js
if (cell === 'A') {
  colorCell(NEXT_COLOR);
  return TURN_LEFT;
}
else if (cell === 'Z') {
  colorCell('A');
  return TURN_RIGHT;
}
else {
  colorCell(NEXT_COLOR);
  return FORWARD;
}
```
