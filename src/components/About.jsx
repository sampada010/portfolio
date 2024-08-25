import React from 'react';
import aboutImage from '../assets/about-image.png';

const About = () => {
  return (
    <div name="About" className="w-full min-h-auto bg-gradient-to-b from-gray-800 to-black flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
      {/* Image Section */}
      <div className="hidden lg:flex flex-1 justify-center items-center">
        <img
          src={aboutImage}
          alt="about profile"
          className="rounded-2xl w-2/3 max-w-xs md:max-w-md lg:max-w-md object-cover"
        />
      </div>
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center text-white lg:ml-8">
        <div className="text-4xl md:text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            About me
          </span>
        </div>
        <p className="text-xl mt-4 sm:text-lg">
          I am a pre-final year IT undergraduate at Pune Institute of Computer Technology, interested in Web Development and currently exploring new technologies.
        </p>
        <br />
        <p className="text-xl sm:text-lg">
          I blend my technical skills with creativity, writing poems and articles while staying up-to-date with new technologies. <br />A fast learner, natural leader, and dedicated team player, I bring enthusiasm and a committed approach to all my projects.
        </p>
      </div>
    </div>
  );
}

export default About;
