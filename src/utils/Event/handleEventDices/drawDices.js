import {templateDataDiceImage, templateDataDices} from "../../constants";
import diceSwitch from "../../Dice/diceSwitch";

function drawDices(dice, newObjDices) {
  Object.keys(newObjDices).forEach((key) => {
    const newTemplateDices = templateDataDices.content.cloneNode(true);
    const dicesContainer = newTemplateDices.querySelector('.header__events-dices');
    while (key.length !== 0) {
      if (key[0] !== 'A') {
        const newTemplateDiceImage = templateDataDiceImage.content.cloneNode(true);
        const imageDice = newTemplateDiceImage.querySelector('.header__combinations-dice');
        diceSwitch(Number(key[0]), imageDice);
        dicesContainer.append(newTemplateDiceImage);
        key = key.replace(key[0], '');
      } else {
        const newTemplateDiceImage = templateDataDiceImage.content.cloneNode(true);
        const imageDice = newTemplateDiceImage.querySelector('.header__combinations-dice');
        diceSwitch(7, imageDice);
        dicesContainer.append(newTemplateDiceImage);
        key = key.replace('All', '');
      }
    }
    dice.append(dicesContainer);
  });
}

export default drawDices