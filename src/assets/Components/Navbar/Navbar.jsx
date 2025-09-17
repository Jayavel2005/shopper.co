import React, { useContext, useEffect, useState } from 'react'
import logo from "../../images/Icons/shopping-bag.png"
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../../lib/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const { totalQuantity } = useContext(CartContext);
    // const { addToCart, increment, decrement, removeItem, clearCartItem, cartItems, originalPrice } = useContext(CartContext);

    // console.log(cartItems.length);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)


            console.log(`in the navbar ${currentUser.email}`);

        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        const user = await signOut(auth);
        navigate('/login')
    }

    return (
        <nav className='shadow p-2 px-5 flex items-center justify-between'>
            <div className='inline-flex items-center justify-center  px-1'>
                <img src={logo} alt="logo" className='w-15' />
                <p className='font-semibold text-xl'>Nile.co</p>
            </div>
            <div className='flex gap-5 justify-center items-center max-sm:hidden'>
                {user ? (<div className='cursor-pointer hover:underline hover:underline-offset-4 ' onClick={handleLogout}>Logout <i className="bi bi-box-arrow-right"></i></div>) : (<div className='cursor-pointer hover:underline hover:underline-offset-4 ' onClick={() => navigate('/login')}>Login <i className='bi bi-box-arrow-in-right'></i> </div>)}
                <div className='cursor-pointer hover:underline hover:underline-offset-4 ' onClick={() => navigate('/wishlist')}><i className="bi bi-heart"></i> Wish List</div>


                <div className='cursor-pointer hover:underline hover:underline-offset-4 relative' onClick={() => navigate('/orders')}>Orders</div>

                <div className='cursor-pointer hover:underline hover:underline-offset-4 relative' onClick={() => navigate('cart')}><i className="bi bi-cart"></i><span className='text-xs absolute bg-red-400 px-1 py-0.6 left-2 -top-1.5  rounded-full'>{totalQuantity}</span> My Bag</div>
            </div>
        </nav>
    )
}

export default Navbar
