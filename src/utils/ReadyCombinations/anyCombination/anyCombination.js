import {addEvent, aOrB, aAndB, notA, events, slider, deleteEvent} from "../../constants";
import activeButton from "../../activeButton";
import deleteEvents from "../deleteEvents";
import inactiveButton from "../../inactiveButton";

function anyCombination(eventsArray, sliderValue) {
  sessionStorage.setItem('sliderValue' , sliderValue);
  activeButton(addEvent);
  inactiveButton(aOrB)
  inactiveButton(aAndB);
  inactiveButton(notA);
  inactiveButton(deleteEvent);
  slider.disabled = false;

  deleteEvents();

  eventsArray.forEach((elem) => {
    events.append(elem);
  });
}

export default anyCombination