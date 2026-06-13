import { useEffect, useState } from "react";
import { ShoppingBag, DollarSign, TrendingUp, Users } from "lucide-react";
import StatCard from "../../components/admin/StatCard";
import RecentOrders from "../../components/admin/RecentOrders";
import adminApi from "../../api/adminApi";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const [statsRes, ordersRes] = await Promise.all([
        adminApi.getStats(),
        adminApi.getOrders(),
      ]);

      // ✅ handle backend structure safely
      setStats(statsRes.data?.data || statsRes.data);
      setOrders(ordersRes.data?.data || ordersRes.data);

    } catch (err) {
      console.log("Using mock data (fallback)", err);

      // 🔥 fallback mock data
      setStats({
        totalOrders: 3,
        revenue: 61.93,
        popularItem: "Classic Burger",
        activeUsers: 24,
      });

      setOrders([
        {
          _id: "1",
          user: { name: "John Doe" },
          totalPrice: 22.97,
          status: "Preparing",
        },
        {
          _id: "2",
          user: { name: "Jane Smith" },
          totalPrice: 26.97,
          status: "Ready",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="p-6">Loading dashboard...</p>;

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="text-gray-500 mb-6">
        Welcome back! Here's your restaurant overview
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Orders Today"
          value={stats?.totalOrders || 0}
          icon={<ShoppingBag />}
          color="bg-blue-100 text-blue-600"
        />

        <StatCard
          title="Revenue Today"
          value={`$${stats?.revenue || 0}`}
          icon={<DollarSign />}
          color="bg-green-100 text-green-600"
        />

        <StatCard
          title="Popular Item"
          value={stats?.popularItem || "N/A"}
          icon={<TrendingUp />}
          color="bg-orange-100 text-orange-600"
        />

        <StatCard
          title="Active Users"
          value={stats?.activeUsers || 0}
          icon={<Users />}
          color="bg-purple-100 text-purple-600"
        />
      </div>

      <RecentOrders orders={orders || []} />
    </div>
  );
}
