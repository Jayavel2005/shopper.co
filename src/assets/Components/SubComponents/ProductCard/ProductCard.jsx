import React from 'react'


const ProductCard = ({ product }) => {
    return (
        <div className='shadow rounded-[5px] hover:scale-101 transition-all duration-200 ease-in-out cursor-pointer '>

            <div className='p-2 relative flex justify-center items-end'>
                <img src={`${product.image}`} alt="product Name" className='rounded-[5px] w-full' />
                <div className='flex gap-3 absolute bottom-5'>
                    <div className="tooltip w-10 h-10 bg-white rounded-full flex items-center justify-center" data-tip="Add to Wish list" >
                        <i className='bi bi-heart-fill text-lg text-red-500'></i>
                    </div>
                    <div className='tooltip w-10 h-10 bg-white rounded-full flex items-center justify-center' data-tip="Add to Cart">
                        <i className="bi bi-cart-plus text-xl"></i>
                    </div>
                </div>
            </div>




            <div className='w-full p-2'>
                <div className='justify-between '>
                    <p className='text-wrap font-medium text-2xl text-[#28262C] font-outfit my-1'>{product.name}</p>
                    <img src={`src/assets/images/StarRatings/rating-${product.rating * 10}.png`} alt="star rating" className='w-25' />
                    <div className='flex items-center gap-2'><p className='text-xl font-medium my-1 px-1'>₹ {product.price}</p> <span className='text-emerald-600 font-semibold text-[18px]'>{product.offer}</span></div>
                </div>

                <button className='p-2 bg-[#9565FF] text-white my-1 w-full rounded-[5px] cursor-pointer hover:bg-[#8754ff]'>Buy Now</button>
            </div>

        </div>
    )
}

export default ProductCard
