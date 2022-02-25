/* eslint-disable no-unused-vars */
import { expect, it, describe } from "@jest/globals";
import { translateEnglishToMorse } from "./translator.js";
// @ts-ignore

describe("translates words from english to morse", () => {
// positive test case for a single letter
  it("should translate "a" to ".-", () => {
    const result = translateEnglishToMorse("a");
    expect(result).toBe(".-");

  it("should translate "car" to "-.-..-.-.", () => {
    const result = translateEnglishToMorse("car");
    expect(result).toBe("-.-..-.-.");

// positive test case for a sentence
// it("should translate "Hello, my name is John and I'm a doctor living in London" to ".... . .-.. .-.. --- --..-- / -- -.-- / -. .- -- . / .. ... / .--- --- .... -. / .- -. -.. / .. .----. -- / .- / -.. --- -.-. - --- .-. / .-.. .. ...- .. -. --. / .. -. / .-.. --- -. -.. --- -.", () => {
//     const result = translateEnglishToMorse("Hello, my name is John and I'm a doctor living in London");
//     expect(result).toBe(".... . .-.. .-.. --- --..-- / -- -.-- / -. .- -- . / .. ... / .--- --- .... -. / .- -. -.. / .. .----. -- / .- / -.. --- -.-. - --- .-. / .-.. .. ...- .. -. --. / .. -. / .-.. --- -. -.. --- -.");

//  Negative tests for edge cases 

// qat = A shrub that grows in the Middle East and Africa
it("should translate "qat" to "--.- .- -", () => {
  const result = translateEnglishToMorse("qat");
  expect(result).toBe("--.- .- -");

});

it("should not translate "bicycle" to "-.....-.-.", () => {
  const result = translateEnglishToMorse("bicycle");
  expect(result).not.toBe("-.....-.-.");
  
});


// });



// describe("translates morse code to english", () => {});
