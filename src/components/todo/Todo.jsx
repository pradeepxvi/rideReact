import TodoBody from "./TodoBody";
import OnEmpty from "./OnEmpty";
import DeleteAll from "./DeleteAll";
import TodoStore from "../../store/TodoStore";
import TodoHead from "./TodoHead";

const Todo = () => {
  return (
    <>
      <TodoStore>
        <TodoHead />
        <OnEmpty />
        <TodoBody />
        <DeleteAll />
      </TodoStore>
    </>
  );
};

export default Todo;
