import dataOneDice from "./dataOneDice";
import deleteEvents from "../deleteEvents";
import inactiveAllButton from "../inactiveAllButton";

function oneDice() {
  const slider = sessionStorage.getItem('sliderValue');
  sessionStorage.setItem('sliderValue' , '1');
  inactiveAllButton();

  const eventsArray = deleteEvents();
  dataOneDice();

  return {eventsArray, slider};
}

export default oneDice