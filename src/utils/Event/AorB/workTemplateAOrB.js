import {templatePopup} from "../../constants";
import numberOfEvent from "../../numberOfEvent";
import workTemplateAOrBDice from "./workTemplateAOrBDice";
import preWorkAB from "../preWorkAB";

function workTemplateAOrB(template) {
  const nameEvent = template.querySelector('.header__events-text');
  const text = template.querySelector('.header__events-dice');
  const eventContainer = template.querySelector('.header__events-container');
  const newPopup = templatePopup.content.cloneNode(true);

  nameEvent.innerHTML = `&cup; ${numberOfEvent() + 1}`;
  text.innerHTML = `Объединение событий ${preWorkAB(template)}`;
  workTemplateAOrBDice(template);
  eventContainer.append(newPopup);
}

export default workTemplateAOrB