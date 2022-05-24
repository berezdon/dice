import functionAddDice from "./functionAddDice";

function workTemplateDice(template, sliderValue) {
  const dice = template.querySelector('.header__events-dice');
  const event = template.querySelector('.header__events-event');

  functionAddDice(dice, event, sliderValue);
}

export default workTemplateDice