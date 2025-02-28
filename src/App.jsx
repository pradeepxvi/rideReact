import { Fragment } from "react";
import Clock from "./components/Clock";
import Todo from "./components/Todo";
import Fragments from "./components/Fragments";
import Props from "./components/Props";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <div className="bg-black mt-10 w-1/2 p-10 text-white  mx-auto rounded-xl text-center h-[600px] overflow-auto">
        <Todo />
      </div>

      {/* <div className="bg-black  mt-10 w-[70%] p-10 text-white  mx-auto rounded-xl text-center ">
        <Clock />
      </div> */}

      {/* <div className="bg-black  mt-10 w-[70%] p-10 text-white  mx-auto rounded-xl text-center h-[700px] ">
        <Fragments />
      </div> */}

      {/* <div className="bg-black  mt-10 w-[70%] p-10 text-white  mx-auto rounded-xl text-center ">
        <Props />
      </div> */}

      {/* <div className="bg-black  mt-10 w-1/3 p-10 text-white  mx-auto rounded-xl text-center ">
        <Calculator />
      </div> */}
    </>
  );
}

export default App;
