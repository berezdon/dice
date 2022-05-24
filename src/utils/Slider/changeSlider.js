import {slider} from "../constants";
import handlePopupSlider from "./handlePopupSlider";

function changeSlider() {
  const allCheckbox = document.querySelectorAll('.header__events-checkbox');
  if (allCheckbox.length === 0) sessionStorage.setItem('sliderValue' , slider.value);
  else handlePopupSlider(allCheckbox);
}

export default changeSlider