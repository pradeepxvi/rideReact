import { useContext } from "react";
import { TodoContext } from "../../store/TodoStore";

const DeleteAll = () => {
  const { HandleDeleteALL, items } = useContext(TodoContext);
  return (
    <>
      {items.length > 1 && (
        <button
          className="text-red-600 cursor-pointer"
          onClick={() => HandleDeleteALL()}
        >
          Delete All
        </button>
      )}
    </>
  );
};

export default DeleteAll;
