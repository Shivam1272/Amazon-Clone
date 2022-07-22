import React from 'react'
import Header from './Header';
import Product from './Product';
import './Home.css'

function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
        <img 
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt='banner'
        />
    <div className='home__row'>
        <Product
            id={12312}
            title="Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery"
            price={6999.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/810KHyQ4WcL._SL1500_.jpg"
            />
        <Product
            id={12312}
            title="Adofys Waterproof Housing Case Compatible with GoPro HERO9/10 Black, 60M/196FT Underwater Protective Diving Case with 12 Antifog Inserts Tripod Adapter Quick Release Mount and Thumbscrew"
            price={2899.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71yW68-apGS._SL1500_.jpg"
        />
    </div>
    <div className="home__row">
        <Product
            id={12312}
            title="Pintola All Natural Peanut Butter (Crunchy) (2.5 kg) (Unsweetened, Non-GMO, Gluten Free, Vegan)"
            price={883.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
        />
        <Product
            id={12312}
            title="Learning React: Functional Web Development with React and Redux Paperback – 1"
            price={950.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51imLrht6lL._SX389_BO1,204,203,200_.jpg"
        />
        <Product
            id={12312}
            title="Awestuffs LED Lights for Home Decoration (20 LED Photo Clip 3 Metre String (Warm White))"
            price={140.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
        />
    </div>
    <div className="home__row">
        <Product
            id={12312}
            title="Croma 80 cm (32 Inches) HD Ready Certified Android Smart LED TV CREL032HOF024601 (Black) (2022 Model)"
            price={11990.00}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41-2UuVvGcL._SX300_SY300_QL70_FMwebp_.jpg"
        />
    </div>
</div>
    </>
  )
}

export default Home