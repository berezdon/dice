function inactiveSaveButton(popupSaveButton) {
  popupSaveButton.classList.add('popup__save-button_inactive');
  popupSaveButton.disabled = true;
}

export default inactiveSaveButton