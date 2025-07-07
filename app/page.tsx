import Link from "next/link";
import Head from 'next/head';
import Nav from './components/Nav'
import SlideHome from './components/SlideHome'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Clients from './components/Clients'
import Price from './components/Price'
import Contact from './components/Contact'
import Footer from './components/Footer'



export const metadata = {title:'Golden web', description: 'This is the home page of the Golden web'};

export default function Home() {
  return (
    <div style={{width:'100%',height:'100%',overflow:'hidden'}}>
      <Head>
        <title>Golden web</title>
        <meta name="description" content="This is the home page of the pc games market store" />
      </Head>


{/* ________________________________________________________________________________________________________________________________ */
/* ________________________________________________________________________________________________________________________________ */
/* ________________________________________________________________________________________________________________________________ */
/* ________________________________________________________________________________________________________________________________ */
/* Nav Zone */ }

<div className="homeNavZone">
<Nav />
</div>
<div className="homeNavZonespase"></div>

< SlideHome />
< Services />
<Portfolio />
<About />
<Clients />
<Price />
<Contact />
<Footer />


    </div>
  );
}
