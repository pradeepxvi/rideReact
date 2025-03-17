import { useRef, createContext, useReducer } from "react";

export const FragmentContext = createContext();

const fragmentReducer = (currentItems, action) => {
  if (action.type === "NEW_ITEM") {
    return [action.payload.value, ...currentItems];
  }
  if (action.type === "DELETE_ITEM") {
    return currentItems.filter((item, index) => index !== action.payload.index);
  }
  if (action.type === "DELETE_ALL_ITEM") {
    return [];
  }
};

const FragmentStore = ({ children }) => {
  const [items, dispatchItems] = useReducer(fragmentReducer, []);
  const foodNameRef = useRef(null);

  const handleOnAdd = (value) => {
    dispatchItems({
      type: "NEW_ITEM",
      payload: { value },
    });
    foodNameRef.current.value = "";
  };

  const handleOnDelete = (index) => {
    dispatchItems({
      type: "DELETE_ITEM",
      payload: { index },
    });
  };

  const handleOnDeleteAll = () => {
    dispatchItems({ type: "DELETE_ALL_ITEM" });
  };
  return (
    <>
      <FragmentContext.Provider
        value={{
          items,
          handleOnAdd,
          foodNameRef,
          handleOnDelete,
          handleOnDeleteAll,
        }}
      >
        {children}
      </FragmentContext.Provider>
    </>
  );
};

export default FragmentStore;
