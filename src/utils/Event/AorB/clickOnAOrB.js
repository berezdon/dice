import {events, template} from "../../constants";
import workTemplateAOrB from "./workTemplateAOrB";
import clickOnArrow from "../clickOnArrow";
import clickOnCheckbox from "../clickOnCheckbox";
import clickOnEdit from "../clickOnEdit";

function clickOnAOrB() {
  const newTemplateAOrB = template.content.cloneNode(true);
  workTemplateAOrB(newTemplateAOrB);
  clickOnArrow(newTemplateAOrB);
  clickOnCheckbox(newTemplateAOrB);
  clickOnEdit(newTemplateAOrB);
  events.append(newTemplateAOrB);
}

export default clickOnAOrB