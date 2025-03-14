import React, { useState, useRef } from "react";
import { Trash } from "lucide-react";
import { TodoContext } from "../store";
import { useContext } from "react";

const TodoHead = () => {
  const { handlesOnAdd } = useContext(TodoContext);

  const taskNameRef = useRef(null);
  const taskDateRef = useRef(null);

  const validateInputs = () => {
    let task = taskNameRef.current.value;
    let date = taskDateRef.current.value;

    if (task.trim() === "" || date.trim() === "") return;

    handlesOnAdd(task, date);

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

const TodoBody = () => {
  const { toDos } = useContext(TodoContext);
  return (
    <div className="mt-5 max-h-[500px] overflow-y-auto">
      <div className="flex flex-col gap-2">
        {toDos.map((items, index) => (
          <MyTodo item={items} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

const MyTodo = ({ item, index }) => {
  const { handleDelete } = useContext(TodoContext);

  return (
    <div className={"flex gap-4 items-center p-3 rounded "}>
      <div className="text-left p-3 font-bold flex-1 flex gap-2 capitalize">
        <p>{item.task}</p>
      </div>
      <h1 className="font-bold p-3 w-[30%]">{item.date}</h1>

      <button
        className="bg-red-600 p-3 rounded font-bold  cursor-pointer"
        onClick={() => handleDelete(index)}
      >
        <Trash size={20} color="white" />
      </button>
    </div>
  );
};

const OnEmpty = () => {
  const { toDos } = useContext(TodoContext);
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

const DeleteAll = () => {
  const { toDos, setToDos } = useContext(TodoContext);
  return (
    <>
      {toDos.length > 1 && (
        <button
          className="text-red-600 cursor-pointer"
          onClick={() => setToDos([])}
        >
          Delete All
        </button>
      )}
    </>
  );
};

const Todo = () => {
  const [toDos, setToDos] = useState([]);

  const handleDelete = (index) => {
    setToDos((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const handlesOnAdd = (task, date) => {
    setToDos((prev) => [{ task: task, date: date }, ...prev]);
  };

  return (
    <>
      <TodoContext.Provider
        value={{ toDos, handlesOnAdd, handleDelete, setToDos }}
      >
        <TodoHead />
        <OnEmpty />
        <TodoBody />
        <DeleteAll />
      </TodoContext.Provider>
    </>
  );
};

export default Todo;
