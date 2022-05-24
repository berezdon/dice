import {events, template} from "../../constants";
import workTemplateAAndB from "../AAndB/workTemplateAAndB";
import clickOnArrow from "../clickOnArrow";
import clickOnCheckbox from "../clickOnCheckbox";
import clickOnEdit from "../clickOnEdit";

function clickOnAAndB() {
  const newTemplateAAndB = template.content.cloneNode(true);
  workTemplateAAndB(newTemplateAAndB);
  clickOnArrow(newTemplateAAndB);
  clickOnCheckbox(newTemplateAAndB);
  clickOnEdit(newTemplateAAndB);
  events.append(newTemplateAAndB);
}

export default clickOnAAndB