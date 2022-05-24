import functionAddDice from "../Dice/functionAddDice";

function clickOnAddOutcome(template, sliderValue) {
  const addDice = template.querySelector('.add-dice');
  const dice = template.querySelector('.header__events-dice');
  const event = template.querySelector('.header__events-event');

  addDice.addEventListener('click', () => {
    functionAddDice(dice, event, sliderValue);
  });
}

export default clickOnAddOutcome