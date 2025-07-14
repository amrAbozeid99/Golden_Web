"use client";
import React from 'react'
import ClientsImg from './imge/images/Client1.png'
import Image from 'next/image';
const Clients = () => {
  return (
    <div className="ClientsHome" id='Clients'>
        <h1>What Client Say?</h1>
        <p className='ClientsHomeData'>We believe that customer satisfaction is our greatest achievement. Discover real reviews from our partners who have found value, professionalism, and results in our services.</p>

        <div className="ClientsCarts">
            <div className="ClientsCart">
                <p>"I've worked too hard and too long to let anything stand in the way of my goals. I will not let my teammates down and I will not let myself down."</p>
                <div className="ClientsCartData">
                    <Image style={{width:'100px',height:'100px'}} src={ClientsImg} alt="ClientsImg" />
                    <h3>Ahmed aly</h3>
                </div>
            </div>


            <div className="ClientsCart">
                <p>""Determine never to be idle. No person will have occasion to complain of the want of time who never loses any. It is wonderful how much may be done if we are always doing."</p>
                <div className="ClientsCartData">
                    <Image style={{width:'100px',height:'100px'}} src={ClientsImg} alt="ClientsImg" />
                    <h3>yasser mohamed</h3>
                </div>
            </div>


            <div className="ClientsCart">
                <p>""In motivating people, you've got to engage their minds and their hearts. I motivate people, I hope, by example - and perhaps by excitement, by having productive ideas to make others feel involved."</p>
                <div className="ClientsCartData">
                    <Image style={{width:'100px',height:'100px'}} src={ClientsImg} alt="ClientsImg" />
                    <h3>hesham mohamed</h3>
                </div>
            </div>
        </div>


<p className='ClientsHomeDataEnd'>"Perfection is Achieved Not When There Is Nothing More to Add, But When There Is Nothing Left to Take Away"</p>


<div className="OurClientsHome">
    <h1>Our Clients</h1>
    <h1>comming soon</h1>
</div>




    </div>
  )
}

export default Clients
