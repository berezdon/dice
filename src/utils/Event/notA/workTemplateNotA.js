import numberOfEvent from "../../numberOfEvent";
import {templatePopup} from "../../constants";
import workTemplateNotADice from "./workTemplateNotADice";
import preWorkAB from "../preWorkAB";

function workTemplateNotA(template) {
  const nameEvent = template.querySelector('.header__events-text');
  const text = template.querySelector('.header__events-dice');
  const eventContainer = template.querySelector('.header__events-container');
  const newPopup = templatePopup.content.cloneNode(true);

  nameEvent.innerHTML = `not ${numberOfEvent() + 1}`;
  text.innerHTML = `Не событие ${preWorkAB(template)}`;

  workTemplateNotADice(template);
  eventContainer.append(newPopup);
}

export default workTemplateNotA