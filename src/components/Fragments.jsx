import React, { useState } from "react";

const DisplayFood = ({ item, index, handleOnClick }) => {
  return (
    <div className="p-1 font-extrabold bg-gray-800 uppercase text-white rounded-3xl flex items-center justify-between px-10">
      <div className="flex gap-2 items-center">
        <p className="text-orange-400">{index + 1}</p>
        <p>{item}</p>
      </div>

      <button
        className="text-sm bg-orange-400 p-3 text-black rounded-full uppercase cursor-pointer"
        onClick={() => handleOnClick(item)}
      >
        Buy
      </button>
    </div>
  );
};

const AddItem = ({ handleOnAdd, setFoodName, foodName }) => {
  return (
    <div className="w-full flex justify-around gap-3 bg-white rounded-full px-10 py-2 mt-3 ">
      <input
        className="text-black py-1 px-5 font-extrabold outline-none border-none flex-1"
        type="text"
        placeholder="Add food item..."
        value={foodName}
        onChange={(event) => setFoodName(event.target.value)}
        autoFocus
      />
      <button
        className="bg-orange-400 p-3 rounded-full cursor-pointer"
        onClick={() => {
          if (foodName.trim() !== "") {
            handleOnAdd(foodName);
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

const Fragments = () => {
  const [healthyFoods, setHealthyFoods] = useState([
    "apple",
    "banana",
    "carrot",
    "green leafy vegetables",
    "watermelon",
    "orange",
    "milk",
  ]);
  const [foodName, setFoodName] = useState("");

  const handleOnClick = (value) => {
    console.log("Buying:", value);
  };

  const handleOnAdd = (value) => {
    setHealthyFoods([...healthyFoods, value]);
    setFoodName("");
  };

  return (
    <>
      <div>
        <h1 className="text-5xl font-extrabold text-orange-400">
          Healthy Foods
        </h1>

        <div className="flex flex-col gap-3 mt-4 h-[500px] overflow-y-auto">
          {healthyFoods.length === 0 && (
            <p className="text-2xl font-bold text-red-500">I am still Hungry</p>
          )}
          {healthyFoods.map((item, index) => (
            <DisplayFood
              item={item}
              index={index}
              key={index}
              handleOnClick={handleOnClick}
            />
          ))}
        </div>
      </div>

      <AddItem
        handleOnAdd={handleOnAdd}
        setFoodName={setFoodName}
        foodName={foodName}
      />
    </>
  );
};

export default Fragments;
