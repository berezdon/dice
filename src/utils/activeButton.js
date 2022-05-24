function activeButton(button) {
  button.classList.remove('header__setting-button_inactive');
  button.disabled = false;
}

export default activeButton