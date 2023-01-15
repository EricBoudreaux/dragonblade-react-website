import React from 'react'
import { GiBookmarklet,
         GiCargoCrane,
         GiPaintRoller,
         GiCrossedSwords,
         GiTreasureMap,
         GiExtraTime

 } from 'react-icons/gi'

const Features = () => {
  return (
    <div name='features' className='max-w-[1440px] py-24 feature-bg bg-no-repeat bg-cover bg-center bg-fixed relative'>
        <div className='w-full h-full px-4 md:px-12'>


            <div>
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 text-white gap-20 md:gap-32 px-8'>

                    <div className='text-center z-40'>
                        <div className='flex justify-center items-center w-12 h-12 p-2 group rotate-45 hover:rotate-[225deg] hover:scale-125 ease-in duration-300 bg-[var(--accent)] mb-6 mx-auto'>
                        <GiBookmarklet className='rotate-[315deg] group-hover:rotate-[120deg]  ease-in duration-300' size={30}/>
                        </div>
                        <h2 className='text-2xl'>Original Storytelling</h2>
                        <p className='text-white'>Everything's written by me, the author.</p>
                    </div>


                    
                    <div className='text-center z-40'>
                        <div className='flex justify-center items-center w-12 h-12 p-2 group rotate-45 hover:rotate-[225deg] hover:scale-125 ease-in duration-300 bg-[var(--accent)] mb-6 mx-auto'>
                        <GiPaintRoller className='rotate-[315deg] group-hover:rotate-[120deg]  ease-in duration-300' size={30}/>
                        </div>
                        <h2 className='text-2xl'>Retro Graphics</h2>
                        <p className='text-white'>To really give that classic 8bit feel. Thanks to <a href='https://www.patreon.com/finalbossblues/'>finalbossblues's </a> 
                        timefantasy artwork</p>
                    </div>

                    <div className='text-center z-40'>
                        <div className='flex justify-center items-center w-12 h-12 p-2 group rotate-45 hover:rotate-[225deg] hover:scale-125 ease-in duration-300 bg-[var(--accent)] mb-6 mx-auto'>
                        <GiCrossedSwords className='rotate-[315deg] group-hover:rotate-[120deg]  ease-in duration-300' size={30}/>
                        </div>
                        <h2 className='text-2xl'>Classic Turn Based Combat</h2>
                        <p className='text-white'>Your favorite old battling system with new suprises.</p>
                    </div>

                    <div className='text-center z-40'>
                        <div className='flex justify-center items-center w-12 h-12 p-2 group rotate-45 hover:rotate-[225deg] hover:scale-125 ease-in duration-300 bg-[var(--accent)] mb-6 mx-auto'>
                            <GiCargoCrane className='rotate-[335deg] group-hover:rotate-[120deg]  ease-in duration-300' size={30}/>
                        </div>
                        <h2 className='text-2xl'>Indie Production</h2>
                        <p className='text-white'>It's just me. </p>
                    </div>

                    <div className='text-center z-40'>
                        <div className='flex justify-center items-center w-12 h-12 p-2 group rotate-45 hover:rotate-[225deg] hover:scale-125 ease-in duration-300 bg-[var(--accent)] mb-6 mx-auto'>
                        <GiTreasureMap className='rotate-[315deg] group-hover:rotate-[120deg]  ease-in duration-300' size={30}/>
                        </div>
                        <h2 className='text-2xl'>Extensive Roadmap</h2>
                        <p className='text-white'>Plans within plans. </p>
                    </div>
                    
                    <div className='text-center z-40'>
                        <div className='flex justify-center items-center w-12 h-12 p-2 group rotate-45 hover:rotate-[225deg] hover:scale-125 ease-in duration-300 bg-[var(--accent)] mb-6 mx-auto'>
                        <GiExtraTime className='rotate-[315deg] group-hover:rotate-[120deg]  ease-in duration-300' size={30}/>
                        </div>
                        <h2 className='text-2xl'>Episodic Content</h2>
                        <p className='text-white'>Release content in large chunks called chapters. Stay tuned for more info!</p>
                    </div>
                    
                </div>
            </div>
        </div> 
        <div className='absolute bg-black/50 z-10 w-full h-full top-0'></div>

    </div>
  )
}

export default Features