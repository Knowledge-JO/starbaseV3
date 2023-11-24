/* eslint-disable react/prop-types */
const Button = ({ currStep, onNextStep, onPreviousStep }) => {
  return (
    <div className="text-white text-center px-10  mt-8 md:px-[100px]">
      {currStep > 1 && (
        <button
          onClick={onPreviousStep}
          className="relative bottom-[-15%] bg-[#262626] hover:bg-red-500 px-5 py-2 w-[100px] rounded-lg transition ease-in duration-300"
        >
          Previous
        </button>
      )}
      {currStep < 5 && (
        <button
          onClick={onNextStep}
          className="relative ml-5 bottom-[-15%] bg-[#262626] hover:bg-red-500 px-5 py-2 w-[100px] rounded-lg transition ease-in duration-300"
        >
          {currStep == 4 ? "Deploy" : "Next"}
        </button>
      )}
    </div>
  );
};

export default Button;
