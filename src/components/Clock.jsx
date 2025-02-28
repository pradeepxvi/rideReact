import React, { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(0);

  setInterval(() => {
    setDate(new Date().toString());
  }, 1000);

  return (
    <>
      <h1 className="text-4xl font-extrabold uppercase">this is clock</h1>
      <p className="text-3xl font-extrabold mt-10 p-5 text-white bg-blue-500 shadow-black shadow-inner rounded-full ">
        {date}
      </p>
    </>
  );
};

export default Clock;
