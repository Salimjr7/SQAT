import axiosInstance from "./axiosInstance";

const adminApi = {
  getStats: () => axiosInstance.get("/admin/stats"),
  getOrders: () => axiosInstance.get("/admin/orders"),

  // ✅ correct endpoint
  updateOrderStatus: (id, status) =>
    axiosInstance.patch(`/orders/${id}/status`, { status }),

  // MENU
  getMenu: () => axiosInstance.get("/menu"),
  createMenu: (data) => axiosInstance.post("/menu", data),
  updateMenu: (id, data) => axiosInstance.put(`/menu/${id}`, data),
  deleteMenu: (id) => axiosInstance.delete(`/menu/${id}`),
};

export default adminApi;
