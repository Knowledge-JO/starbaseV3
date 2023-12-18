/* eslint-disable react/prop-types */
import InputFeature from "../InputFeature";
import InputSlider from "../InputSlider";

const Form4 = ({state, dispatch}) => {
  return (
    <div className="text-white px-10 md:px-[100px] mt-[30px]">
      <h1 className="font-bold text-[30px] text-center">Taxes</h1>
      <div className="flex justify-center item-center">
        <p className="w-[600px] text-center text-sm text-gray-400">Enable buy/sex tax on each trade</p>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center md:w-fit bg-[#262626] md:px-20 py-8 rounded-xl mt-5 ">
          <div className="w-full min-[600px]:w-fit px-2">
            <InputFeature feature={"Buy Tax"} label={"Tax taken for token buy"} state={state.buyTaxSlide}> 
              <InputSlider state={state.buyTaxSlide} dispatch={dispatch} type="buyTaxSlide"/> 
            </InputFeature>
            <InputFeature feature={"Sell Tax"} label={"Tax taken for token sell"} state={state.sellTaxSlide}>
              <InputSlider state={state.sellTaxSlide} dispatch={dispatch} type="sellTaxSlide"/> 
            </InputFeature>
            <InputAddress state={state.sellTaxSlide || state.buyTaxSlide}/>
          </div>
        </div>
      </div>
    </div>
  );
};


const InputAddress = ({state}) => {
  return (
    <div className={`${state ? "h-[120px] border-2 md:border-2 border-white/40": "h-0 border-none"}  rounded-lg w-full min-[600px]:w-[400px] px-4 min-[400px]:px-8 py-3 text-[12px] md:text-base transition-height duration-300`}>
      <div className={`${state ? "block": "hidden"}`}>
        <div className="flex justify-between items-center mb-2">
          <p>Tax Payout Address</p>
        </div>
        <input className={`bg-[#262626] h-[40px] w-[100%] rounded-md px-3 ring-1 ring-gray-700 focus:outline focus:outline-red-500`} type="text" id="max-token"/>
      </div>
    </div>
  )
}

export default Form4;
