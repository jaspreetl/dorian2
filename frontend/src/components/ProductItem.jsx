import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'; // Correct named import
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        {/* Apply a fixed height to the image */}
        <img
          className='hover:scale-110 transition ease-in-out h-64 w-full object-cover' 
          src={image[0]} 
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
