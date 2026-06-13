import { Edit2, Trash2 } from "lucide-react";

export default function MenuCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
            {item.category}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">
          {item.description}
        </p>
        
        <p className="text-orange-600 font-bold mb-4">${item.price}</p>

        <hr className="mb-4 border-gray-100" />

        {/* Footer Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={item.available} className="sr-only peer" readOnly />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500"></div>
            </label>
            <span className="text-sm text-gray-600">Available</span>
          </div>

          <div className="flex gap-3 text-gray-400">
            <Edit2 size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
            <Trash2 size={18} className="cursor-pointer hover:text-red-500 transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
}