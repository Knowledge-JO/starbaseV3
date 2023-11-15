const FormCounter = () => {
  return (
    <div className="text-white px-10 flex justify-center mt-[50px]">
      <div className="flex w-[100%] justify-center items-center text-sm">
        <div className="mr-[37px] before:ml-7 w-[25%] relative before:absolute before:top-[50%] before:w-[100%] before:h-[1px] before:bg-white">
          <p className="bg-[#262626] w-[20px] h-[20px] rounded-[50%] text-center">
            1
          </p>
        </div>
        <div className="mr-[37px] before:ml-7 w-[25%] relative before:absolute before:top-[50%]  before:w-[100%] before:h-[1px] before:bg-white">
          <p className="bg-[#] w-[20px] h-[20px] rounded-[50%] text-center">
            2
          </p>
        </div>
        <div className="mr-[37px] before:ml-7 w-[25%] relative before:absolute before:top-[50%]  before:w-[100%] before:h-[1px] before:bg-white">
          <p className="bg-[#] w-[20px] h-[20px] rounded-[50%] text-center">
            3
          </p>
        </div>
        <div>
          <p className="bg-[#] w-[20px] h-[20px] rounded-[50%] text-center">
            4
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormCounter;
