import MyTodo from "./MyTodo";
import { useContext } from "react";
import { TodoContext } from "../../store/TodoStore";

const TodoBody = () => {
  const { items, HandleDelete } = useContext(TodoContext);
  return (
    <div className="mt-5 max-h-[500px] overflow-y-auto">
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <MyTodo
            item={item}
            key={index}
            index={index}
            HandleDelete={HandleDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoBody;
