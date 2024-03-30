import { useState, useEffect } from "react";
import { testimonials_data } from "../utils/constants";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

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

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeFeedbackIndex]);

  return (
    <div className="h-auto object-cover">
      <div className="flex flex-col bg-slate-950 opacity-90 text-white rounded-sm py-6">
        <div className="flex justify-center lg:mb-5 mb-3">
          <h1 className="text-red-600 md:text-2xl text-lg font-medium relative after:bg-yellow-300 after:absolute after:h-[0.5] after:w-0 
                after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-700 after:delay-200 after:ease-in-out 
                after:origin-center cursor-pointer"
          >
            Testimonials
          </h1>
        </div>
        <div className="flex items-center px-6">
          <button
            className="cursor-pointer text-white md:text-2xl text-lg"
            onClick={handlePreviousClick}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <div className="px-6">
            <div className="flex flex-col items-center">
              <p className="md:text-base text-sm text-center leading-3 lg:leading-4 mb-2 h-24 flex items-center justify-center">
                {testimonials_data[activeFeedbackIndex].feedback}
              </p>
              <p className="text-sm italic font-medium text-red-600">
                {" - "}
                {testimonials_data[activeFeedbackIndex].name}
              </p>
              <p className="text-sm italic">Customer</p>
            </div>
          </div>
          <button
            className="cursor-pointer text-white md:text-2xl text-lg"
            onClick={handleNextClick}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
