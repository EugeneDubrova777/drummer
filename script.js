'use strict';

const bass = document.querySelector('.bass');
const audioBass = document.querySelector('.a-bass');

const crash = document.querySelector('.crash');
const audioCrash = document.querySelector('.a-crash');

const hat = document.querySelector('.hat');
const audioHat = document.querySelector('.a-hat');

const snare = document.querySelector('.snare');
const audioSnare = document.querySelector('.a-snare');

const tom = document.querySelector('.tom');
const audioTom = document.querySelector('.a-tom');

const floorTom = document.querySelector('.floor-tom');
const audioFloorTom = document.querySelector('.a-floor-tom');

const ride = document.querySelector('.ride');
const audioRide = document.querySelector('.a-ride');





bass.addEventListener('click', () => {
  audioBass.play();
});

crash.addEventListener('click', () => {
  audioCrash.play();
});

hat.addEventListener('click', () => {
  audioHat.play();
});

snare.addEventListener('click', () => {
  audioSnare.play();
});

tom.addEventListener('click', () => {
  audioTom.play();
});

floorTom.addEventListener('click', () => {
  audioFloorTom.play();
});

ride.addEventListener('click', () => {
  audioRide.play();
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyX') {
    audioBass.play();
  }
  if (e.code === 'KeyW') {
    audioCrash.play();
  }
  if (e.code === 'KeyA') {
    audioHat.play();
  }
  if (e.code === 'KeyS') {
    audioSnare.play();
  }
  if (e.code === 'KeyT') {
    audioRide.play();
  }
  if (e.code === 'KeyF') {
    audioFloorTom.play();
  }
  if (e.code === 'KeyD') {
    audioTom.play();
  }
});
// document.addEventListener('keyup', (e) => {
//   if (e.code === 'KeyZ') {
//     bass.classList.remove('play-blue');
//   }
// })
