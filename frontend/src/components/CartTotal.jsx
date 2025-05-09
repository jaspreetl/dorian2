import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'; // Correct named import
import Title from './Title'

const CartTotal = () => {
    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext)
  return (
    <div className='w-full'>
        <div className='text-2x;'>
            <Title text1={'cart'} text2={' totals'} />
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>subtotal: </p>
                <p>{currency} {getCartAmount()}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <p>delivery costs</p>
                <p>{currency} {delivery_fee}</p>
            </div>
            <hr/>
            <div className='flex justify-between'>
                <b>total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee }</b>
            </div>
        </div>
      
    </div>
  )
}

export default CartTotal
