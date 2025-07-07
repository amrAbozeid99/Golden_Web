"use client";
import React from 'react'
import { useState , useEffect } from 'react';
import Link from 'next/link';
const About = () => {



    const [ products , setProducts ] = useState ([]);
    useEffect(
        ()=>{
            
            const fetchProducts = async ()=>{
                try {
                    const response = await fetch('\MyTeam.json');
                    const data = await response.json();
                    console.log(data)
                    setProducts(data);
                } catch (error){
                    console.error('Error fetching products',error);}
            } 
            fetchProducts();
        
        },[])








  return (

    <div className='AboutHome' id='About'>
      <h1 className='AboutHeadData'>Who We Are?</h1>
      <p className='AboutHeadBady'>Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque dapibus in purus in dignissim.</p>

<div className="AboutTeamData">
{products.map((product)=>(
    <div className='AboutTeamCart'>
                <img className='PortfolioCatrImg' src={product.image} loading='lazy' alt={product.name} />
                <h1 style={{color:'#FECE1A'}}>{product.category}</h1>
                <h1>{product.name}</h1>
                <h1 style={{color:'goldenrod'}}>{product.rating.rate}</h1>
            </div>
        ))}
</div>




<div className="AboutUsZone">
<h3 className='AboutUsHead' style={{color:'#FECE1A'}}>About Us</h3>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
</div>


<div className="AboutHiringZone">
    <h1>We're Hiring</h1>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, ullamcorper suscipit lobortis nisl ut aliquip consequat. I learned that we can do anything, but we can't do everything...</p>
    <Link className='AboutHiringLink' href="/">Join Us</Link>
</div>



<div className="AboutorederZone">
<p>Elegance is not the abundance of simplicity. It is the absence of complexity.</p>
    <Link className='AboutorederLink' href="/">Purshase now</Link>
</div>






    </div>

  )
}

export default About
