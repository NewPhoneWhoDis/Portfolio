import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              Über mich
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hallo, ich bin Kristiyan, schön, dich kennenzulernen. Bitte sieh
              dich einfach um.
            </p>
          </div>
          <div>
            <p>
              Meine Leidenschaft ist es, hervorragende Software zu entwickeln,
              die das Leben der Menschen um mich herum verbessert. Meine
              Interessen außerhalb der Universität sind: Webentwicklung,
              Kryptowährungen, Kryptographie, Entwicklung dezentraler
              Anwendungen auf der Blockchain und die Teilnahme an verschiedenen
              körperlichen Aktivitäten wie Joggen, Wandern oder ins
              Fitnessstudio gehen. Ich spiele auch gerne Videospiele oder lese
              Bücher über Software Engineering und die Entwicklung von Soft
              Skills!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
