import FormCounter from "./forms/FormCounter";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import Form4 from "./forms/Form4";
import Button from "./Button";
import { useReducer, useState } from "react";
// import Success from "./forms/Success";

// create useReducer hook here to manage state for the entire form so as to prevent clearing of state when a form component is unmounted.

const initialState = {
  sliderState1: false,
  sliderState2: false,
  sliderState3: false,
  sliderState4: false,
  buyTaxSlide: false,
  sellTaxSlide: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "slider1":
      return { ...state, sliderState1: !state.sliderState1 };
    case "slider2":
      return { ...state, sliderState2: !state.sliderState2 };
    case "slider3":
      return { ...state, sliderState3: !state.sliderState3 };
    case "slider4":
      return { ...state, sliderState4: !state.sliderState4 };
    case "buyTaxSlide":
      return { ...state, buyTaxSlide: !state.buyTaxSlide };
    case "sellTaxSlide":
      return { ...state, sellTaxSlide: !state.sellTaxSlide };

    default:
      return initialState;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const totalSteps = 4;
  const [currStep, setCurrStep] = useState(1);

  const handelNextStep = () => {
    if (currStep < totalSteps) setCurrStep((currStep) => currStep + 1);
  };

  const handlePreviousStep = () => {
    if (currStep > 1) setCurrStep((currStep) => currStep - 1);
  };

  return (
    <div className="mb-10">
      <FormCounter currStep={currStep} />
      {currStep == 1 && <Form1 />}
      {currStep == 2 && <Form2 state={state} dispatch={dispatch} />}
      {currStep == 3 && <Form3 state={state} dispatch={dispatch} />}
      {currStep == 4 && <Form4 state={state} dispatch={dispatch} />}
      {/* {currStep == 5 && <Success />} */}
      <Button
        onNextStep={handelNextStep}
        onPreviousStep={handlePreviousStep}
        currStep={currStep}
      />
    </div>
  );
};

export default Form;
