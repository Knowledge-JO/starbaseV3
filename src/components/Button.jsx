/* eslint-disable react/prop-types */
const Button = ({ currStep, onNextStep, onPreviousStep }) => {
  return (
    <div className="text-white text-center px-10  mt-8 md:px-[100px]">
      {currStep > 1 && (
        <button
          onClick={onPreviousStep}
          className="relative bottom-[-15%] mr-5 bg-[#262626] hover:bg-[#3676E1] px-5 py-2 w-[100px] rounded-lg transition ease-in duration-300"
        >
          Previous
        </button>
      )}
      <button
        onClick={onNextStep}
        className="relative bottom-[-15%] bg-[#262626] hover:bg-[#3676E1] px-5 py-2 w-[100px] rounded-lg transition ease-in duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default Button;
