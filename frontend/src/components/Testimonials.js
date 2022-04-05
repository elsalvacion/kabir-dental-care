import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive, testimonials } from "../constants/general";

const Testimonials = () => {
  return (
    <div className="bg-white py-14">
      <h1 className="text-center my-5 text-4xl font-semibold">Testimonials</h1>
      <h2 className="text-center mb-3">What our patients say about us?</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1500}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={[
          "tablet",
          "mobile",
          "desktop",
          "superLargeDesktop",
        ]}
        pauseOnHover={true}
        centerMode={true}
        className="items-stretch"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="p-4 h-full w-11/12 m-auto bg-gray-50 rounded-md shadow-lg flex items-center flex-col"
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
      </Carousel>
    </div>
  );
};

export default Testimonials;
