import React from 'react'


import heroImg from '../img/Group_photo.png'

import { Link } from 'react-scroll'


const Hero = () => {
  return (
    <div className='relative h-screen bg-black hero-bg-1 bg-fixed bg-cover bg-top bg'>


          <div className="absolute  bottom-24 flex-col  text-left px-6 z-40 md:ml-12">
                    <h1 className="text-[var(--accent)] text-6xl md:text-8xl title">Dragon<br /> Blade</h1>
                    <p className="text-gray-300 text-2xl">The Legend of the Seven Stones</p>
                    <p className="text-gray-300 text-sm font-semi-bold">An Indie Rpg</p>
                    <Link to='downloads' smooth={true} >
                      <button className='text-white mt-3 border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 rounded-sm hover:bg-transparent hover:text-[var(--accent)] ease-in duration-200 mr-3'>Download</button>
                    </Link>

                </div>
          <div className='w-full h-full bg-black/50 z-0'></div>

    </div>
  )
}

export default Hero
