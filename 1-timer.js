import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f,i as h}from"./assets/vendor-BbbuE1sJ.js";const t={input:document.querySelector("#datetime-picker"),startBtn:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let d=null,a=null;t.startBtn.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];n<=new Date?(h.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),t.startBtn.disabled=!0):(d=n,t.startBtn.disabled=!1)}};f(t.input,y);function p(e){const i=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:l,seconds:m}}function r(e){return String(e).padStart(2,"0")}function u({days:e,hours:n,minutes:o,seconds:s}){t.days.textContent=r(e),t.hours.textContent=r(n),t.minutes.textContent=r(o),t.seconds.textContent=r(s)}function S(){t.startBtn.disabled=!0,t.input.disabled=!0,a=setInterval(()=>{const n=d-new Date;if(n<=0){clearInterval(a),u({days:0,hours:0,minutes:0,seconds:0}),t.input.disabled=!1;return}u(p(n))},1e3)}t.startBtn.addEventListener("click",S);
//# sourceMappingURL=1-timer.js.map
