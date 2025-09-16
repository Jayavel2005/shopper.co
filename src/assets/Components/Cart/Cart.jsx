import React, { useContext, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {


  const navigate = useNavigate();

  const { addToCart, increment, decrement, removeItem, clearCartItem, cartItems, originalPrice, discountPrice } = useContext(CartContext);

  // const increment = (id) => {
  //   setCartItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // const decrement = (id) => {
  //   setCartItems((prev) =>
  //     prev.map((item) =>
  //       item.id === id && item.quantity > 1
  //         ? { ...item, quantity: item.quantity - 1 }
  //         : item
  //     )
  //   );
  // };

  // const removeItem = (id) => {
  //   setCartItems((prev) => prev.filter((item) => item.id !== id));
  // };

  // const totalOriginal = cartItems.reduce(
  //   (acc, item) => acc + item.originalPrice * item.quantity,
  //   0
  // );
  // const totalPrice = cartItems.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );
  // const totalDiscount = totalOriginal - totalPrice;

  return (
    <section className="cart px-5 md:px-20 lg:px-24 xl:px-40 py-10">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-3xl font-bold">Cart</h3>
        <p className="text-gray-500">
          {cartItems.length > 0
            ? `${cartItems.length} items in your cart`
            : "No items in your cart"}
        </p>
        {cartItems.length > 0 ? <button className="text-sm mt-2 bg-purple-500 p-2  rounded-md text-white hover:bg-purple-600" onClick={() => navigate('/products')}>Add More Products</button> : ''}
      </div>

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center border rounded-lg shadow-sm bg-gray-50">
          <i className="bi bi-cart-x text-6xl text-gray-400 mb-4"></i>
          <h4 className="text-xl font-semibold mb-2">Your cart is empty</h4>
          <p className="text-gray-500 mb-6">
            Looks like you haven’t added anything to your cart yet.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={() => navigate('/products')}>
            Browse Products
          </button>
        </div>
      ) : (
        // Split layout
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-3 ">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative border rounded-lg p-2 flex items-start gap-4 shadow-sm"
              >
                <div className="h-32 w-32 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Seller: {item.seller}
                    </p>
                    <p className="mt-2 text-lg  flex items-center gap-2">
                      <del className="text-gray-400">
                        ₹{item.price}
                      </del>
                      <span>₹{item.price}</span>
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {item.discount}% off
                      </span>
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-4 mt-3">
                    <button
                      onClick={() => decrement(item)}
                      className="h-8 w-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increment(item)}
                      className="h-8 w-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                    >
                      +
                    </button>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item)}
                      className="flex items-center gap-2 text-red-500 hover:text-red-700 ml-4"
                    >
                      <i className="bi bi-trash"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sticky Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 border rounded-lg p-6 shadow-sm bg-white">
              <h4 className="text-xl font-semibold mb-4">Price Details</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Total Original Price</span>
                  <span>₹{originalPrice}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Total Discount</span>
                  <span>-₹{discountPrice}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total Price</span>
                  <span>₹{originalPrice - discountPrice}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
