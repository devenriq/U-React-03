import React from "react";
import { Fragment } from "react";

import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle }) => {
  if (!title) {
    throw new Error("Title is null or undefined");
  }

  return (
    <div className="flex flex-col justify-center p-5  m-5 w-1/2">
      <h1 className="font-bold text-center text-3xl pb-3">{title}</h1>
      <h2 className="font-bold text-center text-xl pb-3">{subtitle}</h2>
      <div className="pb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        quod! Accusantium modi quos possimus illo sed aliquam rerum illum iste
        vel ex! Doloribus nisi voluptatibus sed pariatur nostrum voluptate
        soluta!
      </div>
      <button className="bg-blue-600 rounded rounded-full py-1 text-white">
        Press here!
      </button>
    </div>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};
