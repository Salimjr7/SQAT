export default function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white p-5 rounded-xl border flex items-center gap-4">
      <div className={`p-3 rounded-lg ${color}`}>
        {icon}
      </div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-xl font-semibold">{value}</h2>
      </div>
    </div>
  );
}