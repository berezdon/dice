import inactiveButton from "../inactiveButton";

function clickOnRemoveOutcome(template) {
  const removeDice = template.querySelector('.remove-dice');

  removeDice.addEventListener('click', () => {
    const event = removeDice.closest('.header__events-event_active');
    const checkBoxDices = event.querySelectorAll('.header__events-dice-checkbox');
    checkBoxDices.forEach((element) => {
      if (element.checked) element.closest('.header__events-dices').remove();
    });
    inactiveButton(removeDice);
  })

}

export default clickOnRemoveOutcome