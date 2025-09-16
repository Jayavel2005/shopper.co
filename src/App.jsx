import React from 'react';
import Navbar from './assets/Components/Navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WishList from './assets/Components/WishList/WishList';
import WishListContextProvider from './assets/Context/WishListContext';
import CartProvider from './assets/Context/CartContext';
import Home from './assets/Components/Home/Home';
import ProductsList from './assets/Components/ProductsList/ProductsList';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from "./assets/Components/Login/Login"
import SignUp from './assets/Components/SignUp/SignUp';
import Cart from './assets/Components/Cart/Cart';
import Checkout from './assets/Components/Checkout/Checkout';



const App = () => {
  return (
    <div>
      <section className='px-2 my-4'>
        {/* The context provider should wrap the routes that need access to it */}
        <WishListContextProvider>
          <CartProvider>
            <Navbar />
            <Checkout />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/products' element={<ProductsList />} />
              <Route path='/wishlist' element={<WishList />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </CartProvider>
        </WishListContextProvider>
        {/* <WishListContextProvider>
          <CartProvider>
            <ProductsList />
            <Cart />
          </CartProvider>
        </WishListContextProvider> */}

        <ToastContainer />
      </section>
    </div>
  );
};

export default App;