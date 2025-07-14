"use client";
import React from 'react'
import Link from 'next/link';
import  { useRef } from 'react';
import { useState , useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";
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



  // كود التشغيل 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_al1d1ei', 'template_qa0qhlb', form.current, {
        publicKey: 'AVv7bM7Scd-NtXyAa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
        e.target.reset()
    };

// ___________________________________________________________________________________
// ___________________________________________________________________________________
// ___________________________________________________________________________________
const [messageSent, setMessageSent] = useState(false);






useEffect(() => {
  AOS.init({
    duration: 1000, // مدة التحريك
    easing: "ease-in-out", // نوع الحركة
    // once: true, // هل يظهر التأثير مرة واحدة فقط
  });
}, []);




  return (
    <div className='ContactHome' id='Contact'>
      

<h1>Contact Us</h1>
<p className='ContactHomeText'>Whether you need design, technical support, or development consultation, our team is ready to provide the best possible communication experience.</p>



<div className="ContactHomeEmallZone">

<form className='ContactHomeform' ref={form} onSubmit={sendEmail}>
    <h1>Say Hello</h1>
    <input className='ContactHomeformData' name="Name" type="text" placeholder="* Your name..." />
    <input className='ContactHomeformData' name="Email" type="email" placeholder="* Your email..." />
    <input className='ContactHomeformData' name="Phone" type='number' placeholder="* Your phone..." />
    <input className='ContactHomeformComint' name="message" type="text" placeholder="* Comments..." />
    <button className={messageSent? 'messageSentNO':'ContactHomeformButton'} onClick={()=>{setMessageSent(true)}} type="submit"  id="send-mail">Send message</button>
    <h2 className={messageSent? 'messageSentOK':'messageSentNO'}>Message sent successfully</h2>
</form>

</div>

<div className="ContactHomeEndZone">
    {/* <p>123 Fifth Avenue, 12th,Belgrade,SRB 11000</p> */}
    <p className='ContactHomeEndZoneEmail'>amrabozeid99@gmail.com</p>
    <p className='ContactHomeEndZonePhone'>+201158392932</p>
    <p className='ContactHomeEndZonePhone'>+201207604778</p>
    <h3 className='ContactHomeEndZoneTEXT'>We Are Social</h3>
    <div className="ContactHomeEndsoshelLeinks">
        <Link data-aos="zoom-out" target='blank' href='https://www.facebook.com/profile.php?id=61576986519246&notif_id=1752122826894689&notif_t=page_user_activity&ref=notif#' className='ContactHomeEndsoshelLeink'><FaFacebookF /></Link>
        <Link data-aos="zoom-out" target='blank' href='https://x.com/GoldenWeb99' className='ContactHomeEndsoshelLeink'><FaTwitter /></Link>
        <Link data-aos="zoom-out" target='blank' href='https://www.instagram.com/amr.ath.9/' className='ContactHomeEndsoshelLeink'><FaInstagram /></Link>
        <Link data-aos="zoom-out" target='blank' href='https://www.linkedin.com/in/amr-apozeid-4b96a7251/' className='ContactHomeEndsoshelLeink'><FaLinkedinIn /></Link>
        <Link data-aos="zoom-out" target='blank' href='https://www.youtube.com/?app' className='ContactHomeEndsoshelLeink'><FaYoutube /></Link>
        <Link data-aos="zoom-out" target='blank' href='https://github.com/amrAbozeid99' className='ContactHomeEndsoshelLeink'><FaGithub /></Link>
        <Link data-aos="zoom-out" target='blank' href='https://wa.me/201158392932' className='ContactHomeEndsoshelLeink'><FaWhatsapp /></Link>
    </div>
</div>










    </div>
  )
}

export default Contact
