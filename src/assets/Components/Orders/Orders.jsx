import { useContext } from "react";
import { OrdersContext } from "../../Context/OrdersContext";

export default function Orders() {
  const { orders } = useContext(OrdersContext);

  if (orders.length === 0) {
    return <p className="text-center mt-10">No orders placed yet.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-sm bg-white"
          >
            <h3 className="font-semibold text-lg">
              Order #{order.orderId}
            </h3>
            <p className="text-gray-600">Name: {order.customerDetails.name}</p>
            <p className="text-gray-600">Email: {order.customerDetails.email}</p>
            <p className="text-gray-600">Payment: {order.customerDetails.payment}</p>

            <div className="mt-4 space-y-3">
              {order.cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500 text-sm">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">₹{item.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 font-bold text-lg text-right">
              Total: ₹{order.total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
