import React from 'react';
import Me from '../img/hero.JPG';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Button, Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import {HiDocumentDownload} from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" 
    className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full' style={{margin:'0 0 -200px 0'}}>
            <h2 className='text-xl sm:text-4xl font-bold text-cyan-300' >
                I'm Alex John &#128516;
                <Typewriter
                options={{
                    strings: [
                        "Junior Software Engineer"
                    ],
                    changeDelay: 3,
                    changeDeleteSpeed: 2,
                    autoStart: true,
                    loop:{Infinity}
                }} />
            </h2>
            <p className='text-green-500 py-4 max-w-md sm:max-w-sm'>
                Working in Cognizant Softvision in Makati City, Philippines
            </p>

            <div>
                <a href='/Alex Resume.pdf' className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
                bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer mb-10'>
                    Resume
                    <span className='group-hover:rotate-0 duration-300'>
                    <HiDocumentDownload size={20} className="ml-1" />
                    </span>
                </a>
            </div>
        </div>

            <div className='flex justify-center items-center pb-5' >
                <img src={Me} alt="my profile" className='flex items-center justify-center shadow-md shadow-red-500 w-52 h-52 md:w-96 md:h-96 md:ml-12' style={{borderRadius:'50%'}}/>
            </div>
        </div>
    </div>
  )
}

export default Home