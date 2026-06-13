import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [imgSrc, setImgSrc] = useState(
    "https://images.unsplash.com/photo-1763890869755-f1dce911f196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
  );

  const fallbackSrc =
    "https://via.placeholder.com/800x500.png?text=Delicious+Food";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Section */}
          <div>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Delicious Food,
              <span className="block text-orange-600">Delivered Fast</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Order from your favorite campus restaurant with ease. Quick
              pickup, no waiting in line.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/user/menu" className="flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition">
                Browse Menu <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/register" className="rounded-md border border-orange-500 px-6 py-3 text-orange-500 font-medium hover:bg-orange-50 transition">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full">
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
              <img
                src={imgSrc}
                alt="Students dining"
                className="h-full w-full rounded-2xl object-cover shadow-2xl"
                onError={() => setImgSrc(fallbackSrc)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}