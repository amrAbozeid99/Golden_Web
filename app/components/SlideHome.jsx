"use client";
import React from 'react'
import Image from 'next/image';
import slider1 from './imge/images/Slider01.png'
const SlideHome = () => {
  return (
    <div  className='SlideHome' id='Home'>
      <div className="SlideHomeData"><h1>Welcome to my progect</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam consequatur illum perspiciatis architecto, similique voluptatibus ad fuga error facere.</p></div>
      <Image className='SlideHomeimg' src={slider1} alt="sliderHome" />
    </div>
  )
}

export default SlideHome
