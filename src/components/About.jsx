import React from 'react'

import aboutImage1 from '../img/screenshot_1.png'
import aboutImage2 from '../img/screenshot_2.png'
import aboutImage3 from '../img/screenshot_3.png'

import aboutImageMain from '../img/Tiirn_map.jpeg'

const About = () => {
  return (
    <div name='about' className='py-24 bg-[var(--bg-tan)]'>
      <div className='w-full h-full px-4 md:px-12'>

        <div className='flex-cols md:flex justify-around'>
        <img src={aboutImageMain} className="max-h-[500px] rounded-md shadow-xl" alt="" />
          <div className='text-center py-2 mx-12'>
            <h1 className='title pt-12 md:pt-0'>Welcome </h1>
            <p className='text-gray-600'>To the world of Tiirn</p>
            <div>
              <p className='text-gray-600 pt-12 text-left text-2xl leading-relaxed tracking-wide'><span className='text-4xl'>I</span>t's the fourth era</p>
            <p className='text-gray-600 pt-4 text-left leading-relaxed tracking-wide'> Many are calling it 'The Lost Era', while others are proundly proclaiming it's 'The Era of Might'. Following a  bloody war against exiled gods, the world remains in a delicate balance between survival and extinction. An empire and a handful of kingdoms fell either during, after, of because of the war. In the century that followed, violent invasions and struggles to fill the gaps in power have carved out much of the landscape, changing the world for many who knew it before.</p>
            <p className='text-gray-600 pt-4 text-left leading-relaxed tracking-wide'>
              A kid from a small village on the edge of existence is pulled by both strands of fate and a long dead ancestral spectre and thrust into being the savior of all of humanity. It's a time to be lost, but it is also a time for might. It's a time for <span className='font-bold'>Dragon Blade</span>.
            </p>
          </div>
          </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-12'>

          <div className='text-center group mt-4 md:hover:mt-[18px] md:hover:bg-gray-100 ease-in duration-200 my-2 rounded-md py-6'>
            <img src={aboutImage2} className='group-hover:scale-105 ease-in duration-300' alt="" />
            <div className='px-12'>
              <h1 className='pb-4 h-24'>Modern Classic Style</h1>
            <p className='font-light'>The same styles that you grew up on.</p>
            </div>
          </div>

          <div className='text-center group mt-4 md:hover:mt-[18px] md:hover:bg-gray-100 ease-in duration-200  my-2 rounded-md py-6'>
            <img src={aboutImage1} className='group-hover:scale-105 ease-in duration-300' alt="" />
            <div className='px-12'>
              <h1 className='pb-4 h-24'>Open World</h1>
            <p className='font-light'>Always Open. Always World?</p>
            </div>
          </div>

          <div className='text-center group mt-4 md:hover:mt-[18px] md:hover:bg-gray-100 ease-in duration-200  my-2 rounded-md py-6'>
            <img src={aboutImage3} className='group-hover:scale-105 ease-in duration-300' alt="" />
            <div className='px-12'>
              <h1 className='pb-4 h-24'>It's About the Journey</h1>
            <p className='font-light'>Join the quest. Make new friends. Save the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
