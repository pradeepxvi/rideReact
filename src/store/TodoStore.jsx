import { useReducer, createContext } from "react";

export const TodoContext = createContext([]);

const TodoReducer = (currentItems, action) => {
  if (action.type == "NEW_ITEM") {
    return [
      {
        task: action.payload.itemName,
        date: action.payload.itemDate,
      },
      ...currentItems,
    ];
  } else if (action.type == "DELETE_ITEM") {
    return currentItems.filter((item, index) => index != action.payload.index);
  }
  if (action.type == "DELETE_ALL_ITEM") {
    return [];
  }

  return currentItems;
};

const TodoStore = ({ children }) => {
  const [items, dispatchItems] = useReducer(TodoReducer, []);

  const HandleAdd = (itemName, itemDate) => {
    dispatchItems({
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    });
  };

  const HandleDelete = (index) => {
    dispatchItems({
      type: "DELETE_ITEM",
      payload: { index },
    });
  };

  const HandleDeleteALL = (index) => {
    dispatchItems({ type: "DELETE_ALL_ITEM" });
  };

  return (
    <TodoContext.Provider
      value={{ items, HandleAdd, HandleDelete, HandleDeleteALL }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoStore;
