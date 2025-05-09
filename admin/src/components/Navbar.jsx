import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'


const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <h1 className='italiana-regular text-5xl sm:py-3 lg:text-5xl leading-relaxed'>dorian</h1>
      <button onClick={() => setToken('')}
        className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'
      >
        log out
      </button>
    </div>

  )
}

export default Navbar;