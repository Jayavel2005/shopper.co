import React, { useContext } from 'react'
import { WishListContext } from '../../../Context/WishListContext';
import { CartContext } from '../../../Context/CartContext';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ product, setProductDetails }) => {

    const { addToWishList, wishList } = useContext(WishListContext);
    const { addToCart, increment, decrement, removeItem, clearCartItem, cartItems, originalPrice, directBuyNow } = useContext(CartContext);
    const navigate = useNavigate();






    return (
        <div className='shadow rounded-[5px] cursor-pointer ' >

            <div className='p-2 relative flex justify-center items-end' >
                <img src={`${product.image}`} alt="product Name" className='rounded-[5px] w-full' onClick={setProductDetails} />
                <div className='flex gap-3 absolute bottom-5'>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center" onClick={() => addToWishList(product)}>
                        <i className={`${wishList.some((item) => item.id === product.id) ? 'bi bi-heart-fill' : 'bi bi-heart'}  text-red-600 `}></i>
                    </div>
                    <div className='tooltip w-10 h-10 bg-white rounded-full flex items-center justify-center' onClick={() => addToCart(product)}>
                        <i className="bi bi-cart-plus text-xl"></i>
                    </div>
                </div>
            </div>




            <div className='w-full p-2'>
                <div className='justify-between '>
                    <p className='text-wrap font-medium text-2xl text-[#28262C] font-outfit my-1'>{product.name}</p>
                    <img src={`src/assets/images/StarRatings/rating-${product.rating * 10}.png`} alt="star rating" className='w-25' />
                    <div className='flex items-center gap-2'><p className='text-xl font-medium my-1 px-1'>₹ {product.price}</p> <span className='text-emerald-600 text-[15px] font-medium'>{product.offer}% off</span></div>
                </div>

                <button className='p-2 bg-[#9565FF] text-white my-1 w-full rounded-[5px] cursor-pointer hover:bg-[#8754ff]' onClick={() => { directBuyNow(product), navigate('/checkout') }}>Buy Now</button>
            </div>

        </div >
    )
}

export default ProductCard
