import React, { useState } from 'react'

import { Link } from 'react-scroll'

import { GiTwoHandedSword } from 'react-icons/gi'
import { MdMenu } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

const [nav, setNav] = useState(false)


  return (
    <div className='max-w-[1440px] w-full z-50 absolute top-0 bg-transparent '>
      <div className='flex justify-between items-center px-8 py-4'>
        <div>
          {/* Brand */}

          <div className='flex relative text-white py-2 hover:text-[var(--accent)] hover:scale-105 cursor-pointer ease-in duration-300 group '>
            <GiTwoHandedSword size={30} className='absolute rotate-45 left-5 group-hover:rotate-90 group-hover:text-purple-800 ease-in-out duration-500'/>
            <p className='title text-3xl mr-2 mt-[-5px]'>D</p>
            <p className='title text-3xl ml-3 mt-[8px] ease-in duration-100'>B</p>
          </div>
        </div>
        <div className='flex items-center'>
          {/* Links/Button */}
          <ul className='text-white hidden md:flex'>
            <li className='mx-5 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer font-bold'><Link to='about' smooth={true}>
            About
            </Link></li>
            <li className='mx-5 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer font-bold'><Link to='features' smooth={true}>
            Features
            </Link></li>
            <li className='mx-5 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer font-bold'><Link  to='releases' smooth={true}>
            Releases
            </Link></li>
            <li className='mx-5 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer font-bold'><Link to='downloads' smooth={true}>
            Downloads
            </Link></li>
            <li className='mx-5 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer font-bold'><Link to='contact' smooth={true}>
            Contact
            </Link></li>
          </ul>
          <Link to='downloads' smooth={true}><button className='text-white border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 rounded-sm md:ml-8 hover:bg-black hover:text-[var(--accent)] ease-in duration-200'>Download</button></Link>
        </div>
        <div className='flex md:hidden text-white'>
          {/* mobile menu */}
          <div className='z-50'>
            {nav 
            ? (<AiOutlineClose className='fixed top-7 right-8 cursor-pointer z-50' onClick={() => setNav(!nav)} size={40}/>) 
            : (<MdMenu className='cursor-pointer z-50' onClick={() => setNav(!nav)} size={40}/>)}

          </div>
          <div className={nav ? 'fixed w-full h-screen bg-black/80 left-0 top-0 ease-in duration-200 z-40' : 'fixed w-full h-screen bg-black/50 left-[-100%] top-0 ease-in duration-200 z-40'}>
            <ul className='text-white text-center py-20'>
              <li className='m-10 text-5xl font-bold hover:scale-125 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer'><Link to='about' smooth={true} onClick={() => setNav(!nav)}>About</Link></li>
              <li className='m-10 text-5xl font-bold hover:scale-125 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer'><Link to='features' smooth={true} onClick={() => setNav(!nav)}>Features</Link></li>
              <li className='m-10 text-5xl font-bold hover:scale-125 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer'><Link to='releases' smooth={true} onClick={() => setNav(!nav)}>Releases</Link></li>
              <li className='m-10 text-5xl font-bold hover:scale-125 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer'><Link to='downloads' smooth={true} onClick={() => setNav(!nav)}>Downloads</Link></li>
              <li className='m-10 text-5xl font-bold hover:scale-125 hover:text-[var(--accent)] ease-in duration-200 cursor-pointer'><Link to='contact' smooth={true} onClick={() => setNav(!nav)}>Contact</Link></li>
              <Link to='downloads' smooth={true} onClick={() => setNav(!nav)}><button className='text-white border border-[var(--accent)] bg-[var(--accent)] px-20 py-3 rounded-sm md:ml-8 hover:bg-black hover:text-[var(--accent)] ease-in duration-200'>Download</button></Link>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar