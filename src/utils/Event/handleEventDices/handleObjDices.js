function handleObjDices(dices) {
  const newDices = dices.cloneNode(true);
  const image = newDices.querySelectorAll('.header__combinations-dice');
  const nameImgArr = [];
  image.forEach((img) => {
    const newNameImg = img.alt.slice(7);
    if (newNameImg !== 'All') nameImgArr.push(newNameImg);
    else {
      nameImgArr.push([1, 2, 3, 4, 5, 6]);
    }
  });
  let result = ''
  nameImgArr.forEach((name) => {
    if (Array.isArray(name)) result += 'All';
    else result += name;
  });
  return {result, nameImgArr}
}

export default handleObjDices