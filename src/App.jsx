import React, { useState } from 'react'
import SignUp from './assets/Components/SignUp/SignUp'
import Login from './assets/Components/Login/Login'
import Navbar from './assets/Components/Navbar/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './assets/Components/Home/Home';
import ProductCard from './assets/Components/SubComponents/ProductCard/ProductCard';
import ProductsList from './assets/Components/ProductsList/ProductsList';
import ProductDetails from './assets/Components/ProductDetails/ProductDetails';

const App = () => {


  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      <Navbar />
      <section className='px-2 my-4'>
        {activePage === 'home' && <Home onNavigate={() => setActivePage("products")}/>}
        {activePage === 'products' && <ProductsList onBack={() => setActivePage("home")} />}

      </section>
    </div>
  )
}

export default App
