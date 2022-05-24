function variantsTwoDices() {
  const min = 2;
  const max = 12;
  const obj = {};
  const arr = Array(min).fill().map(() => Array.of(1, 2, 3, 4, 5, 6));
  for (let k = min; k <= max; k++) {
    obj[k] = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        if (arr[0][i] + arr[1][j] === k) obj[k].push([arr[0][i], arr[1][j]]);
      }
    }
  }
  return(obj);
}

export default variantsTwoDices