import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import Title from '../components/Title';
import {ShopContext} from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      phone: ''
  })

  const onChangeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value
      setFormData(data => ({ ...data, [name]: value }))
  }


  const onSubmitHandler = async (event) => {
      event.preventDefault()
      try {
          let orderItems = []

          for (const items in cartItems) {
              for (const item in cartItems[items]) {
                  if (cartItems[items][item] > 0) {
                      const itemInfo = structuredClone(products.find(product => product._id === items))
                      if (itemInfo) {
                          itemInfo.size = item
                          itemInfo.quantity = cartItems[items][item]
                          orderItems.push(itemInfo)
                      }
                  }
              }
          }

          let orderData = {
              address: formData,
              items: orderItems,
              amount: getCartAmount() + delivery_fee
          }

          switch (method) {
              case 'stripe':
                  const responseStripe = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
                  if (responseStripe.data.success) {
                      const {session_url} = responseStripe.data
                      window.location.replace(session_url)
                  } else {
                      toast.error(responseStripe.data.message)
                  }
                  case 'cod':
                    default:
                      const response = await axios.post(backendUrl + '/api/order', orderData, { headers: { token } });
                      if (response.data.success) {
                        toast.success('Order placed successfully');
                        navigate('/orders');
                        setCartItems({});
                      } else {
                        toast.error(response.data.message);
                      }
                      break;
            }
      } catch (error) {
          console.log(error)
          toast.error(error.message)
      }
  }


  return (
      <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
          <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

              <div className='text-xl sm:text-2xl my-3'>
                  <Title text1={'delivery'} text2={' info'} />
              </div>
              <div className='flex gap-3'>
                  <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='first name' />
                  <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='last name' />
              </div>
              <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='email' />
              <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='street address' />
              <div className='flex gap-3'>
                  <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='city' />
                  <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='state' />
              </div>
              <div className='flex gap-3'>
                  <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='zip code' />
              </div>
              <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='phone' />
          </div>

          <div className='mt-8'>

              <div className='mt-8 min-w-80'>
                  <CartTotal />
              </div>

              <div className='mt-12'>
                  <Title text1={'payment'} text2={' methods'} />
                  <div className='flex gap-3 flex-col lg:flex-row'>
                    <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
                        <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                    </div>
                    <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                        <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                        <span className='text-sm font-semibold'>Cash on Delivery</span>
                    </div>
                  </div>

                  <div className='w-full text-end mt-8'>
                      <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>place order</button>
                  </div>
              </div>
          </div>
      </form>
  )
}

export default PlaceOrder
