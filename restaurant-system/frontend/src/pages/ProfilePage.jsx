import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">No user data found. Please login.</p>
        <Link to="/user/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>
    );
  }

   return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          My Profile
        </h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{user.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-medium">{user.phoneNumber}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Student ID</p>
            <p className="font-medium">{user.studentId}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium capitalize">{user.role}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
        >
          Logout
        </button>
      </div>
    </div>
  );    
}



