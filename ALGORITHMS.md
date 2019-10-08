```js
// triangle
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
// self-filling square
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
// faint rings
if ('A'.indexOf(cell) >= 0) {
  colorCell(String.fromCharCode(cell.charCodeAt(0) + 1));
  return TURN_LEFT;
}
else if ('Z'.indexOf(cell) >= 0) {
  colorCell('A');
  return TURN_RIGHT;
}
else {
  colorCell(String.fromCharCode(cell.charCodeAt(0) + 1));
  return FORWARD;
}
```