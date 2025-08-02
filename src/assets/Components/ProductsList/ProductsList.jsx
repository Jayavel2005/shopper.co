import React from 'react'
import ProductCard from '../SubComponents/ProductCard/ProductCard'
import products from '../../data/products'
import Badge from '../SubComponents/Badge/Badge';

const ProductsList = () => {

    const categories = [
        "All",
        "Electronics",
        "Bags",
        "Furniture",
        "Clothing",
        "Accessories",
        "Footwear"
    ];

    return (
        <section>
            <div >
                <p className='text-center text-3xl my-2 font-semibold text-[#28262C] underline underline-offset-3 decoration-[#8754ff]'>Categories</p>
                <div className='flex justify-center gap-2 my-4 flex-wrap' >
                    {categories.map((category, index) => (
                        <div className='bg-[#ECE3FF] inline-block p-1 rounded-full px-5 border border-[#C2A6FF] text-sm cursor-pointer hover:bg-[#e6dbff] hover:border-[#bb9cff]' key={index} onClick={() => console.log(index)}>
                            {category}
                        </div>
                    ))}
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6 '>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </section>
    )
}

export default ProductsList
