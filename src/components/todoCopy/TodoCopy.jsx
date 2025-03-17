import TodoHeadCopy from "./TodoHeadCopy";
import TodoStoreCopy from "../../store/TodoStoreCopy";
import OnEmptyCopy from "./OnEmptyCopy";
import TodoBodyCopy from "./TodoBodyCopy";
import DeleteAllCopy from "./DeleteAllCopy";

const TodoCopy = () => {
  return (
    <>
      <TodoStoreCopy>
        <TodoHeadCopy />
        <OnEmptyCopy />

        <TodoBodyCopy />
        <DeleteAllCopy />
      </TodoStoreCopy>
    </>
  );
};

export default TodoCopy;
