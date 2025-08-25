import { createContext, useEffect, useState } from "react";
import products from "../data/products";

export const WishListContext = createContext();

const WishListContextProvider = (props) => {
    const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem("wishList")) || []);

    const addToWishList = (product) => {
        const isWhishListed = wishList.find(item => item.id === product.id)
        if (isWhishListed) {
            const updatedList = wishList.filter(item => item.id !== product.id)
            setWishList(updatedList)
            localStorage.setItem("wishList", JSON.stringify(updatedList))
        } else {
            setWishList([...wishList, product])


        }
    }

    useEffect(() => {
        localStorage.setItem("wishList", JSON.stringify(wishList))

    }, [wishList])

    const removeFromWishList = (product) => {
        setWishList(wishList.filter(item => item.id !== product.id))
        localStorage.setItem("wishList", JSON.stringify(wishList))
    }


    // (function isWishListed(product) {
    //     wishList.some(item => item.id = product.id)
    // })()


    return (
        <WishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
            {props.children}
        </WishListContext.Provider>
    )
}

export default WishListContextProvider;