import { createContext, useState } from "react";

export const CheckoutContext = createContext();


const CheckoutContextProvider = ({ children }) => {

    const [addProduct, setAddProduct] = useState([]);

    const buyNow = (product) => {
        setAddProduct(prev => [...prev, product]);
    }

    const clearCheckout = () => {
        setAddProduct([]);
    }

    return (
        <CheckoutContext.Provider value={{ buyNow, clearCheckout }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContextProvider;