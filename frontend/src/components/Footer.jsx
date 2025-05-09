import React from 'react'

const Footer = () => {
  return (
    
    <div>
        <br/>
        <br></br>
        <hr />
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-4'>
        <div>
            
            <h1 className='italiana-regular text-5xl sm:py-3 lg:text-5xl leading-relaxed'>dorian</h1>
            {/* <img src={assets.logo} className='mb-5 w-15' alt="" /> */}
            {/* <p className='w-full md:w-2/3 text-gray-600'>
                Some dummy text
            </p> */}
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>home</li>
                <li>about us</li>
                <li>delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>get in touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>800-888-8888</li>
                <li>getcoffee@dorian.com</li>
                <li></li>
            </ul>
        </div>
      </div>
      <div >
        <hr />
        <p className='py-5 text-sm text-center'>© copyright 2025 - all rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
