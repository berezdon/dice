import workTemplateDataDice from "./workTemplateDataDice";

function workTemplateData(templateData, k, max) {
  const nameEvent = templateData.querySelector('.header__events-text');

  nameEvent.innerHTML = `${k}`;
  workTemplateDataDice(templateData, k, max);
}

export default workTemplateData