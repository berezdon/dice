import {events, template} from "../../constants";
import workTemplateNotA from "./workTemplateNotA";
import clickOnArrow from "../clickOnArrow";
import clickOnEdit from "../clickOnEdit";
import clickOnCheckbox from "../clickOnCheckbox";

function clickOnNotA() {
  const newTemplateNotA = template.content.cloneNode(true);
  workTemplateNotA(newTemplateNotA);
  clickOnArrow(newTemplateNotA);
  clickOnCheckbox(newTemplateNotA);
  clickOnEdit(newTemplateNotA);
  events.append(newTemplateNotA);
}

export default clickOnNotA