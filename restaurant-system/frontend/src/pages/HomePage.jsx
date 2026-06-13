import { useEffect, useState } from "react";
import { Utensils, Clock, CreditCard } from "lucide-react";
import FoodCard from "../components/FoodCard";
import HeroSection from "../components/HeroSection";
import axiosInstance from "../api/axiosInstance";

export default function HomePage() {
  const [menu, setMenu] = useState([]);

  const features = [
    {
      icon: <Utensils className="h-8 w-8 text-orange-600" />,
      title: "Wide Selection",
      description:
        "Choose from a variety of delicious meals, snacks, and beverages",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Quick Pickup",
      description:
        "Order ahead and skip the line. Your food will be ready when you arrive",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-orange-600" />,
      title: "Easy Payment",
      description:
        "Pay with your student card or credit card for a seamless experience",
    },
  ];

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await axiosInstance.get("/menu");
      setMenu(res.data.data || res.data);
    } catch (err) {
      console.log("Failed to load menu", err);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="border-b bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="w-full bg-gray-100 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Featured Items
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Try our most popular dishes
              </p>
            </div>

            <button className="flex items-center gap-2 text-sm font-medium hover:text-orange-500">
              View All →
            </button>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {menu.length > 0 ? (
              menu.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))
            ) : (
              <p className="text-gray-500">Loading menu...</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-orange-500 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Ready to Order?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8">
            Join hundreds of students enjoying quick and delicious meals
          </p>

          <button className="w-full sm:w-auto bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
