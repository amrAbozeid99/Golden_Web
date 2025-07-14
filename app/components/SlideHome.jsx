// "use client";
// import React from 'react'
// import Image from 'next/image';
// import Homeslider from './imge/images/home slider.png'
// import slider1 from './imge/images/Slider01.png'
// import slider2 from './imge/images/Slider02.png'
// import slider3 from './imge/images/Slider03.png'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const SlideHome = () => {


//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 2000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 4000, 
//       };


//   return (
//     <div className='SlideHomeZone'>
  
//   <Slider {...settings}>

//     <div  className='SlideHome' id='Home'>
//       <div className="SlideHomeData"><div className='SlideHomeDataA'><h1>Welcome to Golden Web</h1><p>We transform your ideas into sophisticated digital interfaces that reflect your project's identity. Attract customers with exceptional designs and unparalleled responsiveness.</p></div><Image className='SlideHomeimg' src={Homeslider} alt="sliderHome" /></div>
//     </div>
//     <div  className='SlideHome' id='Home'>
//       <div className="SlideHomeData"><div className='SlideHomeDataA'><h1>Front-end solutions tailored to you</h1><p>We offer programming and design services for landing pages and complete websites in a professional manner that suits your audience and intelligently achieves your marketing goals.</p></div><Image className='SlideHomeimg' src={slider1} alt="sliderHome" /></div>
//     </div>
//     <div  className='SlideHome' id='Home'>
//       <div className="SlideHomeData"><div className='SlideHomeDataA'><h1>Your website is your strongest point in the competition</h1><p>Because first impressions matter the most, we care about every pixel and design to reflect the spirit of your project and provide your visitors with an amazing user experience.</p></div><Image className='SlideHomeimg' src={slider2} alt="sliderHome" /></div>
//     </div>
//     <div  className='SlideHome' id='Home'>
//       <div className="SlideHomeData"><div className='SlideHomeDataA'><h1>From clean code to tangible results</h1><p>We code with mastery, design with creativity, and build websites that foster trust and drive conversions. Because you deserve a digital presence that matches your vision.</p></div><Image className='SlideHomeimg' src={slider3} alt="sliderHome" /></div>
//     </div>


//   </Slider>
//         <div className="slider-buttons" style={{ textAlign: 'center', marginBottom: '1rem' ,marginTop: '50px'}}>
//         <button onClick={() => sliderRef.current.slickPrev()} className="prev-button">السابق</button>
//         <button onClick={() => sliderRef.current.slickNext()} className="next-button">التالي</button>
//       </div>
// </div>
//   )
// }

// export default SlideHome


















"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Homeslider from './imge/images/home slider.png';
import slider1 from './imge/images/Slider01.png';
import slider2 from './imge/images/Slider02.png';
import slider3 from './imge/images/Slider03.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";

const SlideHome = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false // نوقف الأسهم الافتراضية
  };

  return (
    <div className='SlideHomeZone'>
 
      <div className="slider-buttons" >
        <button onClick={() => sliderRef.current.slickPrev()} className="slider-button"><AiFillLeftCircle /></button>
        <button onClick={() => sliderRef.current.slickNext()} className="slider-button"><AiFillRightCircle /></button>
      </div>

      <Slider ref={sliderRef} {...settings}>
    <div  className='SlideHome' id='Home'>
      <div className="SlideHomeData"><div className='SlideHomeDataA'><h1>Welcome to Golden Web</h1><p>We transform your ideas into sophisticated digital interfaces that reflect your project's identity. Attract customers with exceptional designs and unparalleled responsiveness.</p></div><Image className='SlideHomeimg' src={Homeslider} alt="sliderHome" /></div>
    </div>
    <div  className='SlideHome' id='Home'>
      <div className="SlideHomeData"><div className='SlideHomeDataA'><h1>Front-end solutions tailored to you</h1><p>We offer programming and design services for landing pages and complete websites in a professional manner that suits your audience and intelligently achieves your marketing goals.</p></div><Image className='SlideHomeimg' src={slider1} alt="sliderHome" /></div>
    </div>
    <div  className='SlideHome' id='Home'>
      <div className="SlideHomeData"><div className='SlideHomeDataA'><h1>Your website is your strongest point in the competition</h1><p>Because first impressions matter the most, we care about every pixel and design to reflect the spirit of your project and provide your visitors with an amazing user experience.</p></div><Image className='SlideHomeimg' src={slider2} alt="sliderHome" /></div>
    </div>
    <div  className='SlideHome' id='Home'>
      <div className="SlideHomeData"><div className='SlideHomeDataA'><h1>From clean code to tangible results</h1><p>We code with mastery, design with creativity, and build websites that foster trust and drive conversions. Because you deserve a digital presence that matches your vision.</p></div><Image className='SlideHomeimg' src={slider3} alt="sliderHome" /></div>
    </div>
      </Slider>

    </div>
  );
};

export default SlideHome;
