import activeButton from "../activeButton";
import {aAndB, addEvent, aOrB, deleteEvent, notA, slider} from "../constants";
import inactiveButton from "../inactiveButton";
import deleteEvents from "../ReadyCombinations/deleteEvents";

function clickOnReset(canvas) {
  sessionStorage.setItem('sliderValue' , '1');
  activeButton(addEvent);
  inactiveButton(aOrB);
  inactiveButton(aAndB);
  inactiveButton(notA);
  inactiveButton(deleteEvent);
  slider.disabled = false;
  slider.value = 1;
  canvas.clear();
  deleteEvents();
}

export default clickOnReset