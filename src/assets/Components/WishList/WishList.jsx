import React, { useContext } from 'react'
import { Heart, Laptop, Shirt, House, Dumbbell } from "lucide-react"
import { WishListContext } from '../../Context/WishListContext'

const WishList = () => {

    const { wishList } = useContext(WishListContext);

    console.log(wishList);
    

    // const products = [
    //     {
    //         id: 1,
    //         name: "Wireless Earbuds",
    //         category: "Electronics",
    //         price: 1999,
    //         stock: 20
    //     },
    //     {
    //         id: 2,
    //         name: "Smartphone Stand",
    //         category: "Accessories",
    //         price: 499,
    //         stock: 50
    //     },
    //     {
    //         id: 3,
    //         name: "Bluetooth Speaker",
    //         category: "Electronics",
    //         price: 2499,
    //         stock: 15
    //     },
    //     {
    //         id: 4,
    //         name: "Gaming Mouse",
    //         category: "Computers",
    //         price: 1299,
    //         stock: 35
    //     },
    //     {
    //         id: 5,
    //         name: "Mechanical Keyboard",
    //         category: "Computers",
    //         price: 2999,
    //         stock: 25
    //     },
    //     {
    //         id: 6,
    //         name: "Smart Watch",
    //         category: "Wearables",
    //         price: 3999,
    //         stock: 18
    //     },
    //     {
    //         id: 7,
    //         name: "Portable Power Bank",
    //         category: "Electronics",
    //         price: 1499,
    //         stock: 40
    //     },
    //     {
    //         id: 8,
    //         name: "USB-C Cable",
    //         category: "Accessories",
    //         price: 299,
    //         stock: 100
    //     },
    //     {
    //         id: 9,
    //         name: "Laptop Cooling Pad",
    //         category: "Computers",
    //         price: 899,
    //         stock: 22
    //     },
    //     {
    //         id: 10,
    //         name: "LED Desk Lamp",
    //         category: "Home",
    //         price: 1199,
    //         stock: 30
    //     }
    // ];

    return (
        <div className=''>
            <section className='flex gap-5 items-start'>

                {/* Category section*/}
                <div className='shadow-md px-4 py-5 rounded-lg w-64 sticky top-6'>
                    <h3 className='font-semibold text-xl'>Categories</h3>
                    <ul className='my-2 flex flex-col ms-3'>
                        <li className='my-2 inline-flex gap-2 p-2 text-red-500 font-semibold rounded-md bg-rose-100'><Heart /> All Items </li>
                        <li className='my-2 inline-flex gap-2 p-2 text-neutral-700 rounded-md'><Laptop /> Electronics</li>
                        <li className='my-2 inline-flex gap-2 p-2 text-neutral-700 rounded-md'><Shirt /> Fashion</li>
                        <li className='my-2 inline-flex gap-2 p-2 text-neutral-700 rounded-md'><House /> Home & Living</li>
                        <li className='my-2 inline-flex gap-2 p-2 text-neutral-700 rounded-md'><Dumbbell /> Sports</li>
                    </ul>
                </div>



                {/* Wishlist Items */}

                <div className='p-3 rounded-lg'>
                    {/* wishlist item card */}
                    {wishList.map((product, index) => (
                        <div className='shadow-md rounded-md p-2 flex gap-5 my-4 ' key={index}>

                            <div>
                                <img src={product.image} alt="" className='w-24 h-24 rounded-lg' />
                            </div>

                            <div>
                                <h3 className='text-xl font-semibold'>{product.name}</h3>

                                <p>{product.description}</p>

                                <div className='flex items-center my-1 gap-1'>
                                    <img src={`src/assets/images/StarRatings/rating-${product.rating * 10}.png`} alt="" className='w-20' />
                                    <span className='text-xs'>({product.rating})</span>
                                </div>
                                <div className='inline-flex items-center justify-center gap-2'>

                                    <span className='text-lg font-semibold'>₹{Math.floor(product.price - product.price * (15/100))}</span>
                                    <del className='text-neutral-600 text-xs'>₹{product.price}</del>
                                    <span className='bg-purple-300 text-xs px-2 py-1 rounded-full'>{product.offer}</span>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

            </section>
        </div>
    )
}

export default WishList
