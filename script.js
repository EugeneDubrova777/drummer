'use strict';

const kick = document.querySelector('.kick');
const audioKick = document.querySelector('.a-kick');

const crash = document.querySelector('.crash');
const audioCrash = document.querySelector('.a-crash');

const hat = document.querySelector('.hat');
const audioHat = document.querySelector('.a-hat');

const snare = document.querySelector('.snare');
const audioSnare = document.querySelector('.a-snare');

const tom = document.querySelector('.tom');
const audioTom = document.querySelector('.a-tom');

const settingKick = document.querySelectorAll('.setting__kick');



kick.addEventListener('click', () => {
  audioKick.play();
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

document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyZ') {
    audioKick.play();
    kick.classList.add('kick-blue');
  }
  if (e.code === 'KeyX') {
    audioCrash.play();
  }
  if (e.code === 'KeyC') {
    audioHat.play();
  }
  if (e.code === 'KeyV') {
    audioSnare.play();
  }
  if (e.code === 'KeyB') {
    audioTom.play();
  }
});
document.addEventListener('keyup', (e) => {
  if (e.code === 'KeyZ') {
    kick.classList.remove('kick-blue');
  }
})


for (let i = 0; i < settingKick.length; i++) {
  settingKick[i].addEventListener('click', () => {
    settingKick[i].classList.toggle('setting__kick--active');
  });
}