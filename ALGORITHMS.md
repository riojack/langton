```js
// Triangle
if ('CDEGHI'.indexOf(cell) >= 0) {
  colorCell(String.fromCharCode(cell.charCodeAt(0) + 1));
  return TURN_LEFT;
}
else if ('ABFJKL'.indexOf(cell) >= 0) {
  colorCell(String.fromCharCode(cell.charCodeAt(0) + 1));
  return TURN_RIGHT;
}
else {
  colorCell('A');
  return DO_NOTHING;
}
```

```js
// Self-filling square
if ('BCDEFI'.indexOf(cell) >= 0) {
  colorCell(String.fromCharCode(cell.charCodeAt(0) + 1));
  return TURN_LEFT;
}
else if ('AGH'.indexOf(cell) >= 0) {
  colorCell(String.fromCharCode(cell.charCodeAt(0) + 1));
  return TURN_RIGHT;
}
else {
  colorCell('A');
  return DO_NOTHING;
}
```

```js
// Faint rings
if (cell === 'A') {
  colorCell(String.fromCharCode(cell.charCodeAt(0) + 1));
  return TURN_LEFT;
}
else if (cell === 'Z') {
  colorCell('A');
  return TURN_RIGHT;
}
else {
  colorCell(String.fromCharCode(cell.charCodeAt(0) + 1));
  return FORWARD;
}
```
