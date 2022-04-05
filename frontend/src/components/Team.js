import React from "react";
import { Zoom } from "react-reveal";
import { teams } from "../constants/general";
const Team = () => {
  return (
    <div className="bg-white py-10" id="doctors">
      <h1 className="text-center mb-10 text-4xl font-semibold">
        Your <span className="font-thin">Doctors</span>
      </h1>
      <div className="flex flex-col items-center md:flex-row">
        {/* left */}
        <div className="flex-1 md:pl-6 text-center mb-7 md:mb-0">
          <Zoom>
            <img
              src="/assets/img/main-doctor.jpg"
              alt="MOHAMMAD AHASAN KABIR
"
              className="w-72 h-72 rounded-full border-8 border-pink-500 mx-auto mb-6 object-cover"
            />
          </Zoom>
          <h2 className="font-semibold text-3xl text-center mb-1">
            Dr. MD. AHASAN KABIR
          </h2>
          <p>Consultant Dental Surgeon</p>
        </div>
        {/* right */}
        <div className="flex-1 py-7 px-3 flex justify-center flex-wrap">
          {teams.map((team) => (
            <div key={team.id} className="mb-5 text-center mx-3">
              <Zoom>
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-32 h-32 rounded-full border-2 border-pink-500 mx-auto mb-6 object-cover"
                />
              </Zoom>
              <h2 className="font-semibold text-2xl text-center mb-1">
                {team.name}
              </h2>
              <p>Consultant Dental Surgeon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
