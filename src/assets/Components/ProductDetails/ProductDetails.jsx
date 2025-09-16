import React from 'react'
import { useContext } from 'react';
import { WishListContext } from '../../Context/WishListContext';
import { Tag, Star, Zap, ShoppingCart } from 'lucide-react';
import { CartContext } from '../../Context/CartContext';


const ProductDetails = ({ selectedProductdetail, removeSeletecdProduct }) => {
  const { addToWishList, removeFromWishList, wishList, isWishListed } = useContext(WishListContext);
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <button className='flex  items-center gap-1 p-1 text-[#8754ff] cursor-pointer' onClick={removeSeletecdProduct}><i className="bi bi-arrow-left-circle-fill text-xl"></i> Back to Products</button>
      <section className='px-2 max-xl:flex-col sm:px-15 lg:px-24 xl:px-40  flex  gap-5 items-start py-5'>
        <div className='w-[1000px] relative'>
          <img src={selectedProductdetail.image} alt={selectedProductdetail.name} className='max-xl:w-full rounded-2xl' />
          <div className="w-10 h-10 bg-white rounded-full flex top-5 right-5 items-center justify-center absolute" onClick={() => addToWishList(selectedProductdetail)}>
            <i className={`${wishList.some((item) => item.id === selectedProductdetail.id) ? 'bi bi-heart-fill' : 'bi bi-heart'}  text-red-600 `}></i>
          </div>
        </div>

        <div className='p-5 flex flex-col items-start'>
          <h2 className='font-semibold text-5xl my-1'>{selectedProductdetail.name}</h2>
          <p className='text-xl my-1'>{selectedProductdetail.description}</p>

          <div className='flex items-center gap-3'><span className='bg-green-600 rounded-sm text-amber-50 px-1.5 my-2 py-0 text-sm flex items-center gap-1'><Star width={14} /> {selectedProductdetail.rating}</span> <span className='text-gray-500 text-sm'>86 ratings & 105 reviews</span></div>

          <div className='flex items-center gap-3'><span className='text-3xl my-2 font-bold'>₹ {Math.floor(selectedProductdetail.price - selectedProductdetail.price * 15 / 100)} </span> <del>₹ {selectedProductdetail.price}</del> <span className='text-emerald-600 font-semibold'>{selectedProductdetail.offer}</span></div>


          <div className='text-lg bg-green-500 inline-flex items-center justify-center gap-2 hover:bg-green-600 text-neutral-50 my-2 px-3 py-1 rounded-full'><Tag width={16} /> <p className='text-[15px]'>{selectedProductdetail.brand}</p></div>


          <div className='sm:gap-5 gap-3 my-3 flex  max-sm:flex-col'>
            <button className='bg-purple-500 p-4 text-white font-semibold cursor-pointer hover:shadow hover:shadow-purple-300 transition-all rounded-md inline-flex ' onClick={() => addToCart(selectedProductdetail)}><ShoppingCart width={20} /> &nbsp; ADD TO CART</button>
            <button className='bg-purple-600 p-4 text-white font-semibold cursor-pointer hover:shadow hover:shadow-purple-300 transition-all rounded-md inline-flex'><Zap width={20} />&nbsp; BUY NOW</button>
          </div>

        </div>
      </section>
    </>
  )
}

export default ProductDetails
