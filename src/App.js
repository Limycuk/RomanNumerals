import React, { useState, Fragment } from "react";

import "./App.css";
import FormattedRoman from "./FormattedRoman";
import RomanNumerals from "./services/RomanNumerals";

function App() {
  const [digit, setDigit] = useState(3999999);
  const calculatedRomanNumber = RomanNumerals.toRoman(digit);

  const [romanNumber, setRomanNumber] = useState("MMMCMXCIX&CMXCIX");
  const calculatedDigit = RomanNumerals.fromRoman(romanNumber);

  return (
    <div className="App">
      <div className="converters">
        <div className="converter">
          <input
            value={digit}
            type="number"
            onChange={event => setDigit(event.target.value)}
          />
          <span>=></span>
          <FormattedRoman romanNumber={calculatedRomanNumber} />
        </div>
        <div className="converter">
          <input
            value={romanNumber}
            type="string"
            onChange={event => setRomanNumber(event.target.value)}
          />
          <span>=></span>
          {romanNumber.includes("&") && (
            <Fragment>
              <FormattedRoman romanNumber={romanNumber} />
              <span>=></span>
            </Fragment>
          )}
          <span>{calculatedDigit}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
