import {
  act,
  Children,
  createContext,
  useContext,
  useReducer,
  useRef,
} from "react";

export const SocialMediaContext = createContext([]);

const SocialMediaReducer = (currentItem, action) => {
  if (action.type == "ADD") {
    return [action.payload, ...currentItem];
  } else if (action.type == "DEL") {
    return currentItem.filter((item, index) => index !== action.payload.index);
  } else if (action.type == "DEL_ALL") {
    return [];
  }
};

const SocialMediaStore = ({ children }) => {
  const [post, dispatchPost] = useReducer(SocialMediaReducer, [
    {
      userid: "pradeep",
      title: "I want to learn react",
      content: "i m learnning react",
      hastag: ["hello", "world", "i", "am", "pradeep", "kunwar"],
      noOfLike: "10",
    },
    {
      userid: "pradeep",
      title: "I want to learn react",
      content: "i m learnning react",
      hastag: ["hello", "world", "i", "am", "pradeep", "kunwar"],
      noOfLike: "10",
    },
    {
      userid: "pradeep",
      title: "I want to learn react",
      content: "i m learnning react",
      hastag: ["hello", "world", "i", "am", "pradeep", "kunwar"],
      noOfLike: "10",
    },
  ]);

  const HandleAdd = (userid, title, content, hastag) => {
    dispatchPost({
      type: "ADD",
      payload: {
        userid: userid,
        title: title,
        content: content,
        hastag: hastag.split(" "),
      },
    });
  };
  const HandleDelete = (index) => {
    dispatchPost({
      type: "DEL",
      payload: { index },
    });
  };
  const HandleDeleteAll = () => {
    dispatchPost({ type: "DEL_ALL" });
  };

  return (
    <>
      <SocialMediaContext.Provider
        value={{ HandleAdd, HandleDelete, HandleDeleteAll, post }}
      >
        {children}
      </SocialMediaContext.Provider>
    </>
  );
};
export default SocialMediaStore;
