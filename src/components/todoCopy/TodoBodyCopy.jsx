import { useContext } from "react";
import { TodoContextCopy } from "../../store/TodoStoreCopy";
import MyTodoCopy from "./MyTodoCopy";

const TodoBodyCopy = () => {
  const { toDos, handleDelete } = useContext(TodoContextCopy);
  return (
    <div className="mt-5 max-h-[500px] overflow-y-auto">
      <div className="flex flex-col gap-2">
        {toDos.map((items, index) => (
          <MyTodoCopy
            item={items}
            key={index}
            index={index}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoBodyCopy;
