import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alieu Keita",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      testimony: `
      They have the best service.
      `,
    },
    {
      id: 2,
      name: "Zaks",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      testimony: `
      Comfortable place, best doctors and nice people.
      `,
    },
    {
      id: 3,
      name: "STEPS",
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      testimony: `
      I had fun with the AC last time.
      `,
    },
    {
      id: 4,
      name: "TUMPSTER",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      testimony: `
      I needed a relief from my toothache and KDC provided it. 
      `,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
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
          <div className="p-4 h-full w-11/12 m-auto bg-gray-50 rounded-md shadow-lg flex items-center flex-col">
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
