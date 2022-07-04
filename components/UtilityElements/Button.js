import React from 'react';

export default function Button({ text, id }) {
  return (
    <button
      type="button"
      id={id}
      className="inline-block px-7 py-4 my-5 bg-blueAccent border-2 border-blueAccent  font-medium text-md leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 hover:border-white text-white
      transition duration-300 ease-in-out"
    >
      {text}
    </button>
  );
}
