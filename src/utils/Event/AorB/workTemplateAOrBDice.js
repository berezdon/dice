function workTemplateAOrBDice(template) {
  const dice = template.querySelector('.header__events-dice');
  const listOfElements = document.querySelectorAll('.header__events-checkbox');
  listOfElements.forEach((element) => {
    if (element.checked) {
      element.closest('.header__events-container').querySelectorAll('.header__events-dices')
        .forEach((dices) => {
          const newDices = dices.cloneNode(true);
          dice.append(newDices);
      });
    }
  });

}

export default workTemplateAOrBDice