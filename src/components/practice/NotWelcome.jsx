import { useContext } from "react";
import { PracticeContext } from "../../store/PracticeStore";

const NotWelcome = () => {
  const { value } = useContext(PracticeContext);

  return (
    <>
      <div className="text-4x text-3xl font-extrabold bg-gray-600 p-4 rounded w-fit">
        {value}
      </div>
    </>
  );
};

export default NotWelcome;
