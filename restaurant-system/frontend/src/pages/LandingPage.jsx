import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center w-96">
        <h1 className="text-2xl font-bold mb-3">Campus Eats</h1>
        <p className="text-gray-500 mb-6">
          Welcome! Choose how you want to continue
        </p>

        <div className="flex flex-col gap-4">
          <NavLink
            to="/user"
            className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Continue as User
          </NavLink>

          <NavLink
            to="/admin"
            className="border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Continue as Admin
          </NavLink>
        </div>
      </div>
    </div>
  );
}