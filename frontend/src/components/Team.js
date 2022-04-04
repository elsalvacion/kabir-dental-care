import React from "react";
import { Zoom } from "react-reveal";
const Team = () => {
  const teams = [
    {
      id: 1,
      name: "Dr. Zahir",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
    },

    {
      id: 3,
      name: "Dr. Male",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
  ];
  return (
    <div className="bg-white py-10 ">
      <h1 className="text-center mb-10 text-4xl font-semibold">
        Your <span className="font-thin">Doctors</span>
      </h1>
      <div className="flex flex-wrap">
        {/* left */}
        <div className="flex-1 pl-12 text-center">
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
        <div className="flex-1 py-7 px-3 flex flex-wrap">
          {teams.map((team) => (
            <div className="flex-1 mb-5 text-center">
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
