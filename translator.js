const messageInput = document.getElementById("text-input");
const messageOutput = document.getElementById("translated-message");
let message;

// I'm using an object to store English letters and Morse characters as key:value pairs.
// eslint-disable-next-line no-unused-vars
const morseCodeObject = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "_.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "",
  "": " ",
};

export const translateEnglishToMorse = (englishInput) => {
  englishInput = englishInput.split("");
  for (let i = 0; i < englishInput.length; i++) {
    englishInput[i] = englishInput[i].toLowerCase().split("");
    englishInput[i].forEach((letter, j) => {
      englishInput[i][j] = morseCodeObject[letter];
    });
    englishInput[i] = englishInput[i].join(" ");
  }
  messageOutput.innerHTML = englishInput.join(" ");
};
/*
1. The function translateEnglishToMorse() takes a string as an argument and splits it into an array of characters.
2. For each character in the array, it converts it to lowercase and splits it into an array of letters.
3. For each letter in the array, it looks up the letter in the morseCodeObject object and returns the morse code for that letter.
4. The function then joins the array of morse code letters into a string and returns it.

*/
