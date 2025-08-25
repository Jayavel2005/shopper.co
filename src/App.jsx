import React, { useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import WishList from './assets/Components/WishList/WishList';
import WishListContextProvider from './assets/Context/WishListContext';
import Home from './assets/Components/Home/Home';
import ProductsList from './assets/Components/ProductsList/ProductsList';



const App = () => {


  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      <Navbar />
      <section className='px-2 my-4'>
        {activePage === 'home' && <Home onNavigate={() => setActivePage("products")} />}
        <WishListContextProvider>
          {activePage === 'products' && <ProductsList onBack={() => setActivePage("home")} />}
          <WishList />
        </WishListContextProvider>

      </section>
    </div>
  )
}

export default App
