import React from 'react'
import logo from "../../images/Icons/shopping-bag.png"
const Navbar = () => {
    return (
        <nav className='shadow p-2 flex items-center justify-around'>
            <div className='inline-flex items-center justify-center  px-1'>
                <img src={logo} alt="logo" className='w-15' />
                <p className='font-semibold text-xl'>Shopora</p>
            </div>
            <div className='w-2/4'>
            <input type="text" name="" id="" placeholder='Search for Products' className='bg-[#EFE8FF] p-2 rounded-[5px] placeholder:px-2 w-full outline-none' />
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <div><i className="bi bi-box-arrow-left"></i> logout</div>
                <div><i className="bi bi-heart"></i> Wish List</div>
                <div><i className="bi bi-cart"></i> My Bag</div>
            </div>
        </nav>
    )
}

export default Navbar
