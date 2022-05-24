import {name, templatePopup} from "../constants";
import numberOfEvent from "../numberOfEvent";
import workTemplateDice from "../Dice/workTemplateDice";

function workTemplate(template, sliderValue) {
  const nameEvent = template.querySelector('.header__events-text');
  const inputEvent = template.querySelector('.header__events-checkbox');
  const labelEvent = template.querySelector('.header__events-label');
  const eventContainer = template.querySelector('.header__events-container');
  const newPopup = templatePopup.content.cloneNode(true);

  inputEvent.id = `checkbox${numberOfEvent() + 1}`;
  labelEvent.setAttribute('for', `checkbox${numberOfEvent() + 1}`);
  nameEvent.innerHTML = `${name} ${numberOfEvent() + 1}`;

  workTemplateDice(template, sliderValue);
  eventContainer.append(newPopup);
}

export default workTemplate