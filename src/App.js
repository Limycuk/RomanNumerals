import React, { useState } from "react";
import "./App.css";
import RomanNumerals from "./services/RomanNumerals";

function App() {
  const [digit, setDigit] = useState(0);

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
          <span>{digit > 0 ? RomanNumerals.toRoman(digit) : ""}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
