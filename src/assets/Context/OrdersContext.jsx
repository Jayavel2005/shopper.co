import { createContext } from "react";

export const OrdersContext = createContext();


const OrderContextProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);

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