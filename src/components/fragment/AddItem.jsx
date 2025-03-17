import { useContext } from "react";
import { FragmentContext } from "../../store/FragmentStore";

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

export default AddItem;
