import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// import WishListContextProvider from './assets/Context/WishListContext';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <WishListContextProvider> */}
        <App />
      {/* </WishListContextProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
