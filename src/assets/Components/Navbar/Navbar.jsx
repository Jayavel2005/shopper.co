import React from 'react'
import logo from "../../images/Icons/shopping-bag.png"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <nav className='shadow p-2 px-5 flex items-center justify-between'>
            <div className='inline-flex items-center justify-center  px-1'>
                <img src={logo} alt="logo" className='w-15' />
                <p className='font-semibold text-xl'>Nile.co</p>
            </div>
            <div className='flex gap-5 justify-center items-center max-sm:hidden'>
                <div className='cursor-pointer hover:underline hover:underline-offset-4 ' onClick={() => navigate('/login')}> login</div>
                <div className='cursor-pointer hover:underline hover:underline-offset-4 ' onClick={() => navigate('/wishlist')}><i className="bi bi-heart"></i> Wish List</div>
                <div className='cursor-pointer hover:underline hover:underline-offset-4 '><i className="bi bi-cart"></i> My Bag</div>
            </div>
        </nav>
    )
}

export default Navbar
