import React from 'react'

import { MdAccessTimeFilled, MdOutlineDateRange } from 'react-icons/md'

import chapterOneImage from '../img/screen_9.png'
import chapterTwoImage from '../img/screen_11.png'
import EpisodeCarousel from './EpisodeCarousel'

const Releases = () => {
  return (
    <div name='releases' className='max-w-[1440px] py-24 bg-[var(--bg-tan)]'>
        <div className='w-full h-full'>
        <div className='text-center py-6'>
            <h1 className='text-black'>Releases </h1>
            <hr className='border border-black mx-auto w-32 my-4'/>

            </div>

            {/* <EpisodeCarousel /> */}

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

            <div className='text-center group flex flex-col justify-center items-center'>
            <h1 className='text-2xl'>Chapter One</h1>
            <hr className='my-6 w-32 border border-gray-800/20'/>
            <div className=''>
                <img className='max-w-[440px] md:max-w-[540px] object-contain rounded-xl' src={chapterOneImage} alt="" />
            </div>
            <div className=''>
                  <h2 className='text-2xl font-semibold'>Farwater</h2>
                    <p className='flex items-center justify-left'>
                      <MdAccessTimeFilled className='mr-2'/>
                      30min
                    </p>
                    <p className='flex items-center justify-left'>
                      <MdOutlineDateRange className='mr-2'/>
                      Jan 2023
                    </p>
                </div>
        </div>
        
        <div className='text-center group flex flex-col justify-center items-center'>
            <h1 className='text-2xl'>Chapter Two</h1>
            <hr className='my-6 w-32 border border-gray-800/20'/>

            <div className=''>
                <img className='max-w-[440px] md:max-w-[540px] object-contain' src={chapterTwoImage} alt="" />
                </div>

                <div className=''>
                  <h2 className='text-2xl font-semibold'>The Coastal Road</h2>
                    <p className='flex items-center justify-left'>
                      <MdAccessTimeFilled className='mr-2'/>
                      1 Hour
                    </p>
                    <p className='flex items-center justify-left'>
                      <MdOutlineDateRange className='mr-2'/>
                      <span className='font-semibold'>Coming Soon!</span>
                    </p>
                </div>


        </div>
        </div>
        </div>
        </div>
        

  )
}

export default Releases