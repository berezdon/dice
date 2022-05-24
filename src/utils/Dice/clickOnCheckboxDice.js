import activeButton from "../activeButton";
import inactiveButton from "../inactiveButton";

function clickOnCheckboxDice(templateDice, event) {
  const removeDice = event.querySelector('.remove-dice');
  const checkBox = templateDice.querySelector('.header__events-dice-checkbox');

  checkBox.addEventListener('click', () => {
    const allCheckbox = event.querySelectorAll('.header__events-dice-checkbox');
    let isChecked = false;
    allCheckbox.forEach((element) => {
      if (element.checked) return isChecked = true;
    });
    if (isChecked) activeButton(removeDice);
    else inactiveButton(removeDice);
  })
}

export default clickOnCheckboxDice