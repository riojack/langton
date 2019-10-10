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
  return STAND_STILL;
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
  return STAND_STILL;
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
### Switch-back Highway
```js
if ('ABFHJK'.indexOf(cell) >= 0) {
  colorCell(NEXT_COLOR);
  return TURN_LEFT;
}
else if ('CDEGIL'.indexOf(cell) >= 0) {
  colorCell(NEXT_COLOR);
  return TURN_RIGHT;
}
else {
  colorCell('A');
  return STAND_STILL;
}
```
### Symmetric Cardioid
```js
if ('AB'.indexOf(cell) >= 0) {
  colorCell(NEXT_COLOR);
  return TURN_LEFT;
}
else if ('CD'.indexOf(cell) >= 0) {
  colorCell(NEXT_COLOR);
  return TURN_RIGHT;
}
else {
  colorCell('A');
  return STAND_STILL;
}
```
