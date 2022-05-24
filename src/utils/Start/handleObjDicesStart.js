import handleObjDices from "../Event/handleEventDices/handleObjDices";

function handleObjDicesStart(listOfElements) {
  const objDices = {};

  listOfElements.forEach((element, i) => {
    objDices[i] = {};
    element.closest('.header__events-container').querySelectorAll('.header__events-dices')
      .forEach((dices) => {
        const objResult = handleObjDices(dices);
        objDices[i][objResult.result] = objResult.nameImgArr;
      });
  });

  return objDices
}

export default handleObjDicesStart