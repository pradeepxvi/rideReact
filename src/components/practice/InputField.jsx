import React from "react";

export const RangeInput = ({ value, HandleValue }) => {
  return (
    <input
      type="range"
      value={value}
      max={100}
      min={0}
      onChange={HandleValue}
      className="w-full"
    />
  );
};

export const NumberInput = ({ value, HandleValue }) => {
  return (
    <input
      className="w-40 text-3xl p-5 text-white font-extrabold border-none outline-none"
      type="number"
      value={value}
      onInput={HandleValue}
    />
  );
};
