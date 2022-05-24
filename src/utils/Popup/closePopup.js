import inactiveSaveButton from "./inactiveSaveButton";

function closePopup(newPopup, popupInput, popupSaveButton) {
  newPopup.classList.remove('popup_opened');
  inactiveSaveButton(popupSaveButton);
  popupInput.value = '';
}

export default closePopup