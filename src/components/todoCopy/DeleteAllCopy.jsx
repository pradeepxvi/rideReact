import { useContext } from "react";
import { TodoContextCopy } from "../../store/TodoStoreCopy";

const DeleteAllCopy = () => {
  const { toDos, handleDeleteAll } = useContext(TodoContextCopy);
  return (
    <>
      {toDos.length > 1 && (
        <button
          className="text-red-600 cursor-pointer"
          onClick={() => handleDeleteAll()}
        >
          Delete All
        </button>
      )}
    </>
  );
};

export default DeleteAllCopy;
