import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { OrdersContext } from "../../Context/OrdersContext";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cartItems, originalPrice, discountPrice, clearCartItem } = useContext(CartContext);
  const { updateOrders } = useContext(OrdersContext);

  const navigate = useNavigate();

  const showMe = () => {
    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: "Your order has been completed successfully 🎉",
      confirmButtonColor: "#6b21a8" // purple button

    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/products')
      }
    })
  }

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    payment: "",
  });

  const [errors, setErrors] = useState({});

  // Input handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!customerDetails.name || customerDetails.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!customerDetails.email || !/\S+@\S+\.\S+/.test(customerDetails.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!customerDetails.phone || !/^[0-9]{10}$/.test(customerDetails.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!customerDetails.address) newErrors.address = "Address is required";
    if (!customerDetails.city) newErrors.city = "City is required";
    if (!customerDetails.state) newErrors.state = "State is required";
    if (!customerDetails.postal || !/^[0-9]{6}$/.test(customerDetails.postal)) {
      newErrors.postal = "Enter a valid 6-digit postal code";
    }

    if (!customerDetails.payment) newErrors.payment = "Select a payment method";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle Complete Order
  const handleCompleteOrder = () => {
    if (validate()) {
      const orderData = {
        customerDetails,
        cartItems,
        orderDate: new Date().toLocaleDateString(),
        orderId: "ORD-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        total: originalPrice - discountPrice,
      };

      updateOrders(orderData)
      clearCartItem();
      console.log("✅ Order Placed:", orderData);

      // For now just reset form
      setCustomerDetails({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postal: "",
        payment: "",
      });
      setErrors({});
      showMe();


    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-4">Checkout</h2>

          {/* Customer Details */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={customerDetails.name}
                  className="border p-2 rounded-lg w-full"
                  onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={customerDetails.email}
                  className="border p-2 rounded-lg w-full"
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div className="col-span-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={customerDetails.phone}
                  className="border p-2 rounded-lg w-full"
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={customerDetails.address}
                  className="border p-2 rounded-lg w-full"
                  onChange={handleChange}
                />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={customerDetails.city}
                  className="border p-2 rounded-lg w-full"
                  onChange={handleChange}
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={customerDetails.state}
                  className="border p-2 rounded-lg w-full"
                  onChange={handleChange}
                />
                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  name="postal"
                  placeholder="Postal Code"
                  value={customerDetails.postal}
                  className="border p-2 rounded-lg w-full"
                  onChange={handleChange}
                />
                {errors.postal && <p className="text-red-500 text-sm">{errors.postal}</p>}
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <div className="space-y-2">
              {["Credit/Debit Card", "UPI", "Cash on Delivery"].map((method) => (
                <label
                  key={method}
                  className={`flex items-center gap-2 border rounded-lg p-2 cursor-pointer ${customerDetails.payment === method ? "border-purple-500" : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={customerDetails.payment === method}
                    onChange={handleChange}
                  />
                  {method}
                </label>
              ))}
            </div>
            {errors.payment && <p className="text-red-500 text-sm">{errors.payment}</p>}
          </div>

          <button
            className="w-full bg-purple-500 text-white font-semibold py-3 rounded-lg mt-6 hover:bg-purple-600 transition"
            onClick={handleCompleteOrder}
          >
            Complete Order
          </button>
        </div>

        {/* Right Section: Order Summary */}
        <div className="border-l pl-6 space-y-4">
          <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
          <div className="space-y-3">
            {cartItems.map((item, index) => (
              <div className="flex items-center justify-between" key={index}>
                <img src={item.image} alt="" className="w-20 rounded-2xl" />
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
          <hr />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{originalPrice}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{discountPrice}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{originalPrice - discountPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
