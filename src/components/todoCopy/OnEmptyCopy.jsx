import { useContext } from "react";
import { TodoContextCopy } from "../../store/TodoStoreCopy";

const OnEmptyCopy = () => {
  const { toDos } = useContext(TodoContextCopy);
  return (
    <>
      {toDos.length === 0 && (
        <p className="mt-4 text-3xl font-extrabold text-gray-600">
          Enjoy your day
        </p>
      )}
    </>
  );
};

export default OnEmptyCopy;
