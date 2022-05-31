import handleObjDices from "../handleEventDices/handleObjDices";
import drawDices from "../handleEventDices/drawDices";
import variantsDices from "../notA/variantsDices";

function workTemplateAOrBDice(template) {
  const dice = template.querySelector('.header__events-dice');
  const listOfElements = document.querySelectorAll('.header__events-checkbox');
  const slider = Number(sessionStorage.getItem('sliderValue'));
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

  let isAllAll = false

  Object.keys(objDices).forEach((item) => {
    if (item.split('All').length === (slider + 1)) {
      isAllAll=true;
      newObjDices[item] = objDices[item];
    }
  });



  Object.keys(objDices).forEach((key) => {
    if(key.includes('All')) {
      let result = 0;
      const newObj = {};

      const arr = [];
      key.split('All').forEach(((elem) => {
        if (elem === '') arr.push('')
        else elem.split('').forEach((item) => arr.push(item))
      }));

      arr.forEach((elem, index) => {
        if (elem === '') {
          result += 1;
          newObj[index] = false;
        } else newObj[index] = true
      });

      const allDices = variantsDices(result);

      for (let k = 0; k < Math.pow(6, result); k++) {
        const newArr = [];
        let j = 0;
        Object.keys(newObj).forEach((key2,index) => {
          if (newObj[key2]) newArr.push(String(objDices[key][index]));
          else {
            newArr.push(String(allDices[k][j]));
            j += 1;
          }
        });
        const newKey = newArr.join('');
        newObjDices[newKey] = newArr;
      }

    } else {
      newObjDices[key] = objDices[key];
    }
  });
  if (!isAllAll) {
    drawDices(dice, newObjDices);
  } else {
    drawDices(dice, newObjDices);
  }
}

export default workTemplateAOrBDice