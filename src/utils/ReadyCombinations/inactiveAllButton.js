import inactiveButton from "../inactiveButton";
import {aAndB, addEvent, aOrB, deleteEvent, notA, slider} from "../constants";

function inactiveAllButton() {
  inactiveButton(addEvent);
  inactiveButton(aOrB);
  inactiveButton(aAndB);
  inactiveButton(notA);
  inactiveButton(deleteEvent);
  slider.disabled = true;
}

export default inactiveAllButton