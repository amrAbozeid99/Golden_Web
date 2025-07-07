"use client";
import React from 'react'
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='ContactHome' id='Contact'>
      

<h1>Contact Us</h1>
<p className='ContactHomeText'>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>



<div className="ContactHomeEmallZone">

<form className='ContactHomeform' action="">
    <h1>Say Hello</h1>
    <input className='ContactHomeformData' type="text" placeholder="* Your name..." />
    <input className='ContactHomeformData' type="email" placeholder="* Your email..." />
    <input className='ContactHomeformComint' type="text" placeholder="* Comments..." />
    <button className='ContactHomeformButton' id="send-mail">Send message</button>
</form>

</div>

<div className="ContactHomeEndZone">
    {/* <p>123 Fifth Avenue, 12th,Belgrade,SRB 11000</p> */}
    <p className='ContactHomeEndZoneEmail'>amrabozeid99@gmail.com</p>
    <p className='ContactHomeEndZonePhone'>+201158392932</p>
    <p className='ContactHomeEndZonePhone'>+201207604778</p>
    <h3 className='ContactHomeEndZoneTEXT'>We Are Social</h3>
    <div className="ContactHomeEndsoshelLeinks">
        <Link href='/' className='ContactHomeEndsoshelLeink'><FaFacebookF /></Link>
        <Link href='/' className='ContactHomeEndsoshelLeink'><FaTwitter /></Link>
        <Link href='/' className='ContactHomeEndsoshelLeink'><FaInstagram /></Link>
        <Link href='/' className='ContactHomeEndsoshelLeink'><FaLinkedinIn /></Link>
        <Link href='/' className='ContactHomeEndsoshelLeink'><FaYoutube /></Link>
        <Link href='/' className='ContactHomeEndsoshelLeink'><FaGithub /></Link>
        <Link href='/' className='ContactHomeEndsoshelLeink'><FaWhatsapp /></Link>
    </div>
</div>










    </div>
  )
}

export default Contact
