import React from 'react'

import contactImg from '../img/Ry_Char_Art.png'

const Contact = () => {
  return (
    <div  name='contact' className='max-w-[1440px] pt-24 bg-black'>
        <div className='w-full h-full'>
            <div className='text-center py-6'>
                <h1 className='text-white'>Contact </h1>
                <hr className='border border-white mx-auto w-32 my-4'/>
            </div>
                <div className='flex flex-col md:flex-row justify-around items-center'>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <input type="text" className='border-b border-[var(--accent)] my-3 outline-none text-white py-2 px-3 bg-[#070D0D] w-[80%]' placeholder='Name'/>
                        <input type="text" className='border-b border-[var(--accent)] my-3 outline-none text-white py-2 px-3 bg-[#070D0D] w-[80%]' placeholder='Email'/>
                        <textarea type="text" rows={6} className='border-b border-[var(--accent)] my-3 outline-none text-white py-2 px-3 bg-[#070D0D] w-[80%]' placeholder='Message'/>
                        <button className='text-white mt-3 border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 rounded-sm hover:bg-transparent hover:text-[var(--accent)] ease-in duration-200 mr-3'>Send Message</button>
                    </div>

                        <img src={contactImg} className='w-[80%] md:w-[40%]' alt="" />

                </div>
        </div>
    </div>
  )
}

export default Contact


// // 
// box-sizing: border-box;
// font-family: inherit;
// font-size: 14px;
// vertical-align: baseline;
// font-weight: 400;
// line-height: 1.29;
// letter-spacing: .16px;
// border-radius: 0;
// outline: 2px solid transparent;
// outline-offset: -2px;
// width: 100%;
// height: 40px;

// border-bottom: 1px solid #8d8d8d;
// background-color: #f4f4f4;
// padding: 0 16px;
// color: #161616;
// transition: background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);  
// :focus{
//     outline: 2px solid #0f62fe;
//     outline-offset: -2px;
// }
