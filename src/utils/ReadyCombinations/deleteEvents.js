import {events} from "../constants";

function deleteEvents() {
  const eventsArray = events.querySelectorAll('.header__events-container');
  eventsArray.forEach((elem) => {
    const checkBox = elem.querySelector('.header__events-checkbox');
    if (checkBox) checkBox.checked = false;
    elem.remove();
  });
  return eventsArray;
}

export default deleteEvents