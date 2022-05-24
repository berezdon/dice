import activeSaveButton from "./activeSaveButton";
import inactiveSaveButton from "./inactiveSaveButton";
import closePopup from "./closePopup";

function renameEvent(text, newPopup, popupInput, popupForm, popupSaveButton) {
  popupInput.addEventListener('keyup', () => {
    if (popupInput.value.length > 0 && popupInput.value !== text.innerHTML) activeSaveButton(popupSaveButton);
    else inactiveSaveButton(popupSaveButton);
  });
  popupForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    text.innerHTML = popupInput.value;
    closePopup(newPopup, popupInput, popupSaveButton);
  });
}

export default renameEvent