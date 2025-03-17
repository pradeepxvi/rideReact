import { useContext } from "react";
import { TodoContext } from "../../store/TodoStore";

const OnEmpty = () => {
  const { items } = useContext(TodoContext);
  return (
    <>
      {items.length === 0 && (
        <p className="mt-4 text-3xl font-extrabold text-gray-600">
          Enjoy your day
        </p>
      )}
    </>
  );
};

export default OnEmpty;
