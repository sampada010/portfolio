import React from 'react'
import CareerMate from '../assets/careerMate.png'
import aws from '../assets/aws.png'
import Portfolio from '../assets/portfolio.png'

const Projects = () => {
    const project = () => [
        {
            id: 1,
            src: CareerMate,
            link: 'https://github.com/Arya2917/CareerMate',
        },
        {
            id: 2,
            src: aws,
            link: 'https://github.com/Cloud-Club-PICT',
        },
        {
            id: 3,
            src: Portfolio,
            link: '#',
        }
    ]

    return (
        <div name='Projects' className="w-full min-h-auto bg-gradient-to-b from-gray-800 to-black gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
            <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full">
                <div className="pb-8">
                    <div className="text-4xl md:text-5xl font-extrabold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500"> Projects</span>
                    </div>
                    <p className="text-2xl text-white py-6 font-bold">CHECK OUT</p>
                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center pb-2 px-12 sm:px-0">
                    {
                        project().map(({ id, src, link }) => (
                            <div key={id} className="shadow-md shadow-cyan-500 rounded-lg">
                                <img src={src} alt="Portfolio" className="rounded-md duration-300 hover:scale-105" />
                                <div className="flex justify-center text-white font-semibold">
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        <button className="px-6 py-1 border-2 border-cyan-500 rounded transition duration-300 ease-in-out bg-transparent m-2">Code</button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Projects