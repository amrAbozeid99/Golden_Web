"use client";
import React, { useState } from 'react'
import { useEffect } from 'react';
import Link from 'next/link';
const Portfolio = () => {

const [Allsearch , setAllsearch]=useState('')

  const [products, setProducts] = useState([]);
  useEffect(() => {
      fetch('\Mapi.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);




  return (
    <div className='PortfolioHome' id='Portfolio'>
        <h1 className='PortfolioHomeHeadData'>Have You Seen our Works?</h1>
        <p className='PortfolioHomeBodyData'>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>
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
          <div key={product.title} className="PortfolioCart" >
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
