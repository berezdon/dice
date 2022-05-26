import {numberOfThrows} from "../constants";
import handleStart from "./handleStart";
import getMaxOfArray from "../Canvas/getMaxOfArray";
import handleGetIntervalsX from "../Canvas/handleGetIntervalsX";

function clickOnStart(canvas) {
  const measurementsValue = handleStart();
  const getMaximum = getMaxOfArray(measurementsValue);
  const getIntervalsX = handleGetIntervalsX();
  const getIntervalsY = numberOfThrows.value;

  const objData = {
    getIntervalsX,
    getIntervalsY,
    getMaximum,
  }

  canvas.run(measurementsValue, objData);
}

export default clickOnStart