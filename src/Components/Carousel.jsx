import React, { useState } from "react";
const Carousel = (props) => {
  let [currentSlide, changeSlide] = useState(0);
  return (
    <div className="border-dashed border-2 border-light-blue-500 my-10 w-full md:w-3/4 p-3 md:p-10">
      <div className="relative bg-blue-100 h-96 p-10 overflow-auto">
        {props.slides.map((el, index) => (
          <div
            key={index}
            className={`absolute left-1 top-1 md:left-10 md:top-10 transition duration-300 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="font-black">{el.title}</h2>
            <img
              className={`w-24 h-auto w-full ${el.image ? "block" : "hidden"}`}
              src={el.image}
              alt=""
            />
            <p>{el.text}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        {props.slides.map((el, index) => (
          <div key={index} className="cursor-pointer m-2">
            <div
              onClick={() => changeSlide(index)}
              className={`' block w-4 h-4 rounded-full ${
                index === currentSlide ? "bg-blue-700" : "bg-blue-300"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
