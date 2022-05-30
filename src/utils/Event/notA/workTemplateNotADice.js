import handleObjDices from "../handleEventDices/handleObjDices";
import variantsDices from "./variantsDices";
import drawDices from "../handleEventDices/drawDices";

function workTemplateNotADice(template) {
  const dice = template.querySelector('.header__events-dice');
  const listOfElements = document.querySelectorAll('.header__events-checkbox');
  const objDices = {};
  const newObjDices = {};

  listOfElements.forEach((element) => {
    if (element.checked) {
      element.closest('.header__events-container').querySelectorAll('.header__events-dices')
        .forEach((dices) => {
          const objResult = handleObjDices(dices);
          objDices[objResult.result] = objResult.nameImgArr;
        });
    }
  });
  const slider = Number(sessionStorage.getItem('sliderValue'));
  const variantDices = variantsDices(slider);

  Object.keys(variantDices).forEach((key) => {
    if (!Object.keys(objDices).find((key2) => {
      if (variantDices[key].join('').length === objDices[key2].join('').length){
        if (variantDices[key].join('') === objDices[key2].join('')) return true;
      } else {
        const newArr = [];
        objDices[key2].forEach((element, i) => {
          if (!Array.isArray(element)) {
            if (String(variantDices[key][i]) === element) {
              newArr.push(element);
            }
          }
          else {
            const newElement = element.find(elem => elem == variantDices[key][i]);
            newArr.push(String(newElement));
          }
        });
        if (newArr.join('') === variantDices[key].join('')) {
          return true
        }
      }
    })) {newObjDices[variantDices[key].join('')] = variantDices[key]}
  })

  drawDices(dice, newObjDices);
}

export default workTemplateNotADice