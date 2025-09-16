import { useContext } from "react";
import { OrderContext } from "../../Context/OrderContext";

export default function Orders() {
  const { orders } = useContext(OrderContext);

  if (orders.length === 0) {
    return <p className="text-center mt-10">No orders placed yet.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border p-4 rounded-lg shadow-sm bg-white"
          >
            <h3 className="font-semibold text-lg">
              Order #{order.id} - {order.date}
            </h3>
            <p className="text-gray-600">Name: {order.customer.name}</p>
            <p className="text-gray-600">Email: {order.customer.email}</p>
            <p className="text-gray-600">Payment: {order.customer.payment}</p>

            <div className="mt-4 space-y-3">
              {order.items.map((item, idx) => (
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
