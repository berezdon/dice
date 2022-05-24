import {events, template} from "../constants";
import clickOnArrow from "./clickOnArrow";
import workTemplate from "./workTemplate";
import clickOnCheckbox from "./clickOnCheckbox"
import clickOnEdit from "./clickOnEdit";
import clickOnAddOutcome from "./clickOnAddOutcome";
import clickOnRemoveOutcome from "./clickOnRemoveOutcome";

function clickOnAddEvent() {
  const sliderValue = sessionStorage.getItem('sliderValue');
  const newTemplate = template.content.cloneNode(true);
  workTemplate(newTemplate, sliderValue);
  clickOnArrow(newTemplate);
  clickOnCheckbox(newTemplate);
  clickOnEdit(newTemplate);
  clickOnAddOutcome(newTemplate, sliderValue);
  clickOnRemoveOutcome(newTemplate);
  events.append(newTemplate);
}

export default clickOnAddEvent