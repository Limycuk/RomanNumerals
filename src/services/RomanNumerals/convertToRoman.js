import { DIGIT_TO_ROMAN } from "../../constants";

function isNatural(digit) {
  return digit >= 0 && Math.floor(digit) === Number(digit);
}

function getBase(digit) {
  if (1 <= digit && digit <= 9) {
    return 1;
  }

  if (10 <= digit && digit <= 99) {
    return 10;
  }

  if (100 <= digit && digit <= 999) {
    return 100;
  }

  if (1000 <= digit && digit <= 3999) {
    return 1000;
  }

  return 100;
}

function digConvert(digit) {
  let romanNumber = "";
  let base;

  if (!isNatural(digit)) {
    return "Is not natural number";
  }

  if (digit > 3999999) {
    return "Maximum is 3 999 999";
  }

  while (digit > 0) {
    base = getBase(digit);

    if (digit >= 4000) {
      const integerPart = Math.trunc(digit / 1000);
      const overlineRoman = digConvert(integerPart);
      romanNumber = overlineRoman + "&";
      digit = digit % 1000;
    }

    if (digit >= 9 * base) {
      romanNumber += DIGIT_TO_ROMAN[base] + DIGIT_TO_ROMAN[base * 10];
      digit -= 9 * base;
    } else if (digit >= 5 * base) {
      romanNumber += DIGIT_TO_ROMAN[5 * base];
      digit -= 5 * base;
    } else if (digit >= 4 * base) {
      romanNumber += DIGIT_TO_ROMAN[base] + DIGIT_TO_ROMAN[5 * base];
      digit -= 4 * base;
    }

    while (digit >= base) {
      romanNumber += DIGIT_TO_ROMAN[base];
      digit -= base;
    }
  }

  return romanNumber;
}

export default digConvert;
