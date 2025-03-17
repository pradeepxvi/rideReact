import React from "react";
import { createContext, useReducer } from "react";

export const TodoContextCopy = createContext();

const todoItemReducer = (currentTodoItem, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return currentTodoItem.filter(
        (item, index) => index !== action.payload.index
      );
    case "NEW_ITEM":
      return [
        { task: action.payload.itemName, date: action.payload.itemDate },
        ...currentTodoItem,
      ];
    case "DELETE_ALL_ITEM":
      return [];
    default:
      return currentTodoItem.DeleteAll();
  }
};

const TodoStoreCopy = ({ children }) => {
  const [toDos, dispatchToDos] = useReducer(todoItemReducer, []);

  const handleDelete = (index) => {
    dispatchToDos({
      type: "DELETE_ITEM",
      payload: { index },
    });
  };

  const handleDeleteAll = () => {
    dispatchToDos({ type: "DELETE_ALL_ITEM" });
  };

  const handlesOnAdd = (itemName, itemDate) => {
    dispatchToDos({
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    });
  };

  return (
    <>
      <TodoContextCopy.Provider
        value={{ toDos, handlesOnAdd, handleDelete, handleDeleteAll }}
      >
        {children}
      </TodoContextCopy.Provider>
    </>
  );
};

export default TodoStoreCopy;
