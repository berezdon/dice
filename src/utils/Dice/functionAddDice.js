import {templateDataDiceImage, templateDataDices, templateDice} from "../constants";
import numberOfEvent from "../numberOfEvent";
import clickOnCheckboxDice from "./clickOnCheckboxDice";
import diceSwitch from "./diceSwitch";
import clickOnDice from "./clickOnDice";

function functionAddDice(dice, event, sliderValue) {
  const newTemplateDice = templateDice.content.cloneNode(true);
  const newTemplateDices = templateDataDices.content.cloneNode(true);
  const dicesContainer = newTemplateDices.querySelector('.header__events-dices');
  const inputDice = newTemplateDice.querySelector('.header__events-dice-checkbox');

  inputDice.id = `checkbox-dice${numberOfEvent() + 1}`;
  clickOnCheckboxDice(newTemplateDice, event);
  dicesContainer.append(inputDice);

  for (let i = 0; i < sliderValue; i++) {
    const newTemplateDiceImage = templateDataDiceImage.content.cloneNode(true);
    const imageDice = newTemplateDiceImage.querySelector('.header__combinations-dice');
    diceSwitch(7, imageDice);
    clickOnDice(newTemplateDiceImage);
    dicesContainer.append(newTemplateDiceImage);
  }

  dice.append(dicesContainer);
}

export default functionAddDice