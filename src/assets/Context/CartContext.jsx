import { createContext, useContext, useState, useEffect } from "react";
// import products from "../data/products";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            setCartItems((prev) =>
                prev.map((cartItem) =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            setCartItems((prev) => [
                ...prev,
                {
                    id: product.id, // keep consistent
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    discount: product.offer,
                    quantity: 1,
                },
            ]);
        }
    };

    const directBuyNow = (product) => {
        setCartItems(prev => [...prev, {
            id: product.id, // keep consistent
            name: product.name,
            image: product.image,
            price: product.price,
            discount: product.offer,
            quantity: 1,
        }])
    }

    const increment = (product) => {
        setCartItems((prev) =>
            prev.map((cartItem) =>
                cartItem.id === product.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    const decrement = (product) => {
        setCartItems((prev) =>
            prev.map((cartItem) =>
                cartItem.id === product.id && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        );
    };

    const removeItem = (product) => {
        setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== product.id));
    };

    const clearCartItem = () => {
        setCartItems([]);
    };

    // ✅ Use reduce to calculate totals
    const originalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0

    );

    const discountPrice = cartItems.reduce((acc, item) => acc + (item.quantity * item.price * item.discount / 100), 0);


    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);




    // const totalProducts = cartItems.length;

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                increment,
                decrement,
                removeItem,
                clearCartItem,
                originalPrice,
                totalQuantity,
                discountPrice,
                directBuyNow
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;


