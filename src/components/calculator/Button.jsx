const Button = ({ value, setResultValue }) => {
  return (
    <p
      className="p-5 text-xl font-extrabold w-[25%] bg-white text-black rounded cursor-pointer select-none"
      onClick={() => setResultValue(value)}
    >
      {value}
    </p>
  );
};

export default Button;
