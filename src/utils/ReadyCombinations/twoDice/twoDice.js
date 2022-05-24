import dataTwoDice from "./dataTwoDice";
import deleteEvents from "../deleteEvents";
import inactiveAllButton from "../inactiveAllButton";

function twoDice() {
  const slider = sessionStorage.getItem('sliderValue');
  sessionStorage.setItem('sliderValue' , '2');
  inactiveAllButton();

  const eventsArray = deleteEvents();
  dataTwoDice();

  return {eventsArray, slider};
}

export default twoDice