export default function AdminPanel() {
  return (
    <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <div className="space-y-4">
        <div className="bg-zinc-800 p-4 rounded-2xl flex justify-between items-center">
          <span>User: John Doe</span>
          <div className="space-x-2">
            <button className="bg-emerald-600 px-4 py-2 rounded-full text-sm">Approve</button>
            <button className="bg-red-600 px-4 py-2 rounded-full text-sm">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
}
