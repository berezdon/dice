import {aAndB, aOrB, deleteEvent, notA} from "../constants";
import inactiveButton from "../inactiveButton";

function clickOnDeleteEvent() {
  const listOfElements = document.querySelectorAll('.header__events-checkbox');
  listOfElements.forEach((element) => {
    if (element.checked) element.closest('.header__events-container').remove();
  });
  inactiveButton(deleteEvent);
  inactiveButton(aOrB);
  inactiveButton(aAndB);
  inactiveButton(notA);
}

export default clickOnDeleteEvent