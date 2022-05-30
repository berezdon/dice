function variantsDices(slider) {
  const obj = {}

  const newObj = {}
  for (let i = 0; i < slider; i++) {
    newObj[i] = 1;
  }
  let k = 0;
  while (k !== Math.pow(6, slider)) {

    obj[k] = [];

    Object.keys(newObj).forEach((key) => {
      obj[k].push(newObj[key]);
    })

    k += 1;

    newObj[slider - 1] += 1;
    if (newObj[slider - 1] === 7) {
      newObj[slider - 1] = 1;
      newObj[slider - 2] += 1;
    }
    if (newObj[slider - 2] === 7) {
      newObj[slider - 2] = 1;
      newObj[slider - 3] += 1;
    }
    if (newObj[slider - 3] === 7) {
      newObj[slider - 3] = 1;
      newObj[slider - 4] += 1;
    }
  }

  return obj
}

export default variantsDices