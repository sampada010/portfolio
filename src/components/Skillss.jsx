import React from 'react';
import Cpp from '../assets/c-logo.png';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactJs from '../assets/react.png';
import TailwindCss from '../assets/tailwind.png';
import MySql from '../assets/mysql.png';
import NodeJs from '../assets/node.png';
import ExpressJS from '../assets/expressjs.png';
import MongoDB from '../assets/mongo.png';
import Github from '../assets/github.png';
import Flutter from '../assets/flutter.png';

const Skillss = () => {
  const tech = [
    { id: 11, src: Cpp, title: 'C++', style: 'shadow-blue-800' },
    { id: 1, src: Html, title: 'HTML', style: 'shadow-orange-500' },
    { id: 2, src: Css, title: 'CSS', style: 'shadow-blue-500' },
    { id: 3, src: Javascript, title: 'Javascript', style: 'shadow-yellow-500' },
    { id: 4, src: Github, title: 'GitHub', style: 'shadow-gray-400' },
    { id: 12, src: Flutter, title: 'Flutter', style: 'shadow-sky-700' },
    { id: 5, src: NodeJs, title: 'Node JS', style: 'shadow-green-500' },
    { id: 6, src: MySql, title: 'MySQL', style: 'shadow-orange-500' },
    { id: 7, src: TailwindCss, title: 'Tailwind CSS', style: 'shadow-sky-500' },
    { id: 8, src: MongoDB, title: 'MongoDB', style: 'shadow-green-500' },
    { id: 9, src: ExpressJS, title: 'Express JS', style: 'shadow-gray-400' },
    { id: 10, src: ReactJs, title: 'React JS', style: 'shadow-blue-500' },
  ];

  return (
    <div name="Skills" className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-auto gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-12 py-6 sm:py-8px-16 lg:px-12">
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col justify-center w-full h-full">
        <div>
          <div className="text-4xl md:text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Skills</span>
          </div>
          <p className="text-2xl text-white py-6 font-bold">TECHNOLOGIES I'VE WORKED WITH</p>
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {
            tech.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex justify-center items-center`}>
                <img src={src} alt={title} className="max-w-full max-h-48 object-cover" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Skillss;
