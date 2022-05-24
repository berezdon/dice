import handleObjDicesStart from "./handleObjDicesStart";
import {numberOfThrows} from "../constants";
import getRandomInt from "./getRandomInt";

function handleStart() {
  const listOfElements = document.querySelectorAll('.header__events-event');

  const objDices = handleObjDicesStart(listOfElements);

  const throws = numberOfThrows.value;
  const measurementsValue = Array(Object.keys(objDices).length).fill(0);
  const slider = Number(sessionStorage.getItem('sliderValue'));

  for (let i = 0; i < throws; i++) {
    const newVariantDices = [];
    for (let j = 0; j < slider; j++) {
      newVariantDices.push(String(getRandomInt(1, 7)));
    }
    Object.keys(objDices).forEach((keyEvent,i) => {
      Object.keys(objDices[keyEvent]).find((keyDices) => {
        if (objDices[keyEvent][keyDices].join('').length === newVariantDices.join('').length) {
          if (objDices[keyEvent][keyDices].join('') === newVariantDices.join('')) {
            measurementsValue[i] += 1;
            return true
          }
        } else {
          const newArr = [];
          objDices[keyEvent][keyDices].forEach((element, i) => {
            if (!Array.isArray(element)) {
              if (element === newVariantDices[i]) newArr.push(element);
            }
            else {
              const newElement = element.find(elem => elem == newVariantDices[i]);
              newArr.push(newElement);
            }
          });
          if (newArr.join('') === newVariantDices.join('')) {
            measurementsValue[i] += 1;
            return true
          }
        }
      })
    })
  }
  return measurementsValue
}

export default handleStart