import React from 'react'
import logoAmazon from '../assets/amazon.png';
import logoFlipkart from '../assets/flipkart.png';
import heroImage from '../assets/hero-image.png';

const Hero = () => {
  
  return (
    <main className='hero container'>
        <div className="hero-content">
            <h1>
                YOUR FEET DESERVE THE BEST
            </h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
            </p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className='secondary-btn'>Catergory</button>
            </div>

            <div className="shopping">
                <p>also Available On</p>
                
                <div className='brand-icons'>
                <img src={logoAmazon} alt="amazon-logo" />
                <img src={logoFlipkart} alt="flipkart-logo" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src={heroImage} alt="hero-image" />
        </div>
    </main>
    
  )
}

export default Hero;

