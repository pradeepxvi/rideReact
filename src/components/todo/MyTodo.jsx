import { Trash } from "lucide-react";

const MyTodo = ({ item, index, HandleDelete }) => {
  return (
    <div className={"flex gap-4 items-center p-3 rounded "}>
      <div className="text-left p-3 font-bold flex-1 flex gap-2 capitalize">
        <p>{item.task}</p>
      </div>
      <h1 className="font-bold p-3 w-[30%]">{item.date}</h1>

      <button
        className="bg-red-600 p-3 rounded font-bold  cursor-pointer"
        onClick={() => HandleDelete(index)}
      >
        <Trash size={20} color="white" />
      </button>
    </div>
  );
};

export default MyTodo;
