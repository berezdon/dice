import closePopup from "../Popup/closePopup";
import renameEvent from "../Popup/renameEvent";

function clickOnEdit(template) {
  const edit = template.querySelector('.header__combinations-edit');
  const newPopup = template.querySelector('.popup');
  const popupClose = newPopup.querySelector('.popup__close-button');
  const popupInput = newPopup.querySelector('.popup__input');
  const popupTitle = newPopup.querySelector('.popup__title-name');
  const popupForm = newPopup.querySelector('.popup__container_add');
  const popupSaveButton = newPopup.querySelector('.popup__save-button');

  const text = template.querySelector('.header__events-text');
  edit.addEventListener('click', () => {
    popupTitle.innerHTML = text.innerHTML;
    newPopup.classList.add('popup_opened');
    popupInput.value = text.innerHTML;
  });
  popupClose.addEventListener('click', () => closePopup(newPopup, popupInput, popupSaveButton));
  renameEvent(text, newPopup, popupInput, popupForm, popupSaveButton);
}

export default clickOnEdit