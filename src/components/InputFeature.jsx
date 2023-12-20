// eslint-disable-next-line react/prop-types
const InputFeature = ({ feature, label, state, children }) => {
  return (
    <div className="border-2 border-white/40 md:border-2  mb-3 rounded-lg w-full min-[600px]:w-[500px] px-4 min-[400px]:px-8 py-3 text-[12px]">
      <div className="flex justify-between items-center">
        <p className="text-base">{feature}</p>
        {children}
      </div>
      <div
        className={`${
          state ? "h-20" : " h-0"
        } transition-height duration-300 mt-3 mb-3`}
      >
        <label
          htmlFor="max-token"
          className={`${state ? "block" : "hidden"} text-sm ml-3 mb-1`}
        >
          {label}
        </label>
        <div className={`${state ? "block" : "hidden"} relative`}>
          <input
            className={`bg-[#262626] h-[40px] w-[100%] rounded-md px-7 ring-1 ring-gray-700 focus:outline focus:outline-red-500`}
            type="number"
            min={1}
            max={100}
            id="max-token"
          />
          <span className="absolute top-0 h-full flex items-center pl-3">
            %
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputFeature;
