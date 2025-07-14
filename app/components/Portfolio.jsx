"use client";
import React, { useState } from 'react'
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {

const [Allsearch , setAllsearch]=useState('')

  const [products, setProducts] = useState([]);
  useEffect(() => {
      fetch('\Mapi.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

useEffect(() => {
  AOS.init({
    duration: 1000, // مدة التحريك
    easing: "ease-in-out", // نوع الحركة
    once: true, // هل يظهر التأثير مرة واحدة فقط
  });
}, []);


  return (
    <div className='PortfolioHome' id='Portfolio'>
        <h1 className='PortfolioHomeHeadData'>Have You Seen our Works?</h1>
        <p className='PortfolioHomeBodyData'>A selection of projects that showcase our expertise in front-end development — from elegant landing pages to fully responsive websites designed to wow visitors.</p>
        <div className="PortfolioHomeButtonS">
            <button className='PortfolioHomeButton' onClick={()=>{setAllsearch('')}}>All</button>
            <button className='PortfolioHomeButton' onClick={()=>{setAllsearch('react')}}>React.js</button>
            <button className='PortfolioHomeButton' onClick={()=>{setAllsearch('next')}}>Next.js</button>
            <button className='PortfolioHomeButton' onClick={()=>{setAllsearch('native')}}>Native</button>
        </div>










      <div className="PortfolioCatrList">
        {products.filter(product => {
          return Allsearch.toLocaleLowerCase() === '' ? product : product.category.toLocaleLowerCase().includes(Allsearch.toLocaleLowerCase());
        }).map(product => (
          <div key={product.title} className="PortfolioCart"  data-aos="zoom-in-up">
            <img className='PortfolioCatrImg' src={product.image} loading='lazy' alt={product.title} />
            <h3 className='PortfolioCatrtitle'>{product.title}</h3>
            <h3>{product.description}</h3>
            <Link className='PortfolioCatrbutton' target='blink'  href={product.LinkTarget} >Veaw</Link>
          </div>
        ))}
      </div>






    </div>
  )
}

export default Portfolio
