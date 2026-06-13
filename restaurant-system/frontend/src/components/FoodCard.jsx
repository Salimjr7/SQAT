import { Heart, ShoppingCart } from "lucide-react";


export default function FoodCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden relative max-w-xs">
      
      {/* Favorite Icon */}
      <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-red-100">
        <Heart className="w-5 h-5 text-red-500" />
      </div>

      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-500 text-sm">{item.description}</p>
        <p className="text-orange-500 font-semibold">${parseFloat(item.price).toFixed(2)}</p>

        {/* Add to Cart */}
        <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}