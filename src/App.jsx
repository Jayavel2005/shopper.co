import React from 'react'
import SignUp from './assets/Components/SignUp/SignUp'
import Login from './assets/Components/Login/Login'
import Navbar from './assets/Components/Navbar/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Ad from './assets/Components/Ad/Ad';
import ProductCard from './assets/Components/SubComponents/ProductCard/ProductCard';
import ProductsList from './assets/Components/ProductsList/ProductsList';

const App = () => {
  return (
    <div>
      <Navbar />
      <section className='px-2 my-4'>
        <Ad />

        <ProductsList />

      </section>
    </div>
  )
}

export default App
