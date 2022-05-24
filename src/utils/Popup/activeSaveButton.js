function activeSaveButton(popupSaveButton) {
  popupSaveButton.classList.remove('popup__save-button_inactive');
  popupSaveButton.disabled = false;
}

export default activeSaveButton