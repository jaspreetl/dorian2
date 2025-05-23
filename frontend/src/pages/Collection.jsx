import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';
import {ShopContext} from '../context/ShopContext'

const Collection = () => {
    const { products = [], search, showSearch, loading } = useContext(ShopContext);

    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent');

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }

        setFilterProducts(productsCopy);
    };

    const sortProduct = () => {
        let filteredCopy = filterProducts.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProducts(filteredCopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProducts(filteredCopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        if (products.length > 0) {
            applyFilter();
        }
    }, [category, subCategory, search, showSearch, products]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    if (loading) {
        return <div>Loading products...</div>;
    }

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filters */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    filters
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
                </p>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
                    <p className='mb-3 text-sm font-medium'>categories</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Coffee'} onChange={toggleCategory} /> coffee
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Matcha'} onChange={toggleCategory} /> matcha
                        </p>
                    </div>
                </div>
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'}`}>
                    <p className='mb-3 text-sm font-medium'>type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Cold'} onChange={toggleSubCategory} /> cold
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Hot'} onChange={toggleSubCategory} /> hot
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Merch'} onChange={toggleSubCategory} /> merch
                        </p>
                        <p className='flex gap-2'>
                            <input className='w-3' type='checkbox' value={'Retail'} onChange={toggleSubCategory} /> retail
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'all'} text2={' collections'} />
                    <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relavent">sort by: relavent</option>
                        <option value="low-high">sort by: low to high</option>
                        <option value="high-low">sort by: high to low</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item, index) => (
                            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Collection;
