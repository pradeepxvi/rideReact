import React, { useState } from "react";
import { preconnect } from "react-dom";

const Button = ({ value, setResultValue }) => {
  return (
    <p
      className="p-5 text-xl font-extrabold w-[25%] bg-white text-black rounded cursor-pointer select-none"
      onClick={() => setResultValue(value)}
    >
      {value}
    </p>
  );
};

const Calculator = () => {
  const buttons = [
    "+",
    "AC",
    "C",
    "-",
    "*",
    "/",
    "9",
    "8",
    "7",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "=",
  ];

  const setResultValue = (value) => {
    if (value === "AC") {
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult(result.slice(0, -1));
    } else {
      setResult((prev) => prev + value);
    }
  };

  const [result, setResult] = useState("");
  return (
    <>
      <div className="">
        <p className="p-5 text-xl font-extrabold bg-white text-black rounded h-[70px] flex items-center justify-center">
          {result || 0}
        </p>
      </div>

      <div className="flex flex-wrap mt-4 gap-1 justify-between">
        {buttons.map((item) => (
          <Button value={item} setResultValue={setResultValue} />
        ))}
      </div>

      <p className="bg-orange-400 font-bold text-center mt-4 rounded text-black">
        Pradeep
      </p>
    </>
  );
};

export default Calculator;
