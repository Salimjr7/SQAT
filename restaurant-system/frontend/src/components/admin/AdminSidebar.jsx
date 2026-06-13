import { useState } from "react";
import { LayoutDashboard, Menu as MenuIcon, ClipboardList, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) => 
    `flex items-center gap-3 p-3 rounded-lg transition-colors ${
      isActive ? "bg-orange-100 text-orange-600" : "hover:bg-gray-100 text-gray-700"
    }`;

  return (
    <>
      
      {/* --- Mobile Trigger Button --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-orange-500 text-white rounded-md "
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* --- Overlay (Closes sidebar when clicking outside on mobile) --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* --- Sidebar Container --- */}
      <div className={`
        fixed md:static inset-y-0 left-0 z-40
        w-64 h-screen border-r bg-white p-5 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}>
        <h1 className="text-lg font-semibold mb-6 mt-8 md:mt-0">Admin Panel</h1>

        <nav className="flex flex-col gap-2">
          <NavLink to="/admin" end className={linkClass} onClick={() => setIsOpen(false)}>
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/admin/menu" className={linkClass} onClick={() => setIsOpen(false)}>
            <MenuIcon size={18} />
            <span>Menu Management</span>
          </NavLink>

          <NavLink to="/admin/orders" className={linkClass} onClick={() => setIsOpen(false)}>
            <ClipboardList size={18} />
            <span>Orders</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
}