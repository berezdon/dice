import './index.css';
import clickOnAddEvent from "../utils/Event/clickOnAddEvent";
import clickOnDeleteEvent from "../utils/Event/clickOnDeleteEvent";
import clickOnAOrB from "../utils/Event/AorB/clickOnAOrB";
import clickOnAAndB from "../utils/Event/AandB/clickOnAAndB";
import clickOnNotA from "../utils/Event/notA/clickOnNotA";
import oneDice from "../utils/ReadyCombinations/oneDice/oneDice";
import twoDice from "../utils/ReadyCombinations/twoDice/twoDice";
import anyCombination from "../utils/ReadyCombinations/anyCombination/anyCombination";
import changeSlider from "../utils/Slider/changeSlider";
import changeThrows from "../utils/Throws/changeThrows";
import clickOnStart from "../utils/Start/clickOnStart";
import clickOnReset from "../utils/Reset/clickOnReset";
import Canvas from "../components/Canvas";
import {
  slider,
  start,
  reset,
  addEvent,
  deleteEvent,
  aOrB,
  aAndB,
  notA,
  anyCombinationElem,
  oneDiceElem,
  twoDiceElem,
  getCanvas,
  constValues,
  throws
} from "../utils/constants";

let eventsArray = []
let sliderValue = '1';
let isAllCombination = true;
const canvas = new Canvas(getCanvas, constValues);
sessionStorage.setItem('sliderValue' , '1');
slider.addEventListener('change', changeSlider);
throws.addEventListener('input', changeThrows);
start.addEventListener('click', () => {clickOnStart(canvas)});
reset.addEventListener('click', () => {clickOnReset(canvas)});
addEvent.addEventListener('click', clickOnAddEvent);
deleteEvent.addEventListener('click', clickOnDeleteEvent);
aOrB.addEventListener('click', clickOnAOrB);
aAndB.addEventListener('click', clickOnAAndB);
notA.addEventListener('click', clickOnNotA)
anyCombinationElem.addEventListener('click', () => {
  anyCombination(eventsArray, sliderValue);
  isAllCombination = true
});
oneDiceElem.addEventListener('click', () => {
  if (isAllCombination) {
    const obj = oneDice(isAllCombination);
    eventsArray = obj.eventsArray;
    sliderValue = obj.slider;
  }
  else oneDice(isAllCombination);
  isAllCombination = false;
});
twoDiceElem.addEventListener('click', () => {
  if (isAllCombination) {
    const obj = twoDice(isAllCombination);
    eventsArray = obj.eventsArray;
    sliderValue = obj.slider;
  }
  else twoDice(isAllCombination);
  isAllCombination = false;
});
