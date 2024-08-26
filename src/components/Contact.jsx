import React from 'react'
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div name="Contact" className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-auto text-white gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
            <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <div className="text-4xl md:text-5xl font-extrabold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Contact</span>
                    </div>
                    <p className="text-2xl py-6 font-bold">Get in touch with me!</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/agdyzodb" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder='Your good name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
                        <input type="text" name="email" placeholder='Your email-id' className='p-2 bg-transparent border-2 rounded-md focus:outline-none my-4'/>
                        <textarea name="message" rows="10" placeholder='Hey, I would like to connect with you.' className='p-2 bg-transparent border-2 rounded-md focus:outline-none'></textarea>
                        <button className='bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Let's Connect</button>
                    </form>
                </div>

                
            </div>
        </div>
    )
}

export default Contact
