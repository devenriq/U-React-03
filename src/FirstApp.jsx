import { useState } from "react";
import React from "react";
import { Fragment } from "react";

import PropTypes from "prop-types";

export const FirstApp = ({ value }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    console.log("+1");
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleRest = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex flex-col justify-center p-5  m-5 w-1/2">
      <h1 className="font-bold text-center text-3xl pb-3">
        This is a Counter App
      </h1>
      <h2 className="font-bold text-center text-xl pb-3">{counter}</h2>
      <div className="pb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        quod! Accusantium modi quos possimus illo sed aliquam rerum illum iste
        vel ex! Doloribus nisi voluptatibus sed pariatur nostrum voluptate
        soluta!
      </div>
      <div>
        <button
          className="bg-blue-600 rounded rounded-full py-1 text-white w-1/3"
          onClick={handleAdd}
        >
          +1
        </button>
        <button
          className="bg-blue-600 rounded rounded-full py-1 text-white w-1/3"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="bg-blue-600 rounded rounded-full py-1 text-white w-1/3"
          onClick={handleRest}
        >
          -1
        </button>
      </div>
    </div>
  );
};
