import React from 'react'



const Downloads = () => {
  return (
    <div  name='downloads' className='max-w-[1440px] md:px-24 pb-40 bg-[var(--bg-tan)]'>
        <div className='text-center py-6'>
            <h1 className='text-black'>Downloads</h1>
            <hr className='border border-black mx-auto w-32 my-4'/>
        </div>
        <div className='flex justify-around items-end mt-8'>
          <h2 className='mb-[-8px] text-3xl'>Chapter 1</h2>
          <div className='w-[30%] md:w-[50%] border-dotted border-b-2 self-end border-black'></div>
          <button className='text-white mt-3 border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 rounded-sm hover:bg-transparent hover:text-[var(--accent)] ease-in duration-200 mr-3'>Download</button>
        </div>
        <div className='flex justify-around items-end mt-8'>
          <h2 className='mb-[-8px] text-3xl'>Chapter 2</h2>
          <div className='w-[30%] md:w-[50%] border-dotted border-b-2 self-end border-black'></div>
          <button disabled={true} className='text-white mt-3 border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 rounded-sm  mr-3 '>Coming Soon</button>
        </div>


        
    </div>
  )
}

export default Downloads