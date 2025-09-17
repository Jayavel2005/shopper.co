import { createContext, useEffect, useState } from "react";

export const OrdersContext = createContext();


const OrderContextProvider = ({ children }) => {

    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("orders")) || []);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])

    const updateOrders = (newOrder) => {
        setOrders(prev => [...prev, newOrder])
    }

    return (
        <OrdersContext.Provider value={{ orders, updateOrders }}>
            {children}
        </OrdersContext.Provider>
    )
}


export default OrderContextProvider;