export default class Canvas {
  constructor(getCanvas, {width, height}) {
    this._width = width;
    this._height = height;
    this._intervalsX = 0;
    this._intervalsY = 0;
    this._maximum = 0;
    this._arrayOfIntervalsText = [];
    this._ctx = getCanvas.getContext('2d');
    this._intervalX = 0;
    this._intervalY = 0;
    this._startValueY = 0;
    this._arrayData = [];
  }

  _drawAxes() {
    this._ctx.beginPath();
    this._ctx.lineWidth = 2;
    this._ctx.fillStyle = "#000000";
    this._ctx.font = "18px  Roboto, Arial, sans-serif";
    this._ctx.moveTo(50, 10);
    this._ctx.lineTo(50, this._height - 50);
    this._ctx.lineTo(this._width - 50, this._height - 50);
    this._ctx.stroke();
    // Стрелка для вертикальной оси
    this._ctx.moveTo(45, 15);
    this._ctx.lineTo(50, 10);
    this._ctx.lineTo(55, 15);
    this._ctx.stroke();
    // Стрелка для горизонтальной оси
    this._ctx.moveTo(this._width - 55, this._height - 55);
    this._ctx.lineTo(this._width - 50, this._height - 50);
    this._ctx.lineTo(this._width - 55, this._height - 45);
    this._ctx.stroke();
    this._drawVerticalDashesAndSignatures();
    this._drawHorizontalDashesAndSignatures();
    this._ctx.textAlign = "left";
    this._ctx.fillText("Число бросаний", 55 , 30);
    this._ctx.stroke();
    this._ctx.closePath();
    this._drawGrid();
  }

  _drawVerticalDashesAndSignatures() {
    for (let i=1; i<=this._intervalsX - 1; i++){
      this._ctx.moveTo(50 + this._intervalX * i, this._height - 60);
      this._ctx.lineTo(50 + this._intervalX * i, this._height - 40);
      this._ctx.textAlign = "center"; // выровнять текст по середине от точки рисования
      if ((i > 0) && (i < this._intervalsX - 1)) {
        this._ctx.fillText(this._arrayOfIntervalsText[i-1], 50 + this._intervalX * (i) + (this._intervalX / 2), this._height - 20);
      }
      this._ctx.stroke();
    }
  }

  _drawHorizontalDashesAndSignatures() {
    for (let i=1; i<this._intervalsY + 1; i++){
      this._ctx.moveTo(40, 450 - this._intervalY * i);
      this._ctx.lineTo(60, 450 - this._intervalY * i);
      this._ctx.textAlign = "right"; // выровнять текст справа от точки рисования
      this._ctx.fillText(String(this._makeRounding(this._startValueY  * i)), 40, 456 - this._intervalY * i);
    }
    this._ctx.stroke();
  }

  _drawChart() {
    this._ctx.beginPath();
    this._ctx.lineWidth = 2;
    this._ctx.fillStyle = "#953735";
    this._ctx.textAlign = "center"; // выровнять текст по середине от точки рисования
    this._ctx.font = "18px  Roboto, Arial, sans-serif";
    const height = (this._height - 100 - this._intervalY) / (this._startValueY * (this._intervalsY - 1));
    for (let i = 1; i <= this._intervalsX - 2; i++){
      const scale = this._arrayData[i-1];
      this._ctx.fillRect(55 + this._intervalX * i, this._height - 50 - height * scale, this._intervalX - 10, height * scale);
    }
    this._ctx.stroke();
    this._ctx.fillStyle = "#000000";
    for (let i = 1; i <= this._intervalsX - 2; i++){
      const scale = this._arrayData[i-1];
      this._ctx.fillText(this._arrayData[i-1], 50 + this._intervalX * (i) + (this._intervalX / 2), this._height - 60 - height * scale);
    }
    this._ctx.stroke();
    this._ctx.closePath();
  }

  clear() {
    this._ctx.clearRect(0, 0, this._width, this._height);
  }

  _findIntervalsY(getIntervalsY) {
    if (getIntervalsY > 0 && getIntervalsY <= 5) {
      this._startValueY = 0.5;
    }
    if (getIntervalsY > 5 && getIntervalsY <= 10) {
      this._startValueY = 1;
    }
    else if (getIntervalsY > 10 && getIntervalsY <= 100) {
      this._startValueY = (this._maximum + (10 - this._maximum % 10))/ 10;
    }
    else if (getIntervalsY > 100 && getIntervalsY <= 1000) {
      this._startValueY = (this._maximum + (10 - this._maximum % 10))/ 10;
    }
    else if (getIntervalsY > 1000 && getIntervalsY <= 10000) {
      this._startValueY = (this._maximum + (10 - this._maximum % 10))/ 10;
    }

    this._intervalsY = 10;
    this._intervalY = (this._height - 100) / this._intervalsY;
  }

  _drawGrid() {
    this._ctx.beginPath();
    this._ctx.lineWidth = 1;
    this._ctx.strokeStyle = "#000000";
    for (let i=1; i<this._intervalsY + 1; i++) {
      this._ctx.moveTo(60, 450 - this._intervalY * i);
      this._ctx.lineTo(this._width - 50, 450 - this._intervalY * i);
    }
    this._ctx.stroke();
    this._ctx.closePath();
  }

  _makeRounding(number) {
    if (String(number % 1).length > 5 ) {
      if (number.toFixed(2) * 10 % 1 === 0) return number.toFixed(1);
      else return number.toFixed(2);
    }
    else return number;
  }

  _init(arrayData, objData) {
    this._arrayData = arrayData;
    this._intervalsX = objData.getIntervalsX.length + 2;
    this._maximum = objData.getMaximum;
    this._intervalX = (this._width - 100) / (this._intervalsX);
    this._findIntervalsY(objData.getIntervalsY);
    this._arrayOfIntervalsText = objData.getIntervalsX;
  }

  run(arrayData, objData) {
    this._init(arrayData, objData);
    this.clear();
    this._drawAxes();
    this._drawChart();
  }
}
