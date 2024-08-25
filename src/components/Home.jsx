import React from 'react';
import { motion } from 'framer-motion';
import myProfile from '../assets/sam2.jpg';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div name="Home" className="w-full min-h-auto grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-black via-black to-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="my-auto mx-16 px-5 flex flex-col justify-center h-full mt-16"
      >
        <h1 className="font-primary font-extrabold text-white text-4xl sm:text-5xl">
          Hey!
        </h1>
        <h1 className="mt-2 font-primary font-extrabold text-white text-4xl sm:text-5xl">
          I'm Sampada Tagalpallewar
        </h1>
        <div className="mt-4 font-primary font-bold font-medium hidden md:block text-cyan-500 text-2xl md:text-4xl">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .pauseFor(500)
                .deleteAll()
                .typeString("Front End Developer")
                .pauseFor(500)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <h1 className="mt-4 font-secondary font-normal text-gray-500 text-xl">
          I am an IT Undergraduate at Pune Institute of Computer Technology with a keen interest in Web Development, especially Frontend Development, and I’m constantly exploring new technologies.
        </h1>
        <div className="flex justify-center md:justify-start">
          <a
            href="./Sampada_Tagalpallewar_Resume.pdf"
            download="Sampada_Tagalpallewar_Resume.pdf"
            className="w-auto mt-8 text-center font-secondary hover:bg-cyan-500 hover:text-white font-semibold px-6 py-3 border-2 border-cyan-500 rounded transition duration-500 ease-in-out bg-transparent text-cyan-500 mb-2"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
      <div className="flex justify-center items-center">
        <motion.img
          src={myProfile}
          alt="Sampada Tagalpallewar"
          className="mt-10 rounded-2xl w-2/3 max-w-xs md:max-w-sm lg:max-w-md object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Home;
