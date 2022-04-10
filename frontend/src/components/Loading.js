import React from "react";
import "./Loading.css";
const Loading = ({ text }) => {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-center bg-black/90 z-50">
      {/* loader */}
      <div className="lds-hourglass"></div>
      {/* text */}
      <h2 className="text-3xl uppercase">{text}</h2>
    </div>
  );
};

export default Loading;
