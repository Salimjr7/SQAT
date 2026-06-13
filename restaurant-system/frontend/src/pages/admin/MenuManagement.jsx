import { useEffect, useState } from "react";
import adminApi from "../../api/adminApi";

export default function MenuManagement() {
  const [menu, setMenu] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    isAvailable: true,
    preparationTime: "",
  });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await adminApi.getMenu();
      setMenu(res.data.data || res.data);
    } catch (err) {
      console.log("Using mock menu", err);
      setMenu([
        { _id: "1", name: "Burger", price: 10, category: "Food" },
        { _id: "2", name: "Pizza", price: 12, category: "Food" },
      ]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "preparationTime"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await adminApi.updateMenu(editingId, form);

        setMenu((prev) =>
          prev.map((item) =>
            item._id === editingId ? { ...item, ...form } : item
          )
        );

        setEditingId(null);
      } else {
        const res = await adminApi.createMenu(form);

        setMenu((prev) => [...prev, res.data.data || res.data]);
      }

      // reset form
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
        isAvailable: true,
        preparationTime: "",
      });
    } catch (err) {
      console.log("Fallback local update", err);

      if (editingId) {
        setMenu((prev) =>
          prev.map((item) =>
            item._id === editingId ? { ...item, ...form } : item
          )
        );
        setEditingId(null);
      } else {
        setMenu((prev) => [
          ...prev,
          { _id: Date.now().toString(), ...form },
        ]);
      }
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name || "",
      description: item.description || "",
      price: item.price || "",
      category: item.category || "",
      image: item.image || "",
      isAvailable: item.isAvailable ?? true,
      preparationTime: item.preparationTime || "",
    });

    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await adminApi.deleteMenu(id);
    } catch (err) {
      console.log("Delete local only", err);
    }

    setMenu((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Menu Management</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-xl shadow mb-6 grid grid-cols-2 gap-3"
      >
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded col-span-2" />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded col-span-2" />

        <input name="price" value={form.price} onChange={handleChange} type="number" placeholder="Price" className="border p-2 rounded" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="border p-2 rounded" />

        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="border p-2 rounded col-span-2" />

        {/* 🔥 image preview */}
        {form.image && (
          <img src={form.image} alt="preview" className="h-20 rounded col-span-2 object-cover" />
        )}

        <input
          name="preparationTime"
          value={form.preparationTime}
          onChange={handleChange}
          type="number"
          placeholder="Prep time (min)"
          className="border p-2 rounded"
        />

        <select
          value={form.isAvailable}
          onChange={(e) =>
            setForm({ ...form, isAvailable: e.target.value === "true" })
          }
          className="border p-2 rounded"
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>

        <button className="bg-orange-500 text-white py-2 rounded col-span-2">
          {editingId ? "Update Item" : "Add Item"}
        </button>
      </form>

      {/* LIST */}
      <div className="space-y-3">
        {menu.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-sm">${item.price}</p>
              <p className="text-xs text-gray-400">
                {item.preparationTime} min •{" "}
                {item.isAvailable ? "Available" : "Unavailable"}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
