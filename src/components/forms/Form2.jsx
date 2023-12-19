const Form2 = () => {
  return (
    <div className="text-white px-10 md:px-[100px] mt-[30px]">
      <h1 className="font-bold text-[30px] text-center mb-5">Distribution</h1>

      <div className="flex justify-center item-center">
        <p className="w-[600px] text-center text-sm text-gray-400 pb-5">
          Set up how your coin should be initially distributed{" "}
        </p>
      </div>

      <div className="ring-4 p-5 rounded-xl ring-gray-700 mx-5">
        <div className="">
          <h1 className="pb-3">Team allocation</h1>
        </div>

        <div className=" w-[100%] flex flex-row items-center mb-5">
          {/* <label htmlFor="allocation" className="block text-sm mb-1">
         {isRequired && <span className="text-red-700 ">*</span>}
      </label> */}
          <input
            type="text"
            id="id"
            placeholder="placeholder"
            className="bg-[#262626] h-[40px] w-[100%] rounded-md px-3 ring-1 ring-gray-700 focus:outline focus:outline-[#3676E1]"
          />
          <div className="h-[35px] w-[35px] bg-slate-600 m-2 rounded-full items-center  p-5 text-center relative ">
            {/* <p className=" absolute top-[50%]">=</p> */}
          </div>
          <input
            type="text"
            id="id"
            placeholder="placeholder"
            className="bg-[#262626] h-[40px] w-[100%] rounded-md px-3 ring-1 ring-gray-700 focus:outline focus:outline-[#3676E1]"
          />
        </div>

        {/* <div className="my-5 w-full ">
          ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        </div> */}

        <div className="bg-[#262626] mt-14 mb-8 w-full p-0 border justify-center "></div>

        <div className="">
          <h1 className="pb-3">Team Supply address</h1>
        </div>
        <div className=" w-[100%] ">
          <input
            type="text"
            id="id"
            placeholder="placeholder"
            className="bg-[#262626] h-[40px] w-[100%] rounded-md px-3 ring-1 ring-gray-700 focus:outline focus:outline-[#3676E1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Form2;
