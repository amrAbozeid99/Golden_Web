"use client";

import React from 'react'
import { useEffect } from 'react';
import Image from 'next/image'
import Service1 from './imge/images/Service1.png'
import Service2 from './imge/images/Service2.png'
import Service3 from './imge/images/Service3.png'
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {



useEffect(() => {
  AOS.init({
    duration: 1000, // مدة التحريك
    easing: "ease-in-out", // نوع الحركة
  });
}, []);


  return (
    <div className="Serviceshome" id='Services'>
        <h1 className='servicesDataA'>What We Do?</h1>
        <h3 className='servicesDataB'>We bring your business to life using smart web ,graphic solutions and unique development tools</h3>
        <div className="servicesCountinerCarts">
            <div className="servicesCart" data-aos="fade-up">
                <Image className='servicesCartImg' src={Service1} alt='Service1' />
                <h3 className='servicesCartdata'>Modern Design</h3>
                <p>We Create Modern And Clean Theme For Your Business Company.</p>
            </div>
            <div className="servicesCart" data-aos="fade-up">
                <Image className='servicesCartImg' src={Service2} alt='Service2' />
                <h3 className='servicesCartdata'>Powerfull Theme</h3>
                <p>We Create Modern And Powerful Theme With Lots Animation And Features</p>
            </div>
            <div className="servicesCart" data-aos="fade-up">
                <Image className='servicesCartImg' src={Service3} alt='Service3' />
                <h3 className='servicesCartdata'>Clean Code</h3>
                <p>We Create Modern And Powerful Html5 And CSS3 Code Easy For Read And Customize.</p>
            </div>
        </div>
    </div>
)
}

export default Services
