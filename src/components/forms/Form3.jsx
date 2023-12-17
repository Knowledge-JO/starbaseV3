import { useState } from "react";

const Form3 = () => {
  return (
    <div className="text-white px-10 md:px-[100px] mt-[30px]">
      <h1 className="font-bold text-[30px] text-center">ANTI-BOT</h1>
      <div className="flex justify-center item-center">
        <p className="w-[600px] text-center text-sm text-gray-400">Enable these features if you want to protect your token launch from bots and snipers. You can not change these settings after contract has been renounced</p>
      </div>

     <div className="flex justify-center items-center">
        <div className="w-full flex justify-center items-center md:w-fit bg-[#262626] md:px-20 py-8 rounded-xl mt-5 ">
          <div className="w-full min-[600px]:w-fit px-2">
            <AnitBotFeature feature={"Limit per wallet"} label={"Max tokens per wallet"}/>
            <AnitBotFeature feature={"Max per transaction"} label={"Max tokens per trade"}/>
            <SniperAutoBurnFeature feature={"Sniper auto-burn"}/>
          </div>
        </div>
      </div>
    </div>
  );
};


// eslint-disable-next-line react/prop-types
const SniperAutoBurnFeature = ({feature}) => {
  const [sliderState, setSliderState] = useState(false)
  const handleSlider = () => {
    setSliderState(slider => !slider)
  }
  return (
    <div className="border-2 border-white/40 md:border-2  mb-3 rounded-lg w-full min-[600px]:w-[400px] px-4 min-[400px]:px-8 py-3 text-[12px] md:text-base">
      <div className="flex justify-between items-center">
        <p>{feature}</p>
        <Slider sliderState={sliderState} onHandleSlide={handleSlider} />
      </div>
      <div className={`${sliderState ? "h-auto" : "h-0"} transition-height duration-300 mt-3 mb-3`}>
        <p className={`${sliderState?"block":"hidden"}`}>
        Sniper auto-burn is enabled and will add an additional 20% tax on buys in the first block, reducing to 13.33% in the second block, 6.66% in the third, and finally 0% from the fourth block on.
        The proceeds from the anti-snipe tax are immediately burned, reducing your total supply. You will not generate additional revenue from this tax and should only use this feature to deter sniping.
        </p>
      </div>
    </div>
  )
}


// eslint-disable-next-line react/prop-types
const AnitBotFeature = ({feature, label}) => {
  const [sliderState, setSliderState] = useState(false)
  const handleSlider = () => {
    setSliderState(slider => !slider)
  }
  return (
    <div className="border-2 border-white/40 md:border-2  mb-3 rounded-lg w-full min-[600px]:w-[400px] px-4 min-[400px]:px-8 py-3 text-[12px] md:text-base">
      <div className="flex justify-between items-center">
        <p>{feature}</p>
        <Slider sliderState={sliderState} onHandleSlide={handleSlider} />
      </div>
      <div className={`${sliderState ? "h-20" : " h-0"} transition-height duration-300 mt-3 mb-3`}>
        <label htmlFor="max-token" className={`${sliderState ? "block": "hidden"} text-sm ml-3 mb-1`}>{label}</label>
        <input className={`${sliderState ? "block": "hidden"} bg-[#262626] h-[40px] w-[100%] rounded-md px-3 ring-1 ring-gray-700 focus:outline focus:outline-red-500`} type="number" id="max-token"/>
        <span className="bg-white"></span>
      </div>
    </div>
  )
}


// eslint-disable-next-line react/prop-types
const Slider = ({first="OFF", second="ON", sliderState, onHandleSlide}) => {
  
  return (
    <div>
      <label className="relative inline-block h-7 w-[70px] ">
        <input type="checkbox" className="peer w-0 h-0 opacity-0" value={sliderState} checked={sliderState} onChange={onHandleSlide}/>
        <span className="absolute inset-x-0 inset-y-0 cursor-pointer bg-black rounded-lg transition before:transition before:rounded-lg before:content-[''] before:absolute before:h-full before:w-8 before:left-0  before:duration-400 before:bg-red-500 peer-checked:before:translate-x-[38px]  flex justify-around items-center"><p className="text-white z-10 text-sm pr-2">{first}</p><p className="text-white z-10 text-sm pr-1">{second}</p></span>
      </label>
    </div>
  )
}

export default Form3;
