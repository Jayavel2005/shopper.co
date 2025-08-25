import React from 'react'
import logo from "../../images/Icons/shopping-bag.png"
const Navbar = () => {
    return (
        <nav className='shadow p-2 px-5 flex items-center justify-between'>
            <div className='inline-flex items-center justify-center  px-1'>
                <img src={logo} alt="logo" className='w-15' />
                <p className='font-semibold text-xl'>Nile.co</p>
            </div>
            <div className='flex gap-5 justify-center items-center max-sm:hidden'>
                <div><i className="bi bi-box-arrow-left"></i> logout</div>
                <div><i className="bi bi-heart"></i> Wish List</div>
                <div><i className="bi bi-cart"></i> My Bag</div>
            </div>
        </nav>
    )
}

export default Navbar
