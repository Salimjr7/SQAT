import { useState } from "react";
import { Heart, ShoppingCart, User, Menu, X, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const profile = JSON.parse(localStorage.getItem("user"));

  const linkClass = ({ isActive }) =>
    isActive ? "text-orange-500 font-semibold" : "hover:text-orange-500";

  return (
    <nav className="w-full border-b bg-white px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/user" className="flex items-center gap-2">
          <div className="bg-orange-500 p-2 rounded-md text-white">🍴</div>
          <span className="font-semibold text-gray-800">Campus Eats</span>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <NavLink to="/user" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/user/menu" className={linkClass}>
            Menu
          </NavLink>
          <NavLink to="/user/favorites" className={linkClass}>
            Favorites
          </NavLink>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-gray-700">
          <NavLink to="/user/favorites">
            <Heart className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          </NavLink>

          <NavLink to="/user/cart">
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          </NavLink>

          {profile ? (
            <NavLink to="/user/profile">
              <span>{profile.name}</span>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <User className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            </NavLink>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {open ? (
            <X
              onClick={() => setOpen(false)}
              className="w-6 h-6 cursor-pointer"
            />
          ) : (
            <Menu
              onClick={() => setOpen(true)}
              className="w-6 h-6 cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-700">
          <NavLink to="/user" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/user/menu" onClick={() => setOpen(false)}>
            Menu
          </NavLink>

          <NavLink to="/user/favorites" onClick={() => setOpen(false)}>
            Favorites
          </NavLink>

          {/* Mobile Icons */}
          <div className="flex gap-5 pt-2">
            <NavLink to="/user/favorites" onClick={() => setOpen(false)}>
              <Heart className="w-5 h-5" />
            </NavLink>

            <NavLink to="/user/cart" onClick={() => setOpen(false)}>
              <ShoppingCart className="w-5 h-5" />
            </NavLink>

            {profile ? (
              <NavLink to="/user/profile" onClick={() => setOpen(false)}>
                <span>{profile.name}</span>
              </NavLink>
            ) : (
              <NavLink to="/login" onClick={() => setOpen(false)}>
                <User className="w-5 h-5" />
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
