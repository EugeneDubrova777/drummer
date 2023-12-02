'use strict';

const bass = document.querySelector('.bass');
const audioBass = document.querySelector('.a-bass');

const crash = document.querySelector('.crash');
const audioCrash = document.querySelector('.a-crash');

// const hat = document.querySelector('.hat');
// const audioHat = document.querySelector('.a-hat');

// const snare = document.querySelector('.snare');
// const audioSnare = document.querySelector('.a-snare');

// const tom = document.querySelector('.tom');
// const audioTom = document.querySelector('.a-tom');

// const settingBass = document.querySelectorAll('.setting__bass');



bass.addEventListener('click', () => {
  audioBass.play();
});

crash.addEventListener('click', () => {
  audioCrash.play();
});

// hat.addEventListener('click', () => {
//   audioHat.play();
// });

// snare.addEventListener('click', () => {
//   audioSnare.play();
// });

// tom.addEventListener('click', () => {
//   audioTom.play();
// });

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyX') {
    audioBass.play();
  }
  if (e.code === 'KeyW') {
    audioCrash.play();
  }
  // if (e.code === 'KeyC') {
  //   audioHat.play();
  // }
  // if (e.code === 'KeyV') {
  //   audioSnare.play();
  // }
  // if (e.code === 'KeyB') {
  //   audioTom.play();
  // }
});
// document.addEventListener('keyup', (e) => {
//   if (e.code === 'KeyZ') {
//     bass.classList.remove('play-blue');
//   }
// })


// for (let i = 0; i < settingBass.length; i++) {
//   settingBass[i].addEventListener('click', () => {
//     settingBass[i].classList.toggle('setting__bass--active');
//   });
// }