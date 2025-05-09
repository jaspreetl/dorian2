import React from 'react'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="w-[90%] sm:max-w-3xl m-auto mt-20 text-gray-800 flex flex-col gap-6">
      
      <h1 className="italiana-regular text-4xl text-center">our story</h1>
      {/* Flexbox container for side-by-side layout */}
      <div className="flex flex-col sm:flex-row items-center sm:gap-8">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <img 
            src={assets.about_img} 
            alt="Organic Coffee & Matcha" 
            className="w-full rounded-lg shadow-lg" 
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
          <p className="text-md leading-7 mb-4">
            welcome to <span className="font-semibold">dorian</span> — where every sip is a celebration of nature's finest gifts.
            we believe great coffee and matcha start with pure, organic ingredients, cultivated with care and crafted with love.
          </p>
          <p className="text-md leading-7 mb-4">
            whether you're seeking the bold richness of our hand-roasted coffee or the vibrant calm of our ceremonial-grade matcha,
            know that every batch is brewed with integrity, transparency, and a whole lot of heart.
          </p>
          <p className="text-md leading-7 italic text-center mt-6">
            sip slow. live fully. grow with us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;