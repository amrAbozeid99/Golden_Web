"use client";

import React from 'react'
import LOGO from './imge/logo.png'
// import Link from 'next/link';
import { Link } from 'react-scroll'
import Image from 'next/image';
import { useState , useEffect } from 'react';
const Nav = () => {

  const [navsmall , setNavsmall] = useState(false)
  const NavFunction =()=>{setNavsmall(true)}
  const NavFunctionOff =()=>{setNavsmall(false)}

  return (
<>
<div className='nav'>
        <a href="#"><Image src={LOGO} alt="LOGO"  style={{width:'90px',height:'66px'}}/></a>
        <ul className='nav-list'>
            <Link to='Home' smooth={true} duration={1000} className='nav-Link'>Home</Link>
            <Link to='Services' smooth={true} duration={1000} className='nav-Link'>Services</Link>
            <Link to='Portfolio' smooth={true} duration={1000} className='nav-Link'>Portfolio</Link>
            <Link to='About' smooth={true} duration={1000} className='nav-Link'>About</Link>
            <Link to='Clients' smooth={true} duration={1000} className='nav-Link'>Clients</Link>
            <Link to='Price' smooth={true} duration={1000} className='nav-Link'>Price</Link>
            <Link to='Contact' smooth={true} duration={1000} className='nav-Link'>Contact</Link>
        </ul>
        <div className="NavButtonZone"><button className='NavButton' onClick={NavFunction}>!!!</button></div>
    </div>

        <ul className={navsmall ? 'smail-nav-list' : "navOff"}>
            <Link to='Home' smooth={true} duration={1000} className='nav-Link' onClick={NavFunctionOff}>Home</Link>
            <Link to='Services' smooth={true} duration={1000} className='nav-Link' onClick={NavFunctionOff}>Services</Link>
            <Link to='Portfolio' smooth={true} duration={1000} className='nav-Link' onClick={NavFunctionOff}>Portfolio</Link>
            <Link to='About' smooth={true} duration={1000} className='nav-Link' onClick={NavFunctionOff}>About</Link>
            <Link to='Clients' smooth={true} duration={1000} className='nav-Link' onClick={NavFunctionOff}>Clients</Link>
            <Link to='Price' smooth={true} duration={1000} className='nav-Link' onClick={NavFunctionOff}>Price</Link>
            <Link to='Contact' smooth={true} duration={1000} className='nav-Link' onClick={NavFunctionOff}>Contact</Link>
            <div className="NavButtonZone"><button className='NavButtonOff' onClick={NavFunctionOff}>X</button></div>
        </ul>
        </>
  )
}

export default Nav
