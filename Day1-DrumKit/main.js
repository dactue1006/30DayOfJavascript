'use strict';

function playSound(event){
    const keyName = event.keyCode;
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"`)
    //console.log(eveny.key);
    if (!audio){
        return;
    }
    audio.currentTime = 0;
    audio.play();
    //console.log(audio);
    key.classList.add("playing");
    
}
function removeTransition(e){
    if (e.propertyName === 'transform'){
        return;
    }
    this.classList.remove('playing');
    console.log(this);
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);