import {templateDataDices, templateDataDiceImage} from "../constants";
import diceSwitch from "../Dice/diceSwitch";
import variantsTwoDices from "./twoDice/variantsTwoDices";

function workTemplateDataDice(template, k, max) {
  const dices = template.querySelector('.header__events-dice');
  if (max === 1) {
    const newTemplateDices = templateDataDices.content.cloneNode(true);
    const dicesContainer = newTemplateDices.querySelector('.header__events-dices');
    const newTemplateDiceImage = templateDataDiceImage.content.cloneNode(true);
    const imageDice = newTemplateDiceImage.querySelector('.header__combinations-dice');
    diceSwitch(k, imageDice);
    dicesContainer.append(newTemplateDiceImage);
    dices.append(dicesContainer);
  }
  if (max === 2) {
    const variants = variantsTwoDices();
    variants[k].forEach((arr) => {
      const newTemplateDices = templateDataDices.content.cloneNode(true);
      const dicesContainer = newTemplateDices.querySelector('.header__events-dices');
      for (let j = 0; j < max; j++) {
        const newTemplateDiceImage = templateDataDiceImage.content.cloneNode(true);
        const imageDice = newTemplateDiceImage.querySelector('.header__combinations-dice');
        diceSwitch(arr[j], imageDice);
        dicesContainer.append(newTemplateDiceImage);
      }
      dices.append(dicesContainer);
    });
  }

}

export default workTemplateDataDice