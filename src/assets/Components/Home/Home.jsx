import React from 'react'
import Badge from '../SubComponents/Badge/Badge'
import banner from "../../images/Banner/bannerImage.jpg"
import returns from "../../images/Icons/returns.svg"
import cod from "../../images/Icons/cod.svg"
import lowestPrice from "../../images/Icons/lowest-price.svg"
import { useNavigate } from 'react-router-dom'



const Home = () => {

    const navigate = useNavigate();


    return (
        <div className='my-3 text-center'>
            <Badge badgeContent="🎉 Festival Deal: Free shipping on all orders above ₹999!" />

            <div className='relative flex justify-center items-center'>
                <div className='absolute inline-flex items-center justify-center flex-col'>
                    <p className='text-5xl font-extrabold text-info my-1'>Grab the Exciting Products </p>
                    <button className='btn border-none shadow-none bg-[#8754ff] my-1 text-white' onClick={() => navigate('/products')}>Shop Products</button>
                </div>
                <img src={banner} alt="" className='block mx-auto my-5 w-full' />

            </div>

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

export default Home
