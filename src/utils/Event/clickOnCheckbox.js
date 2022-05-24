import {deleteEvent, aOrB, aAndB, notA} from "../constants";
import activeButton from "../activeButton";
import inactiveButton from "../inactiveButton";

function clickOnCheckbox(template) {
  const checkbox = template.querySelector('.header__events-checkbox');
  checkbox.addEventListener('click', () => {
    const allCheckbox = document.querySelectorAll('.header__events-checkbox');
    let isCheckedMoreOne = 0;
    allCheckbox.forEach((element) => {
      if (element.checked) {
        isCheckedMoreOne += 1;
      }
    });

    if (isCheckedMoreOne === 1) activeButton(notA); else inactiveButton(notA);
    if (isCheckedMoreOne > 0) activeButton(deleteEvent); else inactiveButton(deleteEvent);
    if (isCheckedMoreOne > 1) activeButton(aOrB); else inactiveButton(aOrB);
    if (isCheckedMoreOne === 2) activeButton(aAndB); else inactiveButton(aAndB);
  })
}

export default clickOnCheckbox