/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const InputSlider = ({
  first = "OFF",
  second = "ON",
  state,
  dispatch,
  type,
}) => {
  return (
    <div>
      <label className="relative inline-block h-7 w-[70px] ">
        <input
          type="checkbox"
          className="peer w-0 h-0 opacity-0"
          value={state}
          checked={state}
          onChange={() => dispatch({ type })}
        />
        <span className="absolute inset-x-0 inset-y-0 cursor-pointer bg-black rounded-lg transition before:transition before:rounded-lg before:content-[''] before:absolute before:h-full before:w-8 before:left-0  before:duration-400 before:bg-red-500 peer-checked:before:translate-x-[38px]  flex justify-around items-center">
          <p className="text-white z-10 text-sm pr-2">{first}</p>
          <p className="text-white z-10 text-sm pr-1">{second}</p>
        </span>
      </label>
    </div>
  );
};

export default InputSlider;
