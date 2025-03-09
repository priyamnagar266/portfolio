import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BCA Student",
          "Software Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Graphic Designer",
          "Game enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
