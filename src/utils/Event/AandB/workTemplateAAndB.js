import {templatePopup} from "../../constants";
import numberOfEvent from "../../numberOfEvent";
import workTemplateAAndBDice from "../AAndB/workTemplateAAndBDice";
import preWorkAB from "../preWorkAB";

function workTemplateAAndB(template) {
  const nameEvent = template.querySelector('.header__events-text');
  const text = template.querySelector('.header__events-dice');
  const eventContainer = template.querySelector('.header__events-container');
  const newPopup = templatePopup.content.cloneNode(true);

  nameEvent.innerHTML = `and ${numberOfEvent() + 1}`;
  text.innerHTML = `Пересечение событий ${preWorkAB(template)}`;
  workTemplateAAndBDice(template);
  eventContainer.append(newPopup);
}

export default workTemplateAAndB