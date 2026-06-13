import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  // not logged in
  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  // not admin
  if (user.role !== "admin") {
    return <Navigate to="/user" />;
  }

  return children;
}