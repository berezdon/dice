import {events, templateDataCard} from "../../constants";
import workTemplateData from "../workTemplateData";
import clickOnArrow from "../../Event/clickOnArrow";

function dataOneDice() {
  const max = 1;
  for (let i = 1; i < 7; i++) {
    const newTemplateData = templateDataCard.content.cloneNode(true);
    workTemplateData(newTemplateData, i, max);
    clickOnArrow(newTemplateData);
    events.append(newTemplateData);
  }
}

export default dataOneDice