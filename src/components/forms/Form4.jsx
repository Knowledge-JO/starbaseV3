/* eslint-disable react/prop-types */
import InputFeature from "../InputFeature";
import InputSlider from "../InputSlider";
import InputAddress from "../InputAddress";

const Form4 = ({ state, dispatch }) => {
  return (
    <div className="text-white px-10 md:px-[100px] mt-[30px]">
      <h1 className="font-bold text-[30px] text-center">Taxes</h1>
      <div className="flex justify-center item-center">
        <p className="w-[600px] text-center text-sm text-gray-400">
          Enable buy/sell tax on each trade
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center md:w-fit md:px-20 py-8 rounded-xl mt-5 ">
          <div className="w-full min-[600px]:w-fit px-2">
            <InputFeature
              feature={"Buy Tax"}
              label={"Tax taken for token buy"}
              state={state.buyTaxSlide}
            >
              <InputSlider
                state={state.buyTaxSlide}
                dispatch={dispatch}
                type="buyTaxSlide"
              />
            </InputFeature>
            <InputFeature
              feature={"Sell Tax"}
              label={"Tax taken for token sell"}
              state={state.sellTaxSlide}
            >
              <InputSlider
                state={state.sellTaxSlide}
                dispatch={dispatch}
                type="sellTaxSlide"
              />
            </InputFeature>
            <InputAddress
              label={"Tax Payout Address"}
              state={state.sellTaxSlide || state.buyTaxSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form4;
