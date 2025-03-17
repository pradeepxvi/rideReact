import { useContext } from "react";
import { FragmentContext } from "../../store/FragmentStore";

const OnEmpty = () => {
  const { items } = useContext(FragmentContext);
  return (
    <>
      {items.length == 0 && (
        <p className="text-gray-600 text-3xl font-extrabold">
          I am still Hungry
        </p>
      )}
    </>
  );
};
export default OnEmpty;
