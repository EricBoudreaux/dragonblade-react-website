import React from "react";
import Slider from "react-slick";

import chapterOneImage from '../img/screen_9.png'
import chapterTwoImage from '../img/screen_6.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EpisodeCarousel() {
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


    </Slider>
  );
}