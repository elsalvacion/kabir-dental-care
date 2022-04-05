import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { testimonials } from "../constants/general";

const HorizontalScrollMenu = () => {
  return (
    <div className="bg-white py-14">
      <h1 className="text-center my-5 text-4xl font-semibold">Testimonials</h1>
      <h2 className="text-center mb-3">What our patients say about us?</h2>
      <ScrollMenu>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-4 h-full w-72 md:w-80 m-2  bg-gray-50 rounded-md shadow-lg flex items-center flex-col"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-32 h-32 rounded-full object-cover mb-5"
            />
            <div className="">
              <h2 className="uppercase mb-2 text-xl">{testimonial.name}</h2>
              <p>{testimonial.testimony}</p>
            </div>
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScrollMenu;
