import { useContext } from "react";
import { FragmentContext } from "../../store/FragmentStore";

const DisplayFood = () => {
  const { items, handleOnDelete } = useContext(FragmentContext);
  return (
    <>
      <div className="flex flex-col gap-2  max-h-[500px] overflow-y-auto ">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-1 font-extrabold bg-gray-800 uppercase text-white rounded-3xl flex items-center justify-between px-10 cursor-pointer"
            onClick={() => handleOnDelete(index)}
          >
            <div className="flex gap-2 items-center">
              <p className="p-2  ">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayFood;
