import React from "react";
import "./Showcase.css";
import Zoom from "react-reveal/Zoom";

const Showcase = () => {
  return (
    <div className="showcaseContainer" id="home">
      <div className="showcaseOverlay">
        <div className="text-gray-50 flex-1">
          <h1 className=" text-2xl font-semibold md:text-5xl mb-5">
            Kabir's Dental Care
          </h1>
          <p className="mb-5">
            At Kabir's Dental care we say, Think mouth and think health. We have
            qualified doctors that will give you the smile your deserve. It is
            never too late to start.
          </p>
          <br />
          <Zoom>
            <a
              href="#appointment"
              className="p-3 md:py-5 md:px-5 bg-pink-500 text-gray-100 rounded hover:bg-pink-700"
            >
              MAKE AN APPOINTMENT
            </a>
          </Zoom>
        </div>
        <div className="flex-1 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Showcase;
