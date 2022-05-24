import handleObjDices from "../handleEventDices/handleObjDices";

function handleObjDicesAAndB(listOfElements) {
  const objDices = {};

  listOfElements.forEach((element, i) => {
    if (element.checked) {
      objDices[i] = {};
      element.closest('.header__events-container').querySelectorAll('.header__events-dices')
        .forEach((dices) => {
          const objResult = handleObjDices(dices);
          objDices[i][objResult.result] = objResult.nameImgArr;
        });
    }
  });

  return objDices
}

export default handleObjDicesAAndB