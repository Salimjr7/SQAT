import { useEffect, useState } from "react";
import OrderCard from "../../components/admin/OrderCard";
import adminApi from "../../api/adminApi";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await adminApi.getOrders();
      setOrders(res.data.data || res.data);
    } catch (err) {
      console.log("Using mock orders", err);

      setOrders([
        {
          _id: "1",
          createdAt: new Date(),
          user: { name: "John Doe" },
          status: "Preparing",
          totalPrice: 22.97,
          items: [
            { name: "Burger", quantity: 2, price: 17.98 },
            { name: "Coffee", quantity: 1, price: 4.99 },
          ],
        },
      ]);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await adminApi.updateOrderStatus(id, newStatus);

      setOrders((prev) =>
        prev.map((o) =>
          o._id === id ? { ...o, status: newStatus } : o
        )
      );
    } catch (err) {
      console.log("Status update failed", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Orders Management</h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
            onUpdateStatus={updateStatus}
          />
        ))}
      </div>
    </div>
  );
}
