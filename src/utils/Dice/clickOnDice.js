import diceSwitch from "./diceSwitch";

function clickOnDice(templateDice) {
  const dice = templateDice.querySelector('.header__combinations-dice');
  let i = 0;
  dice.addEventListener('click', () => {
    i += 1;
    diceSwitch(i, dice);
    if (i > 6) i = 0;
  })
}

export default clickOnDice