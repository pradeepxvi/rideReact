import { FragmentContext } from "../store";
import { useContext, useState, useRef } from "react";

const DisplayFood = () => {
  const { healthyFoods } = useContext(FragmentContext);
  return (
    <>
      <div className="flex flex-col gap-2  max-h-[500px] overflow-y-auto ">
        {healthyFoods.map((item, index) => (
          <div
            key={index}
            className="p-1 font-extrabold bg-gray-800 uppercase text-white rounded-3xl flex items-center justify-between px-10"
          >
            <div className="flex gap-2 items-center">
              <p className="p-2">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const AddItem = () => {
  const { handleOnAdd, foodNameRef } = useContext(FragmentContext);
  return (
    <div className="w-full flex justify-around gap-3 bg-white rounded-full px-10 py-2 mt-3  mb-10">
      <input
        className="text-black py-1 px-5 font-extrabold outline-none border-none flex-1"
        type="text"
        placeholder="Add food item..."
        ref={foodNameRef}
        autoFocus
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleOnAdd(foodNameRef.current.value);
          }
        }}
      />
    </div>
  );
};

const OnEmpty = () => {
  return (
    <>
      <p className="text-gray-600 text-3xl font-extrabold">I am still Hungry</p>
    </>
  );
};

const Fragments = () => {
  const [healthyFoods, setHealthyFoods] = useState([]);
  const foodNameRef = useRef(null);

  const handleOnAdd = (value) => {
    if (value.trim() === "") return;
    setHealthyFoods((prev) => [value, ...prev]);
    foodNameRef.current.value = "";
  };
  return (
    <>
      <FragmentContext.Provider
        value={{ healthyFoods, handleOnAdd, foodNameRef }}
      >
        <AddItem />
        {healthyFoods.length === 0 && <OnEmpty />}
        {healthyFoods.length !== 0 && <DisplayFood />}
      </FragmentContext.Provider>
    </>
  );
};

export default Fragments;
