(()=>{"use strict";var e={395:(e,t,n)=>{e.exports=n.p+"2d8514489d4a4b84099c.png"},892:(e,t,n)=>{e.exports=n.p+"288dffff23f9a223edbe.png"},212:(e,t,n)=>{e.exports=n.p+"cb79c9d8c944f17e6a26.png"},258:(e,t,n)=>{e.exports=n.p+"e12aeab1b1620c266cc5.png"},652:(e,t,n)=>{e.exports=n.p+"d411c388f53f872b95bc.png"},306:(e,t,n)=>{e.exports=n.p+"e423b63b9ecf687a8379.png"},853:(e,t,n)=>{e.exports=n.p+"38a018e89707b465e80b.png"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{var e=document.querySelector(".header__setting-number-of-dices-input"),t=document.querySelector(".button-start"),r=document.querySelector(".button-reset"),i=document.querySelector(".add-event"),c=document.querySelector(".delete-event"),o=document.querySelector(".a-or-b"),a=document.querySelector(".a-and-b"),s=document.querySelector(".not-a"),l=document.querySelector(".header__events"),u=document.querySelector(".template-card"),d=document.querySelector(".template-dice"),h=document.querySelector(".template-card-data"),_=document.querySelector(".template-dices-data"),v=document.querySelector(".template-dice-data"),f=document.querySelector(".template-popup"),p=document.querySelector(".any-combination"),y=document.querySelector(".one-dice"),m=document.querySelector(".two-dice"),S=document.querySelector(".popup-slider"),x=S.querySelector(".popup__close-button"),b=S.querySelector(".button-yes"),g=S.querySelector(".button-no"),q=(document.querySelector(".footer"),document.querySelector(".canvas")),k={width:q.width,height:q.height},A=document.querySelector(".header__setting-number-of-throws-input"),L=document.querySelector(".header__setting-number-of-throws-input"),E=document.querySelector(".header__setting-validation");const w=function(e){var t=e.querySelector(".header__events-arrow"),n=e.querySelector(".header__events-event");t.addEventListener("click",(function(){n.classList.toggle("header__events-event_active"),t.classList.toggle("header__events-arrow_active")}))},T=function(){return document.querySelectorAll(".header__events-container").length},N=function(e){e.classList.remove("header__setting-button_inactive"),e.disabled=!1},I=function(e){e.classList.add("header__setting-button_inactive"),e.disabled=!0},j=function(e,t){switch(e){case 1:t.src=new URL(n(395),n.b),t.alt="diceD6N1";break;case 2:t.src=new URL(n(892),n.b),t.alt="diceD6N2";break;case 3:t.src=new URL(n(212),n.b),t.alt="diceD6N3";break;case 4:t.src=new URL(n(258),n.b),t.alt="diceD6N4";break;case 5:t.src=new URL(n(652),n.b),t.alt="diceD6N5";break;case 6:t.src=new URL(n(306),n.b),t.alt="diceD6N6";break;case 7:t.src=new URL(n(853),n.b),t.alt="diceD6NAll"}},M=function(e){var t=e.querySelector(".header__combinations-dice"),n=0;t.addEventListener("click",(function(){j(n+=1,t),n>6&&(n=0)}))},Y=function(e,t,n){var r=d.content.cloneNode(!0),i=_.content.cloneNode(!0).querySelector(".header__events-dices"),c=r.querySelector(".header__events-dice-checkbox");c.id="checkbox-dice".concat(T()+1),function(e,t){var n=t.querySelector(".remove-dice");e.querySelector(".header__events-dice-checkbox").addEventListener("click",(function(){var e=t.querySelectorAll(".header__events-dice-checkbox"),r=!1;e.forEach((function(e){if(e.checked)return r=!0})),r?N(n):I(n)}))}(r,t),i.append(c);for(var o=0;o<n;o++){var a=v.content.cloneNode(!0),s=a.querySelector(".header__combinations-dice");j(7,s),M(a),i.append(a)}e.append(i)},V=function(e,t){var n=e.querySelector(".header__events-text"),r=e.querySelector(".header__events-checkbox"),i=e.querySelector(".header__events-label"),c=e.querySelector(".header__events-container"),o=f.content.cloneNode(!0);r.id="checkbox".concat(T()+1),i.setAttribute("for","checkbox".concat(T()+1)),n.innerHTML="".concat("Событие"," ").concat(T()+1),function(e,t){var n=e.querySelector(".header__events-dice"),r=e.querySelector(".header__events-event");Y(n,r,t)}(e,t),c.append(o)},H=function(e){e.querySelector(".header__events-checkbox").addEventListener("click",(function(){var e=document.querySelectorAll(".header__events-checkbox"),t=0;e.forEach((function(e){e.checked&&(t+=1)})),1===t?N(s):I(s),t>0?N(c):I(c),t>1?N(o):I(o),2===t?N(a):I(a)}))},X=function(e){e.classList.add("popup__save-button_inactive"),e.disabled=!0},O=function(e,t,n){e.classList.remove("popup_opened"),X(n),t.value=""},D=function(e){var t=e.querySelector(".header__combinations-edit"),n=e.querySelector(".popup"),r=n.querySelector(".popup__close-button"),i=n.querySelector(".popup__input"),c=n.querySelector(".popup__title-name"),o=n.querySelector(".popup__container_add"),a=n.querySelector(".popup__save-button"),s=e.querySelector(".header__events-text");t.addEventListener("click",(function(){c.innerHTML=s.innerHTML,n.classList.add("popup_opened"),i.value=s.innerHTML})),r.addEventListener("click",(function(){return O(n,i,a)})),function(e,t,n,r,i){n.addEventListener("keyup",(function(){n.value.length>0&&n.value!==e.innerHTML?function(e){e.classList.remove("popup__save-button_inactive"),e.disabled=!1}(i):X(i)})),r.addEventListener("submit",(function(r){r.preventDefault(),e.innerHTML=n.value,O(t,n,i)}))}(s,n,i,o,a)},R=function(e){var t=e.cloneNode(!0).querySelectorAll(".header__combinations-dice"),n=[];t.forEach((function(e){var t=e.alt.slice(7);"All"!==t?n.push(t):n.push([1,2,3,4,5,6])}));var r="";return n.forEach((function(e){Array.isArray(e)?r+="All":r+=e})),{result:r,nameImgArr:n}},P=function(e,t){Object.keys(t).forEach((function(t){for(var n=_.content.cloneNode(!0).querySelector(".header__events-dices");0!==t.length;)if("A"!==t[0]){var r=v.content.cloneNode(!0),i=r.querySelector(".header__combinations-dice");j(Number(t[0]),i),n.append(r),t=t.replace(t[0],"")}else{var c=v.content.cloneNode(!0),o=c.querySelector(".header__combinations-dice");j(7,o),n.append(c),t=t.replace("All","")}e.append(n)}))},U=function(e){for(var t={},n={},r=0;r<e;r++)n[r]=1;for(var i=0;i!==Math.pow(6,e);)t[i]=[],Object.keys(n).forEach((function(e){t[i].push(n[e])})),i+=1,n[e-1]+=1,7===n[e-1]&&(n[e-1]=1,n[e-2]+=1),7===n[e-2]&&(n[e-2]=1,n[e-3]+=1),7===n[e-3]&&(n[e-3]=1,n[e-4]+=1);return t},C=function(e){var t=document.querySelectorAll(".header__events-checkbox"),n=e.querySelector(".header__events-issues"),r="";return t.forEach((function(e,n){e.checked&&(r+=e.closest(".header__events-title").querySelector(".header__events-text").innerHTML,n!==t.length-1?r+="; ":r+="")})),n.remove(),r},F=function(e){var t=e.querySelector(".header__events-text"),n=e.querySelector(".header__events-dice"),r=e.querySelector(".header__events-container"),i=f.content.cloneNode(!0);t.innerHTML="&cup; ".concat(T()+1),n.innerHTML="Объединение событий ".concat(C(e)),function(e){var t=e.querySelector(".header__events-dice"),n=document.querySelectorAll(".header__events-checkbox"),r=Number(sessionStorage.getItem("sliderValue")),i={},c={};n.forEach((function(e){e.checked&&e.closest(".header__events-container").querySelectorAll(".header__events-dices").forEach((function(e){var t=R(e);i[t.result]=t.nameImgArr}))}));var o=!1;Object.keys(i).forEach((function(e){e.split("All").length===r+1&&(o=!0,c[e]=i[e])})),Object.keys(i).forEach((function(e){o||(e.includes("All")?function(){var t=0,n={},r=[];e.split("All").forEach((function(e){""===e?r.push(""):e.split("").forEach((function(e){return r.push(e)}))})),r.forEach((function(e,r){""===e?(t+=1,n[r]=!1):n[r]=!0}));for(var o=U(t),a=function(t){var r=[],a=0;Object.keys(n).forEach((function(c,s){n[c]?r.push(String(i[e][s])):(r.push(String(o[t][a])),a+=1)}));var s=r.join("");c[s]=r},s=0;s<Math.pow(6,t);s++)a(s)}():c[e]=i[e])})),P(t,c)}(e),r.append(i)},W=function(e){var t=e.querySelector(".header__events-dice"),n=document.querySelectorAll(".header__events-checkbox"),r={},i=Number(sessionStorage.getItem("sliderValue")),c=function(e){var t={};return e.forEach((function(e,n){e.checked&&(t[n]={},e.closest(".header__events-container").querySelectorAll(".header__events-dices").forEach((function(e){var r=R(e);t[n][r.result]=r.nameImgArr})))})),t}(n),o=Object.keys(c),a=Number(o[0]),s=Number(o[1]);Object.keys(c[a]).forEach((function(e){Object.keys(c[s]).forEach((function(t){for(var n=[],o=0;o<i;o++)c[a][e][o]===c[s][t][o]&&n.push(c[a][e][o]),Array.isArray(c[a][e][o])&&!Array.isArray(c[s][t][o])&&n.push(c[s][t][o]),Array.isArray(c[s][t][o])&&!Array.isArray(c[a][e][o])&&n.push(c[a][e][o]),Array.isArray(c[s][t][o])&&Array.isArray(c[a][e][o])&&n.push(c[a][e][o]);var l="";if(n.length===i){for(var u=0;u<i;u++)Array.isArray(n[u])?l+="All":l+=n[u];r[l]=n}}))})),P(t,r)},z=function(e){var t=e.querySelector(".header__events-text"),n=e.querySelector(".header__events-dice"),r=e.querySelector(".header__events-container"),i=f.content.cloneNode(!0);t.innerHTML="not ".concat(T()+1),n.innerHTML="Не событие ".concat(C(e)),function(e){var t=e.querySelector(".header__events-dice"),n=document.querySelectorAll(".header__events-checkbox"),r={},i={};n.forEach((function(e){e.checked&&e.closest(".header__events-container").querySelectorAll(".header__events-dices").forEach((function(e){var t=R(e);r[t.result]=t.nameImgArr}))}));var c=Number(sessionStorage.getItem("sliderValue")),o=U(c);Object.keys(o).forEach((function(e){Object.keys(r).find((function(t){if(o[e].join("").length===r[t].join("").length){if(o[e].join("")===r[t].join(""))return!0}else{var n=[];if(r[t].forEach((function(t,r){if(Array.isArray(t)){var i=t.find((function(t){return t==o[e][r]}));n.push(String(i))}else String(o[e][r])===t&&n.push(t)})),n.join("")===o[e].join(""))return!0}}))||(i[o[e].join("")]=o[e])})),P(t,i)}(e),r.append(i)},G=function(e,t,n){var r=e.querySelector(".header__events-dice");if(1===n){var i=_.content.cloneNode(!0).querySelector(".header__events-dices"),c=v.content.cloneNode(!0),o=c.querySelector(".header__combinations-dice");j(t,o),i.append(c),r.append(i)}2===n&&function(){for(var e={},t=Array(2).fill().map((function(){return Array.of(1,2,3,4,5,6)})),n=2;n<=12;n++){e[n]=[];for(var r=0;r<6;r++)for(var i=0;i<6;i++)t[0][r]+t[1][i]===n&&e[n].push([t[0][r],t[1][i]])}return e}()[t].forEach((function(e){for(var t=_.content.cloneNode(!0).querySelector(".header__events-dices"),i=0;i<n;i++){var c=v.content.cloneNode(!0),o=c.querySelector(".header__combinations-dice");j(e[i],o),t.append(c)}r.append(t)}))},B=function(e,t,n){e.querySelector(".header__events-text").innerHTML="".concat(t),G(e,t,n)},J=function(){var e=l.querySelectorAll(".header__events-container");return e.forEach((function(e){var t=e.querySelector(".header__events-checkbox");t&&(t.checked=!1),e.remove()})),e},K=function(){I(i),I(o),I(a),I(s),I(c),e.disabled=!0},Q=function(){var e=sessionStorage.getItem("sliderValue");sessionStorage.setItem("sliderValue","1"),K();var t=J();return function(){for(var e=1;e<7;e++){var t=h.content.cloneNode(!0);B(t,e,1),w(t),l.append(t)}}(),{eventsArray:t,slider:e}},Z=function(){var e=sessionStorage.getItem("sliderValue");sessionStorage.setItem("sliderValue","2"),K();var t=J();return function(){for(var e=2;e<=12;e++){var t=h.content.cloneNode(!0);B(t,e,2),w(t),l.append(t)}}(),{eventsArray:t,slider:e}},$=function(){for(var e=function(e){var t={};return e.forEach((function(e,n){t[n]={},e.closest(".header__events-container").querySelectorAll(".header__events-dices").forEach((function(e){var r=R(e);t[n][r.result]=r.nameImgArr}))})),t}(document.querySelectorAll(".header__events-event")),t=A.value,n=Array(Object.keys(e).length).fill(0),r=Number(sessionStorage.getItem("sliderValue")),i=function(t){for(var i=[],c=0;c<r;c++)i.push(String((o=1,a=7,o=Math.ceil(o),a=Math.floor(a),Math.floor(Math.random()*(a-o))+o)));var o,a;Object.keys(e).forEach((function(t,r){Object.keys(e[t]).find((function(c){if(e[t][c].join("").length===i.join("").length){if(e[t][c].join("")===i.join(""))return n[r]+=1,!0}else{var o=[];if(e[t][c].forEach((function(e,t){if(Array.isArray(e)){var n=e.find((function(e){return e==i[t]}));o.push(n)}else e===i[t]&&o.push(e)})),o.join("")===i.join(""))return n[r]+=1,!0}}))}))},c=0;c<t;c++)i();return n},ee=function(){var e=document.querySelectorAll(".header__events-text"),t=[];return e.forEach((function(e){t.push(e.innerHTML)})),t},te=function(e){var t,n=$(),r=(t=n,Math.max.apply(null,t)),i={getIntervalsX:ee(),getIntervalsY:A.value,getMaximum:r};e.run(n,i)};function ne(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var re=function(){function e(t,n){var r=n.width,i=n.height;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._width=r,this._height=i,this._intervalsX=0,this._intervalsY=0,this._maximum=0,this._arrayOfIntervalsText=[],this._ctx=t.getContext("2d"),this._intervalX=0,this._intervalY=0,this._startValueY=0,this._arrayData=[]}var t,n;return t=e,(n=[{key:"_drawAxes",value:function(){this._ctx.beginPath(),this._ctx.lineWidth=2,this._ctx.fillStyle="#000000",this._ctx.font="18px  Roboto, Arial, sans-serif",this._ctx.moveTo(50,10),this._ctx.lineTo(50,this._height-50),this._ctx.lineTo(this._width-50,this._height-50),this._ctx.stroke(),this._ctx.moveTo(45,15),this._ctx.lineTo(50,10),this._ctx.lineTo(55,15),this._ctx.stroke(),this._ctx.moveTo(this._width-55,this._height-55),this._ctx.lineTo(this._width-50,this._height-50),this._ctx.lineTo(this._width-55,this._height-45),this._ctx.stroke(),this._drawVerticalDashesAndSignatures(),this._drawHorizontalDashesAndSignatures(),this._ctx.textAlign="left",this._ctx.fillText("Число бросаний",55,30),this._ctx.stroke(),this._ctx.closePath(),this._drawGrid()}},{key:"_drawVerticalDashesAndSignatures",value:function(){for(var e=1;e<=this._intervalsX-1;e++)this._ctx.moveTo(50+this._intervalX*e,this._height-60),this._ctx.lineTo(50+this._intervalX*e,this._height-40),this._ctx.textAlign="center",e>0&&e<this._intervalsX-1&&this._ctx.fillText(this._arrayOfIntervalsText[e-1],50+this._intervalX*e+this._intervalX/2,this._height-20),this._ctx.stroke()}},{key:"_drawHorizontalDashesAndSignatures",value:function(){for(var e=1;e<this._intervalsY+1;e++)this._ctx.moveTo(40,450-this._intervalY*e),this._ctx.lineTo(60,450-this._intervalY*e),this._ctx.textAlign="right",this._ctx.fillText(String(this._makeRounding(this._startValueY*e)),40,456-this._intervalY*e);this._ctx.stroke()}},{key:"_drawChart",value:function(){this._ctx.beginPath(),this._ctx.lineWidth=2,this._ctx.fillStyle="#953735",this._ctx.textAlign="center",this._ctx.font="18px  Roboto, Arial, sans-serif";for(var e=(this._height-100-this._intervalY)/(this._startValueY*(this._intervalsY-1)),t=1;t<=this._intervalsX-2;t++){var n=this._arrayData[t-1];this._ctx.fillRect(55+this._intervalX*t,this._height-50-e*n,this._intervalX-10,e*n)}this._ctx.stroke(),this._ctx.fillStyle="#000000";for(var r=1;r<=this._intervalsX-2;r++){var i=this._arrayData[r-1];this._ctx.fillText(this._arrayData[r-1],50+this._intervalX*r+this._intervalX/2,this._height-60-e*i)}this._ctx.stroke(),this._ctx.closePath()}},{key:"clear",value:function(){this._ctx.clearRect(0,0,this._width,this._height)}},{key:"_findIntervalsY",value:function(e){e>0&&e<=5&&(this._startValueY=.5),e>5&&e<=10?this._startValueY=1:(e>10&&e<=100||e>100&&e<=1e3||e>1e3&&e<=1e4)&&(this._startValueY=(this._maximum+(10-this._maximum%10))/10),this._intervalsY=10,this._intervalY=(this._height-100)/this._intervalsY}},{key:"_drawGrid",value:function(){this._ctx.beginPath(),this._ctx.lineWidth=1,this._ctx.strokeStyle="#000000";for(var e=1;e<this._intervalsY+1;e++)this._ctx.moveTo(60,450-this._intervalY*e),this._ctx.lineTo(this._width-50,450-this._intervalY*e);this._ctx.stroke(),this._ctx.closePath()}},{key:"_makeRounding",value:function(e){return String(e%1).length>5?10*e.toFixed(2)%1==0?e.toFixed(1):e.toFixed(2):e}},{key:"_init",value:function(e,t){this._arrayData=e,this._intervalsX=t.getIntervalsX.length+2,this._maximum=t.getMaximum,this._intervalX=(this._width-100)/this._intervalsX,this._findIntervalsY(t.getIntervalsY),this._arrayOfIntervalsText=t.getIntervalsX}},{key:"run",value:function(e,t){this._init(e,t),this.clear(),this._drawAxes(),this._drawChart()}}])&&ne(t.prototype,n),e}(),ie=[],ce="1",oe=!0,ae=new re(q,k);sessionStorage.setItem("sliderValue","1"),e.addEventListener("change",(function(){var t=document.querySelectorAll(".header__events-checkbox");0===t.length?sessionStorage.setItem("sliderValue",e.value):function(t){S.classList.add("popup_opened");var n=sessionStorage.getItem("sliderValue");function r(){S.classList.remove("popup_opened"),e.value=n}x.addEventListener("click",r),g.addEventListener("click",r),b.addEventListener("click",(function(){S.classList.remove("popup_opened"),t.forEach((function(e){return e.closest(".header__events-container").remove()})),sessionStorage.setItem("sliderValue",e.value)}))}(t)})),L.addEventListener("input",(function(){L.value<1||L.value>1e4?(E.innerHTML="Значение может быть от 1 до 10 000",I(t)):(E.innerHTML="",N(t))})),t.addEventListener("click",(function(){te(ae)})),r.addEventListener("click",(function(){!function(n){sessionStorage.setItem("sliderValue","1"),N(i),N(t),I(o),I(a),I(s),I(c),e.disabled=!1,e.value=1,L.value=100,E.innerHTML="",n.clear(),J()}(ae)})),i.addEventListener("click",(function(){var e=sessionStorage.getItem("sliderValue"),t=u.content.cloneNode(!0);V(t,e),w(t),H(t),D(t),function(e,t){var n=e.querySelector(".add-dice"),r=e.querySelector(".header__events-dice"),i=e.querySelector(".header__events-event");n.addEventListener("click",(function(){Y(r,i,t)}))}(t,e),function(e){var t=e.querySelector(".remove-dice");t.addEventListener("click",(function(){t.closest(".header__events-event_active").querySelectorAll(".header__events-dice-checkbox").forEach((function(e){e.checked&&e.closest(".header__events-dices").remove()})),I(t)}))}(t),l.append(t)})),c.addEventListener("click",(function(){document.querySelectorAll(".header__events-checkbox").forEach((function(e){e.checked&&e.closest(".header__events-container").remove()})),I(c),I(o),I(a),I(s)})),o.addEventListener("click",(function(){var e=u.content.cloneNode(!0);F(e),w(e),H(e),D(e),l.append(e)})),a.addEventListener("click",(function(){var e=u.content.cloneNode(!0);(function(e){var t=e.querySelector(".header__events-text"),n=e.querySelector(".header__events-dice"),r=e.querySelector(".header__events-container"),i=f.content.cloneNode(!0);t.innerHTML="and ".concat(T()+1),n.innerHTML="Пересечение событий ".concat(C(e)),W(e),r.append(i)})(e),w(e),H(e),D(e),l.append(e)})),s.addEventListener("click",(function(){var e=u.content.cloneNode(!0);z(e),w(e),H(e),D(e),l.append(e)})),p.addEventListener("click",(function(){(function(t,n){sessionStorage.setItem("sliderValue",n),N(i),I(o),I(a),I(s),I(c),e.disabled=!1,J(),t.forEach((function(e){l.append(e)}))})(ie,ce),oe=!0})),y.addEventListener("click",(function(){if(oe){var e=Q();ie=e.eventsArray,ce=e.slider}else Q();oe=!1})),m.addEventListener("click",(function(){if(oe){var e=Z();ie=e.eventsArray,ce=e.slider}else Z();oe=!1}))})()})();