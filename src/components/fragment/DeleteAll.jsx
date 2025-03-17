import { useContext } from "react";
import { FragmentContext } from "../../store/FragmentStore";

const DeleteAll = () => {
  const { items, handleOnDeleteAll } = useContext(FragmentContext);
  return (
    <>
      {items.length > 1 && (
        <button
          className="text-red-600 cursor-pointer mt-3"
          onClick={() => handleOnDeleteAll()}
        >
          Delete All
        </button>
      )}
    </>
  );
};

export default DeleteAll;
