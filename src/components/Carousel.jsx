import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slider className='w-full' {...settings}>
        <div className='w-full text-center h-screen hero-bg-1 bg-fixed bg-center bg-cover'>
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex-col text-left px-6 z-50">
                    <h1 className="text-[var(--accent)] text-6xl md:text-8xl title">Header One</h1>
                    <p className="text-gray-300 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium?</p>
                    <button className='text-white mt-3 border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 rounded-sm hover:bg-transparent hover:text-[var(--accent)] ease-in duration-200 mr-3'>Download</button>
                    <button className='text-[var(--accent)] mt-3 border border-[var(--accent)] bg-transparent px-5 py-2 rounded-sm hover:bg-white hover:text-[var(--accent)] ease-in duration-200'>Download</button>
                </div>
                <div className="w-full h-full bg-black/20 z-0 absolute"></div>
            </div>            
        </div>
        <div className='w-full text-center h-screen hero-bg-2 bg-fixed bg-center bg-cover'>
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex-col text-left px-6 z-50">
                    <h1 className="text-[var(--accent)] text-6xl md:text-8xl title">Header Two</h1>
                    <p className="text-gray-300 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium?</p>
                    <button className='text-white mt-3 border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 rounded-sm hover:bg-transparent hover:text-[var(--accent)] ease-in duration-200 mr-3'>Download</button>
                    <button className='text-[var(--accent)] mt-3 border border-[var(--accent)] bg-transparent px-5 py-2 rounded-sm hover:bg-white hover:text-[var(--accent)] ease-in duration-200'>Download</button>
                </div>   
                <div className="w-full h-full bg-black/20 z-0 absolute"></div>
            </div>
        </div>
        <div className='w-full text-center h-screen hero-bg-3 bg-fixed bg-center bg-cover'>
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex-col text-left px-6 z-50">
                    <h1 className="text-[var(--accent)] text-6xl md:text-8xl title">Header Three</h1>
                    <p className="text-gray-300 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, laudantium?</p>
                    <button className='text-white mt-3 border border-[var(--accent)] bg-[var(--accent)] px-5 py-2 rounded-sm hover:bg-transparent hover:text-[var(--accent)] ease-in duration-200 mr-3'>Download</button>
                    <button className='text-[var(--accent)] mt-3 border border-[var(--accent)] bg-transparent px-5 py-2 rounded-sm hover:bg-white hover:text-[var(--accent)] ease-in duration-200'>Download</button>
                </div>   
                <div className="w-full h-full bg-black/20 z-0 absolute"></div>
            </div>
        </div>

    </Slider>
  );
}