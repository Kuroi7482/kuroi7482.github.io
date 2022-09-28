
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
noteAudio.play();

}

let myName = "Kylie";
const nameSpan = document.getElementById('name');
nameSpan.textContent = myName;

let myAge = 15;
const ageSpan = document.getElementById('age');
ageSpan.textContent = myAge;

let likesMusic = true;
let likesMusicText

if(likesMusic === true) {
     likesMusicText = 'me fascina el punchis punchis';
} else {
    likesMusicText = 'no me late el punchis punchis';
}

const likesMusicSpan = document.getElementById('likesMusic');
likesMusicSpan.textContent = likesMusicText;

function pressedKey() {
alert('A key was pressed');
}

const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','g','h','j'];

const keys = document.querySelectorAll('.keys');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

document.addEventListener('keydown', (e) => {
   //alert('Key pressed');
   if (e.repeat) return;
   const key = e.key;
   const whiteKeyIndex = WHITE_KEYS.indexOf(key);
   const blackKeyIndex = BLACK_KEYS.indexOf(key);

   if (whiteKeyIndex > -1) {
      playNote(whiteKeys[whiteKeyIndex]);
 }
   if (blackKeyIndex > -1) {
     playNote(blackKeys[blackKeyIndex]);
   }
});
