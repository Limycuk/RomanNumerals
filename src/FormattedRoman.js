import React from "react";

function FormattedRoman({ romanNumber }) {
  const splitterRoman = romanNumber.split("&");

  if (splitterRoman.length === 2) {
    return (
      <span className="formatted-roman">
        <span className="overline">{splitterRoman[0]}</span>
        {splitterRoman[1]}
      </span>
    );
  }

  return <span className="result">{splitterRoman}</span>;
}

export default FormattedRoman;
