import { ROMAN_TO_DIGIT } from "../../constants";

function isValidRomanNumber(romanNumber) {
  return /^(?=[MDCLXVI])M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(
    romanNumber
  );
}

function calculateDigit(roman) {
  let romanNumber = roman.toUpperCase();
  let chunk;
  let oldChunk = 1001;
  let calculation = 0;

  romanNumber = romanNumber.replace(/[^IVXLCDM]/gi, "");

  for (let index = 0; index < romanNumber.length; index++) {
    const element = romanNumber.slice(index, index + 1);

    chunk = ROMAN_TO_DIGIT[element];

    if (chunk <= oldChunk) {
      calculation += chunk;
    } else {
      calculation += chunk - 2 * oldChunk;
    }

    oldChunk = chunk;
  }

  return calculation;
}

export default romanNumber => {
  if (!romanNumber.includes("&")) {
    if (isValidRomanNumber(romanNumber)) {
      return calculateDigit(romanNumber);
    } else {
      return "Not valid Roman";
    }
  }

  const splittedRoman = romanNumber.split("&");

  if (
    !isValidRomanNumber(splittedRoman[0]) ||
    !isValidRomanNumber(splittedRoman[1])
  ) {
    return "Not valid Roman";
  }

  return (
    calculateDigit(splittedRoman[0]) * 1000 + calculateDigit(splittedRoman[1])
  );
};
