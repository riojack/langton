### Triangle Highway
```js
if (cellIsOneOf(cell, 'CDEGHI')) {
  flipToLetter(NEXT_LETTER);
  return TURN_LEFT;
}
else if (cellIsOneOf(cell, 'ABFJKL')) {
  flipToLetter(NEXT_LETTER);
  return TURN_RIGHT;
}
else {
  flipToLetter('A');
  return STAND_STILL;
}
```
### Self-filling Square
```js
if (cellIsOneOf(cell, 'BCDEFI')) {
  flipToLetter(NEXT_LETTER);
  return TURN_LEFT;
}
else if (cellIsOneOf(cell, 'AGH')) {
  flipToLetter(NEXT_LETTER);
  return TURN_RIGHT;
}
else {
  flipToLetter('A');
  return STAND_STILL;
}
```
### Faint Rings
```js
if (cell === 'A') {
  flipToLetter(NEXT_LETTER);
  return TURN_LEFT;
}
else if (cell === 'Z') {
  flipToLetter('A');
  return TURN_RIGHT;
}
else {
  flipToLetter(NEXT_LETTER);
  return FORWARD;
}
```
### Switch-back Highway
```js
if (cellIsOneOf(cell, 'ABFHJK')) {
  flipToLetter(NEXT_LETTER);
  return TURN_LEFT;
}
else if (cellIsOneOf(cell, 'CDEGIL')) {
  flipToLetter(NEXT_LETTER);
  return TURN_RIGHT;
}
else {
  flipToLetter('A');
  return STAND_STILL;
}
```
### Symmetric Cardioid
```js
if (cellIsOneOf(cell, 'AB')) {
  flipToLetter(NEXT_LETTER);
  return TURN_LEFT;
}
else if (cellIsOneOf(cell, 'CD')) {
  flipToLetter(NEXT_LETTER);
  return TURN_RIGHT;
}
else {
  flipToLetter('A');
  return STAND_STILL;
}
```
### Triangles Everywhere!
```js
if (cellIsOneOf(cell, 'ACD')) {
  flipToLetter(NEXT_LETTER);
  return TURN_LEFT;
}
else if (cellIsOneOf(cell, 'BEFGHI')) {
  flipToLetter(NEXT_LETTER);
  return TURN_RIGHT;
}
else {
  flipToLetter('A');
  return STAND_STILL;
}
```
### Throwing Star
```js
if (cellIsOneOf(cell, 'CDEH')) {
  flipToLetter(NEXT_LETTER);
  return TURN_LEFT;
}
else if (cellIsOneOf(cell, 'ABFG')) {
  flipToLetter(NEXT_LETTER);
  return TURN_RIGHT;
}
else {
  flipToLetter('A');
  return STAND_STILL;
}
```
