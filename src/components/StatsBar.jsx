import React from 'react'

import CountUp from 'react-countup';

import { GiRibbonShield } from 'react-icons/gi'

const StatsBar = () => {

  return (
    <div className=' bg-black'>
        <div className='w-full max-h-[540px]'>
            <div className='grid grid-cols-2 md:grid-cols-4 px-12 py-12 md:py-18'>
                <div className='text-white my-12 flex flex-col justify-center items-center'>
                    <CountUp className='text-5xl z-40' enableScrollSpy={true} end={65} />
                    <p className='z-40 font-semibold'>Characters</p>
                    <GiRibbonShield className='motion-reduce:animate-pulse text-[var(--accent)] mt-[-125px] z-10' size={200}/>
                </div>
                <div className='text-white my-12 flex flex-col justify-center items-center'>
                    <CountUp className='text-5xl z-40' enableScrollSpy={true} end={350} />
                    <p className='z-40 font-semibold'>Lines of Dialogue</p>
                    <GiRibbonShield className='text-[var(--accent)] mt-[-125px] z-10' size={200}/>
                </div>
                <div className='text-white my-12 flex flex-col justify-center items-center'>
                    <CountUp className='text-5xl z-40' enableScrollSpy={true} end={35} />
                    <p className='z-40 font-semibold'>Handcrafted Maps</p>
                    <GiRibbonShield className='text-[var(--accent)] mt-[-125px] z-10' size={200}/>
                </div>
                <div className='text-white my-12 flex flex-col justify-center items-center'>
                    <div className='flex items-center'>
                        <CountUp className='text-5xl z-40' enableScrollSpy={true} end={550} /><p className='text-4xl z-40'>+</p>
                        </div>
                    <p className='z-40 font-semibold'>Unique Items</p>
                    <GiRibbonShield className='text-[var(--accent)] mt-[-125px] z-10' size={200}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default StatsBar