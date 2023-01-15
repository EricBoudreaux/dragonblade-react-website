import React from 'react'
import { CiFaceSmile } from 'react-icons/ci'

const Copyright = () => {
  return (
    <div className='flex bg-black flex-col sm:flex-row justify-center items-center py-6'>
      <p className='text-white text-sm text-center'>Copyright ©2023 All rights reserved | Built by Eric Boudreaux</p>
      <CiFaceSmile className='text-[var(--accent)] ml-3 animate-spin ease-in-out delay-1000 duration-1000' size={30}/>
    </div>
  )
}

export default Copyright