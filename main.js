// ==UserScript==
// @name    Typeracer Bot
// @namespace Ambyjkl
// @description A bot that makes you win every time in TypeRacer
// @author	Ambyjkl
// @version  0.51
// @include http*://play.typeracer.com*
// @grant
// ==/UserScript==

function main(textBox) {
  const words = Array.from(document.querySelectorAll('span[unselectable=on]')).map(v => v.innerHTML).join('').split(' ');
  let i = 0;

  for (let j = 0; j < words[i].length; j++) {
    textBox.value += words[i][j];
  }
  textBox.value += ' ';

  textBox.onkeypress = (e) => {
    if (e.keyCode === 32) {
      if (++i < words.length){
        for (let j = 0; j < words[i].length; j++) {
          textBox.value += words[i][j];
        }
      }
    }
  };
}

setInterval(() => {
  const textBox = document.querySelector('input.txtInput');
  if (textBox && !textBox.modded) {
    textBox.modded = true;
    textBox.onclick = () => {
      if (!textBox.clicked) {
        textBox.clicked = true;
        main(textBox);
      }
    };
  }
}, 3000);
