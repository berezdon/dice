import {throws, validation, validationText, start} from "../constants";
import inactiveButton from "../inactiveButton";
import activeButton from "../activeButton";

function changeThrows() {
  if (throws.value < 1 || throws.value > 10000) {
    validation.innerHTML = validationText;
    inactiveButton(start);
  } else {
    validation.innerHTML = '';
    activeButton(start);
  }
}

export default changeThrows