import {
  Delete,
  RemoveFormatting,
  ThumbsDownIcon,
  ThumbsUp,
  ThumbsUpIcon,
  Trash,
  Trash2,
  Trash2Icon,
  User,
} from "lucide-react";
import { useContext } from "react";
import { SocialMediaContext } from "../../store/SocialMediaStore";

const Feed = () => {
  const { post, HandleDelete } = useContext(SocialMediaContext);

  return post.map((item, index) => (
    <div key={index}>
      <div className="mt-10 posts  w-1/2 p-5 rounded mx-auto bg-gray-100 shadow shadow-black flex flex-col gap-5 relative">
        <Trash2Icon
          fill="red"
          className="cursor-pointer absolute tpo-0 right-2"
          onClick={() => {
            HandleDelete(index);
          }}
        />
        <p className="text-sm font-bold">@{item.userid}</p>
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <p className="text-2xl font-medium">{item.content}</p>
        <div className="hastags flex gap-5">
          {item.hastag?.map((tag, index) => (
            <p key={index} className="text-violet-800 font-bold">
              #{tag}
            </p>
          ))}
        </div>
        <div className="flex gap-5">
          <div className="flex gap-3">
            <ThumbsUpIcon color="blue" fill="blue" />
            <p>{item.noOfLike}</p>
          </div>
          <div className="flex gap-3">
            <ThumbsDownIcon color="red" fill="red" />
            <p>{item.noOfLike}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Feed;
