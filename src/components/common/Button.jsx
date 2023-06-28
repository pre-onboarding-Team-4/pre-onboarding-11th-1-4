import React from 'react';

export default function Button({ text, onClick, bgColor, custom }) {
  const buttonClass = `text-white font-bold py-2 px-4 rounded ${bgColor} ${custom}`;

  return (
    <button type='button' onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
}
