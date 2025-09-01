import React from 'react';
import Navbar from './assets/Components/Navbar/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WishList from './assets/Components/WishList/WishList';
import WishListContextProvider from './assets/Context/WishListContext';
import Home from './assets/Components/Home/Home';
import ProductsList from './assets/Components/ProductsList/ProductsList';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from "./assets/Components/Login/Login"


const App = () => {
  return (
    <div>
      <Navbar />
      <section className='px-2 my-4'>
        {/* The context provider should wrap the routes that need access to it */}
        <WishListContextProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsList />} />
            <Route path='/wishlist' element={<WishList />} />
          </Routes>
        </WishListContextProvider>
        <ToastContainer />
      </section>
    </div>
  );
};

export default App;