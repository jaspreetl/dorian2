import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'


const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("coffee")
  const [subcategory, setSubcategory] = useState("coffee")
  const [price, setPrice] = useState("")
  const [sizes, setSizes] = useState([])
  const [bestseller, setBestseller] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('subCategory', subcategory);
    formData.append('sizes', JSON.stringify(sizes));
    formData.append('bestseller', bestseller);

    // Check if files exist and append 
    if (image1) formData.append('image1', image1);
    if (image2) formData.append('image2', image2);
    if (image3) formData.append('image3', image3);

    try {
        const response = await fetch(`${backendUrl}/api/product/add`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`, // Attach token if needed
            },
            body: formData,  // Don't set 'Content-Type', as FormData will automatically set it
        });

        const data = await response.json();
        // if (response.ok) {
        //     console.log('Product added successfully', data);
        // } else {
        //     console.error('Error adding product:', data.message);
        // }

        if(data.success) {
          toast.success(data.message)
          setName('')
          setDescription('')
          setImage1('')
          setImage2('')
          setImage3('')
          setPrice('')
        } else {
          toast.error(response.data.message)
        }

    } catch (error) {
        console.log(error);
        toast.error(error.message)    
    }
};


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <p className='mb-2'>upload image</p>

      <div className='flex gap-2'>
        <label htmlFor='image1'>
          <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt='' />
          <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id='image1' hidden required />
        </label>
        <label htmlFor='image2'>
          <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt='' />
          <input onChange={(e)=>setImage2(e.target.files[0])}  type='file' id='image2' hidden />
        </label>
        <label htmlFor='image3'>
          <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt='' />
          <input onChange={(e)=>setImage3(e.target.files[0])}  type='file' id='image3' hidden />
        </label>
      </div>

      <div className="w-full max-w-md">
        <label className="block mb-1 font-medium text-gray-700">product name</label>
        <input
          onChange={(e)=>setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type here..."
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>

      <div className="w-full max-w-md">
        <label className="block mb-1 font-medium text-gray-700">product description</label>
        <textarea
          onChange={(e)=>setDescription(e.target.value)}
          value={description}
          placeholder="Type here..."
          className="w-full px-4 py-2 border rounded-lg resize-none"
          rows="4"
          required
        />
      </div>

      <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">category</label>
          <select onChange={(e)=>setCategory(e.target.value)} className="w-full px-4 py-2 border rounded-lg">
            <option value="coffee">coffee</option>
            <option value="matcha">matcha</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">subcategory</label>
          <select onChange={(e)=>setSubcategory(e.target.value)} className="w-full px-4 py-2 border rounded-lg">
            <option value="cold">cold</option>
            <option value="hot">hot</option>
            <option value="retail">retail</option>
            <option value="merch">merch</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">price</label>
          <input
            onChange={(e)=>setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="$..."
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>
      </div>

      <div>
        <p className='mb-2'>product sizes</p>
        <div onClick={() => setSizes(prev => 
            prev.includes("s") 
              ? prev.filter(item => item !== 's') 
              : [...prev, 's']
          )} className='flex gap-3'>          <div>
            <p className={`${sizes.includes('s') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>s</p>
          </div>
          <div onClick={() => setSizes(prev => 
            prev.includes("m") 
              ? prev.filter(item => item !== 'm') 
              : [...prev, 'm']
          )} >
            <p className={`${sizes.includes('m') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>m</p>
          </div>
          <div onClick={() => setSizes(prev => 
            prev.includes("l") 
              ? prev.filter(item => item !== 'l') 
              : [...prev, 'l']
          )} >
            <p className={`${sizes.includes('l') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>l</p>
          </div>

          <div onClick={() => setSizes(prev => 
            prev.includes("30g") 
              ? prev.filter(item => item !== '30g') 
              : [...prev, '30g']
          )} >
            <p className={`${sizes.includes('30g') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>30g</p>
          </div>
          <div onClick={() => setSizes(prev => 
            prev.includes("60g") 
              ? prev.filter(item => item !== '60g') 
              : [...prev, '60g']
          )} >
            <p className={`${sizes.includes('60g') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>60g</p>
          </div>


          <div onClick={() => setSizes(prev => 
            prev.includes("250g") 
              ? prev.filter(item => item !== '250g') 
              : [...prev, '250g']
          )} >
            <p className={`${sizes.includes('250g') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>250g</p>
          </div>

          <div onClick={() => setSizes(prev => 
            prev.includes("500g") 
              ? prev.filter(item => item !== '500g') 
              : [...prev, '500g']
          )} >
            <p className={`${sizes.includes('500g') ? 'bg-pink-100' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>500g</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=>setBestseller(prev=>!prev)} checked={bestseller} type='checkbox' id='bestseller' />
        <label className='cursor-pointer' htmlFor='bestseller'>is this a bestseller item?</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>add</button>
    </form>
  )
}

export default Add
