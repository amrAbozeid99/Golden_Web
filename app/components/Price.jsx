"use client";
import React from 'react'
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState , useEffect } from 'react';
import 'animate.css';


const Price = () => {


//     useEffect(() => {
//   AOS.init({
//     duration: 1000, // مدة الأنيميشن بالملي ثانية
//     once: true,     // يشغّل الأنيميشن مرة واحدة فقط
//   });
// }, []);


  return (
    <div className='PriceHome'  id='Price'>
        
    <h1>Price</h1>
    <p className='PriceHomeData'>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>



    <div className="PriceLestConteaner">

        <div className="PriceOfaer">
            <h3 className='PriceOfaerHead'>Basic</h3>
            <ul className='PriceOfaerLest'>
                <li className='PriceOfaerSlied'>$19,99</li>
                <li className='PriceOfaerSlied'>Free Setup</li>
                <li className='PriceOfaerSlied'>24/7 Support</li>
                <li className='PriceOfaerSlied'>5 GB File Storage</li>
                <button className='PriceOfaerButton'>BUY</button>
            </ul>
        </div>

        <div className="PriceOfaer">
            <h3 className='PriceOfaerHead'>Pro</h3>
            <ul className='PriceOfaerLest'>
                <li className='PriceOfaerSlied'>$39,99</li>
                <li className='PriceOfaerSlied'>Free Setup</li>
                <li className='PriceOfaerSlied'>24/7 Support</li>
                <li className='PriceOfaerSlied'>25 GB File Storage</li>
                <button className='PriceOfaerButton'>BUY</button>
            </ul>
        </div>

        <div className="PriceOfaer">
            <h3 className='PriceOfaerHead'>Premium</h3>
            <ul className='PriceOfaerLest'>
                <li className='PriceOfaerSlied'>$79,99</li>
                <li className='PriceOfaerSlied'>Free Setup</li>
                <li className='PriceOfaerSlied'>24/7 Support</li>
                <li className='PriceOfaerSlied'>50 GB File Storage</li>
                <button className='PriceOfaerButton'>BUY</button>
            </ul>
        </div>

    </div>

<div className="EndPriceHome">
<p className='EndPriceHomeTitel'>We Offer Custom Plans. Contact Us For More Info.</p>
<Link className='EndPriceHomeLink' href="/" >Contact Us</Link>
</div>


<div className="PriceHomeComunteAcount">
    <div className="PriceHomeComunteAcountHead"><h1>Newsletter</h1></div>
    <div className="PriceHomeComunteAcountBody">
        <p className='PriceHomeComunteAcountBodyTitel'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <input className='PriceHomeComunteAcountBodyEmail' type="email" placeholder='Enter your email' />
        <button className='PriceHomeComunteAcountBodyButton'>Subscribe</button>
    </div>
</div>





    </div>
  )
}

export default Price
