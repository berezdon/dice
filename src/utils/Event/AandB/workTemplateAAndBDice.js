import handleObjDicesAAndB from "./handleObjDicesAAndB";
import drawDices from "../handleEventDices/drawDices";

function workTemplateAAndBDice(template) {
  const dice = template.querySelector('.header__events-dice');
  const listOfElements = document.querySelectorAll('.header__events-checkbox');
  const newObjDices = {};
  const slider = Number(sessionStorage.getItem('sliderValue'));
  const objDices = handleObjDicesAAndB(listOfElements);
  const objKey = Object.keys(objDices);
  const zero = Number(objKey[0]);
  const one = Number(objKey[1]);

  Object.keys(objDices[zero]).forEach((key1) => {
    Object.keys(objDices[one]).forEach((key2) => {
      const newArr = [];
      for (let i = 0; i < slider; i++) {
        if (objDices[zero][key1][i] === objDices[one][key2][i]) {
          newArr.push(objDices[zero][key1][i]);
        }
        if (Array.isArray(objDices[zero][key1][i]) && !Array.isArray(objDices[one][key2][i])) {
          newArr.push(objDices[one][key2][i]);
        }
        if (Array.isArray(objDices[one][key2][i]) && !Array.isArray(objDices[zero][key1][i])) {
          newArr.push(objDices[zero][key1][i]);
        }
        if (Array.isArray(objDices[one][key2][i]) && Array.isArray(objDices[zero][key1][i])) {
          newArr.push(objDices[zero][key1][i]);
        }
      }
      let name = '';

      if (newArr.length === slider) {
        for (let i = 0; i < slider; i++) {
          if (Array.isArray(newArr[i])) name += 'All'; else name += newArr[i];
        }
        newObjDices[name] = newArr;
      }
    })
  });

  drawDices(dice, newObjDices);
}

export default workTemplateAAndBDice