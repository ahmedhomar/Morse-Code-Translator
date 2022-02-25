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

// export const translateEnglishToMorse = (englishWord) => {
//   return num1*num2
// }
