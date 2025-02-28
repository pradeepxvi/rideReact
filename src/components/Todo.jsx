import React, { useState } from "react";

const TodoHead = ({ HandleOnClick, setTask, setDate, task, date }) => {
  return (
    <>
      <h1 className="font-extrabold  text-3xl ">ToDO App</h1>

      <div className="bg-gray-700 mt-5 p-5 flex gap-4 rounded">
        <input
          className="bg-white font-bold p-3 rounded text-black flex-1 capitalize autofocus"
          placeholder="Add your todoo here.."
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <input
          type="date"
          value={date}
          className="bg-orange-400 p-3 rounded font-bold w-[30%]"
          onChange={(event) => setDate(event.target.value)}
        />
        <button
          className="bg-green-600 p-3 rounded font-bold w-[20%] cursor-pointer"
          onClick={() => HandleOnClick(task, date)}
        >
          Add
        </button>
      </div>
    </>
  );
};

const MyTodo = ({ item }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="text-left p-3  font-bold flex-1 flex gap-2 capitalize">
        <p>{item.task}</p>
      </div>
      <h1 className="font-bold p-3   w-[30%]">{item.date}</h1>
      <button className="bg-red-600 p-3 rounded font-bold w-[20%] cursor-pointer ">
        {"Delete"}
      </button>
    </div>
  );
};

const TodoBody = ({ todos }) => {
  return (
    <div className="mt-5 ">
      <div className="flex flex-col gap-2 ">
        {todos.map((items, index) => (
          <MyTodo item={items} key={index} />
        ))}
      </div>
    </div>
  );
};

const Todo = () => {
  const [addTodo, setAddTodo] = useState(false);
  const [toDos, setToDos] = useState([]);

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const HandleOnClick = (task, date, taskStatus) => {
    if (task.trim() !== "" && date.trim() !== "") {
      setToDos((prev) => [
        ...prev,
        { task: task, date: date, taskStatus: false },
      ]);

      setTask("");
      setDate("");
    }
  };

  return (
    <>
      <TodoHead
        HandleOnClick={HandleOnClick}
        setTask={setTask}
        setDate={setDate}
        task={task}
        date={date}
      />
      <TodoBody todos={toDos} />
    </>
  );
};

export default Todo;
