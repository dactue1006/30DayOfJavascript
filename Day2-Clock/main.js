const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
let date = new Date();
let second, minute, hour;
function init(){
    second = date.getSeconds();
    minute = date.getMinutes();
}

function setDate(){
    second++;
    if (second%60==59){
        minute++;
    }
    hour = (new Date).getHours();
    secondDegree = (second/60)*360;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    //let date = new Date();
   
    //let minutes = date.getMinutes();
    minutesDegree = ((minute)/60)*360;
    minsHand.style.transform = `rotate(${minutesDegree}deg)`;

    //let hour = date.getHours();
    hourDegree = ((hour)/12)*360;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(second, minute, hour);
}
init();
setInterval(setDate, 1000);
