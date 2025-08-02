import React from 'react'
import Badge from '../SubComponents/Badge/Badge'
import banner from "../../images/Banner/bannerImage.jpg"
import returns from "../../images/Icons/returns.svg"
import cod from "../../images/Icons/cod.svg"
import lowestPrice from "../../images/Icons/lowest-price.svg"



const Ad = () => {
    return (
        <div className='my-3 text-center'>
            <Badge badgeContent="🎉 Festival Deal: Free shipping on all orders above ₹999!" />

            <img src={banner} alt="" className='block mx-auto my-5 w-full' />

            <div className='bg-[#F7F3FF] flex justify-center py-1 rounded-[5px]'>
                <div className='flex gap-10'>
                    <div className='flex items-center'><img src={returns} alt="returns" />7 Days Easy Return</div>
                    <div className='flex items-center'><img src={cod} alt="cod" />Cash on delivery</div>
                    <div className='flex items-center'><img src={lowestPrice} alt="lowestPrice" />Lowest Prices</div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Ad
