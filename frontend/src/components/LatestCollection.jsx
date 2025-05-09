import React, { useContext, useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Title from './Title';
import {ShopContext} from '../context/ShopContext'

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && Array.isArray(products)) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);  
  // Dependency on products, ensures re-run when products change

  // Check if latestProducts is an array and has products
  const productsToDisplay = latestProducts.length > 0 ? latestProducts : [];

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'the '} text2={'latest'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Some dummy text</p>
      </div>
      {/* products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div> 
  );
};

export default LatestCollection;