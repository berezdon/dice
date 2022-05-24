import {popupSlider, closeButton, buttonYes, buttonNo, slider} from "../constants";


function handlePopupSlider(allCheckbox) {
  popupSlider.classList.add('popup_opened');
  const sliderValue = sessionStorage.getItem('sliderValue');
  function handleSliderValue() {
    popupSlider.classList.remove('popup_opened');
    slider.value = sliderValue;
  }

  closeButton.addEventListener('click', handleSliderValue);
  buttonNo.addEventListener('click', handleSliderValue);
  buttonYes.addEventListener('click', () => {
    popupSlider.classList.remove('popup_opened');
    allCheckbox.forEach((element) => element.closest('.header__events-container').remove());
    sessionStorage.setItem('sliderValue' , slider.value);
  });
}

export default handlePopupSlider