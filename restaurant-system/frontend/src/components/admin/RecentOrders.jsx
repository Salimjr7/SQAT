export default function RecentOrders({ orders }) {
  return (
    <div className="bg-white rounded-xl border p-5 mt-6">
      <h2 className="font-semibold mb-4">Recent Orders</h2>

      {orders.length === 0 && (
        <p className="text-gray-500">No orders yet</p>
      )}

      {orders.map((order) => (
        <div
          key={order._id}
          className="flex flex-col md:flex-row md:justify-between py-3 border-b"
        >
          <div>
            <p className="font-medium">{order._id}</p>
            <p className="text-sm text-gray-500">
              {order.user?.name || "Unknown"}
            </p>
          </div>

          <div className="md:text-right">
            <p>${order.totalPrice}</p>
            <p className="text-sm text-gray-500">{order.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
