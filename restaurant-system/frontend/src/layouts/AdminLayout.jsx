import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/AdminSidebar";

export default function AdminLayout() {
  return (
    <div className="flex flex-col md:flex-row"> 
      {/* Sidebar handles its own fixed/static positioning */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-50 min-h-screen p-6 pt-20 md:pt-6">
        {/* pt-20: Adds space at the top on mobile so the orange button doesn't cover your title.
          md:pt-6: Resets the space to normal on desktop screens.
        */}
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}