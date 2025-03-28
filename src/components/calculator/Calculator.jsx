import React, { useState } from "react";
import Button from "./Button";

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

  const [result, setResult] = useState("");

  const setResultValue = (value) => {
    if (result !== "Error") {
      if (value === "AC") {
        setResult("");
      } else if (value === "=") {
        if (result === "Error") {
          setResult("");
        } else if (result == 0) {
          setResult(0);
        } else {
          try {
            setResult(eval(result).toString());
          } catch {
            setResult("Error");
          }
        }
      } else if (value === "C") {
        if (result === "Error") {
          setResult("");
        } else {
          setResult(result.slice(0, -1));
        }
      } else {
        setResult((prev) => prev + value);
      }
    } else {
      setResult(value);
    }
  };

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

      <p className="bg-orange-400 font-bold text-center mt-4 py-3 rounded text-black">
        Pradeep
      </p>
    </>
  );
};

export default Calculator;
