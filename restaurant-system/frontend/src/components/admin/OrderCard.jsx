export default function OrderCard({ order, onUpdateStatus }) {
  const statusColors = {
    Pending: "bg-gray-100 text-gray-600",
    Preparing: "bg-blue-100 text-blue-600",
    Ready: "bg-green-100 text-green-600",
    Completed: "bg-purple-100 text-purple-600",
  };

  const handleChange = (e) => {
    onUpdateStatus(order._id, e.target.value);
  };

  console.log("Rendering OrderCard for order", order._id);
  console.log(order.status)

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-bold">Order {order._id}</h3>
          <p className="text-sm text-gray-500">
            {new Date(order.createdAt).toLocaleString()}
          </p>
          <p className="text-sm">
            {order.user?.name || "Unknown"}
          </p>
        </div>

        <span className={`px-3 py-1 rounded-full text-xs ${statusColors[order.status]}`}>
          {order.status}
        </span>
      </div>

      {/* items */}
      <div className="bg-gray-50 p-3 rounded mb-3">
        {order.items?.map((item, i) => (
          <div key={i} className="flex justify-between text-sm">
            <p>{item.quantity}x {item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>

      {/* total */}
      <div className="flex justify-between font-bold mb-3">
        <span>Total</span>
        <span>${order.totalPrice}</span>
      </div>

      {/* status */}
      <select
        value={order.status}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="pending">Pending</option>
        <option value="preparing">Preparing</option>
        <option value="ready">Ready</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
