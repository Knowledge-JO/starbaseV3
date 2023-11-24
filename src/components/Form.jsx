import FormCounter from "./forms/FormCounter";
import Form1 from "./forms/Form1";
import Form2 from "./forms/Form2";
import Form3 from "./forms/Form3";
import Form4 from "./forms/Form4";
import Button from "./Button";
import { useState } from "react";
// import Success from "./forms/Success";

const Form = () => {
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
      {currStep == 2 && <Form2 />}
      {currStep == 3 && <Form3 />}
      {currStep == 4 && <Form4 />}
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
