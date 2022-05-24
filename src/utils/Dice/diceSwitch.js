function diceSwitch(i, dice) {
  switch (i){
    case 1:
      dice.src = new URL('../../images/diceD6N1.png', import.meta.url);
      dice.alt = 'diceD6N1';
      break;
    case 2:
      dice.src = new URL('../../images/diceD6N2.png', import.meta.url);
      dice.alt = 'diceD6N2';
      break;
    case 3:
      dice.src = new URL('../../images/diceD6N3.png', import.meta.url);
      dice.alt = 'diceD6N3';
      break;
    case 4:
      dice.src = new URL('../../images/diceD6N4.png', import.meta.url);
      dice.alt = 'diceD6N4';
      break;
    case 5:
      dice.src = new URL('../../images/diceD6N5.png', import.meta.url);
      dice.alt = 'diceD6N5';
      break;
    case 6:
      dice.src = new URL('../../images/diceD6N6.png', import.meta.url);
      dice.alt = 'diceD6N6';
      break;
    case 7:
      dice.src = new URL('../../images/diceD6NAll.png', import.meta.url);
      dice.alt = 'diceD6NAll';
      break;
    default:
  }
}

export default diceSwitch