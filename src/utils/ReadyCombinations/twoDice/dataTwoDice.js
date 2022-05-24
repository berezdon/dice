import {events, templateDataCard} from "../../constants";
import workTemplateData from "../workTemplateData";
import clickOnArrow from "../../Event/clickOnArrow";

function dataTwoDice() {
  const max = 2;
  for (let k = 2; k <= 12; k++) {
    const newTemplateData = templateDataCard.content.cloneNode(true);
    workTemplateData(newTemplateData, k, max);
    clickOnArrow(newTemplateData);
    events.append(newTemplateData);
  }
}

export default dataTwoDice