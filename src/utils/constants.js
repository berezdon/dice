const slider = document.querySelector('.header__setting-number-of-dices-input');
const start = document.querySelector('.button-start');
const reset = document.querySelector('.button-reset');
const addEvent = document.querySelector('.add-event');
const deleteEvent = document.querySelector('.delete-event');
const aOrB = document.querySelector('.a-or-b');
const aAndB = document.querySelector('.a-and-b');
const notA = document.querySelector('.not-a');
const events = document.querySelector('.header__events');
const template = document.querySelector('.template-card');
const templateDice = document.querySelector('.template-dice');
const templateDataCard = document.querySelector('.template-card-data');
const templateDataDices = document.querySelector('.template-dices-data');
const templateDataDiceImage = document.querySelector('.template-dice-data');
const templatePopup = document.querySelector('.template-popup');
const anyCombinationElem = document.querySelector('.any-combination');
const oneDiceElem = document.querySelector('.one-dice');
const twoDiceElem = document.querySelector('.two-dice');
const popupSlider = document.querySelector('.popup-slider');
const closeButton = popupSlider.querySelector('.popup__close-button');
const buttonYes = popupSlider.querySelector('.button-yes');
const buttonNo = popupSlider.querySelector('.button-no');
const footer = document.querySelector('.footer');
const getCanvas = document.querySelector('.canvas');
const constValues = {
  width: getCanvas.width,
  height: getCanvas.height,
}
const numberOfThrows = document.querySelector('.header__setting-number-of-throws-input');
const name = 'Событие';

export {
  slider,
  start,
  reset,
  addEvent,
  deleteEvent,
  aOrB,
  aAndB,
  notA,
  events,
  template,
  templateDice,
  templateDataCard,
  templateDataDices,
  templateDataDiceImage,
  templatePopup,
  anyCombinationElem,
  oneDiceElem,
  twoDiceElem,
  popupSlider,
  closeButton,
  buttonYes,
  buttonNo,
  footer,
  getCanvas,
  constValues,
  numberOfThrows,
  name
}
