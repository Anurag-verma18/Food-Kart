import { useState } from "react";
import { testimonials_data } from "../utils/constants";

const Testimonials = () => {
  const [activeFeedbackIndex, setActiveFeedbackIndex] = useState(0);

  const handlePreviousClick = () => {
    setActiveFeedbackIndex(
      !activeFeedbackIndex
        ? testimonials_data.length - 1
        : activeFeedbackIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveFeedbackIndex(
      (activeFeedbackIndex + 1) % testimonials_data.length
    );
  };

  return (
    <div className="w-1/2 h-[70%] ml-24 mr-12 relative top-96">
      <div className="flex flex-col bg-slate-950 opacity-90 text-white rounded-sm py-6">
        <div className="flex justify-center mb-8">
          <h1
            className=" 
                text-red-600 text-2xl font-medium relative after:bg-yellow-300 after:absolute after:h-[0.5] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 after:ease-in-out after:origin-center cursor-pointer"
          >
            Testimonials
          </h1>
        </div>
        <div className="flex items-center px-6">
          <button className="cursor-pointer" onClick={handlePreviousClick}>
            P
          </button>
          <div className="px-6">
            <div>
              <p className="text-sm mb-2">{testimonials_data[activeFeedbackIndex].feedback}</p>
              <p className="text-md italic text-red-600">
                {" - "}
                {testimonials_data[activeFeedbackIndex].name}
              </p>
              <p className="text-sm italic">Customer</p>
            </div>
          </div>
          <button className="cursor-pointer" onClick={handleNextClick}>
            N
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
