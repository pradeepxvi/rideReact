import React, { useState } from "react";
import { PracticeContext } from "../../store/PracticeStore";
import Welcome from "./Welcome";
import NotWelcome from "./NotWelcome";
import { RangeInput, NumberInput } from "./InputField";

const Practice = () => {
  const [value, setValue] = useState(10);

  const HandleValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <PracticeContext.Provider value={{ value }}>
      <RangeInput value={value} HandleValue={HandleValue} />
      <NumberInput value={value} HandleValue={HandleValue} />

      <div className="flex gap-4">
        <Welcome />
        <NotWelcome />
      </div>
    </PracticeContext.Provider>
  );
};

export default Practice;
