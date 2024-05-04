import React from 'react';

function Button({ colors, text,textColor }) {
    console.log(colors);
  return (
    <button className={`rounded px-4 py-1 bg-${colors} w-[220px] border  text-${textColor}`}>{text}</button>
  );
}

export default Button;
