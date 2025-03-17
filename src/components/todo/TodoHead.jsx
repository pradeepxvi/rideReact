import { useContext, useRef } from "react";
import { TodoContext } from "../../store/TodoStore";

const TodoHead = () => {
  const { HandleAdd } = useContext(TodoContext);

  const taskNameRef = useRef(null);
  const taskDateRef = useRef(null);

  const validateInputs = () => {
    let task = taskNameRef.current.value;
    let date = taskDateRef.current.value;

    if (task.trim() === "" || date.trim() === "") return;

    HandleAdd(task, date);

    taskNameRef.current.value = "";
    // taskDateRef.current.value = "";
  };

  return (
    <>
      <h1 className="font-extrabold text-3xl">ToDo App</h1>
      <div className="bg-gray-700 mt-5 p-5 flex gap-4 rounded">
        <input
          type="date"
          ref={taskDateRef}
          className="bg-orange-400 p-3 rounded font-bold w-[30%]"
        />
        <input
          className="bg-white font-bold p-3 rounded text-black flex-1 capitalize border-none outline-none"
          placeholder="Add your todo here.."
          type="text"
          ref={taskNameRef}
          autoFocus
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              validateInputs();
            }
          }}
        />
      </div>
    </>
  );
};

export default TodoHead;
