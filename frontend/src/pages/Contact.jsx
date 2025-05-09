import React, { useState } from 'react'
import { assets } from '../assets/assets';
const Contact = () => {
  return (
    <div className="w-[90%] sm:max-w-3xl m-auto mt-20 text-gray-800 flex flex-col gap-6">
      
      <h1 className="italiana-regular text-4xl text-center">contact us</h1>

      {/* Flex container for side-by-side layout */}
      <div className="flex flex-col sm:flex-row items-center sm:gap-8">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <img 
            src={assets.contact_img} 
            alt="contact us" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Information Section */}
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
          <h2 className="text-2xl mb-4">get in touch</h2>
          <p className="text-md mb-4">if you have any questions, feel free to reach out. we're always happy to connect with our community!</p>

          <div className="mb-4">
            <p className="font-semibold">phone:</p>
            <p>800-888-8888</p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">email:</p>
            <p>getcoffee@dorian.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;