import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black w-full px-5 py-4 flex flex-col items-center justify-center border-dashed border-t border-gray-700">
      <div className="flex justify-center items-center mt-4 space-x-4  mt-4">
        <a
          href="https://github.com/sampada010"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sampada-tagalpallewar-00171625b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tagalpallewarsampada10@gmail.com"
          className="text-gray-500 hover:text-white duration-300"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
      <div className="mt-4 text-center">
        <p className="font-secondary font-semibold text-gray-400 text-md">
          Made with{" "}
          <span className="font-thin" role="img" aria-label="emoji">
            ❤️
          </span>{" "}
          by Sampada Tagalpallewar.
        </p>
      </div>
    </footer>
  );
}
