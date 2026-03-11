export default function AdminPanel() {
  return (
    <div className="glass-card rounded-[2rem] p-8 lg:p-12 shadow-2xl">
      <div className="mb-12">
        <h2 className="text-3xl font-serif italic gold-text tracking-widest mb-2">Governance</h2>
        <p className="text-zinc-500 tracking-wide">Manage user access and system permissions.</p>
      </div>

      <div className="space-y-4">
        {[
          { name: 'Johnathan Doe', email: 'john@example.com', status: 'Pending' },
          { name: 'Eleanor Vance', email: 'eleanor@example.com', status: 'Pending' },
        ].map((user, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-white/10 transition-colors">
            <div>
              <p className="text-zinc-100 font-medium tracking-wide">{user.name}</p>
              <p className="text-xs text-zinc-500 font-mono">{user.email}</p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-6 py-2 rounded-full border border-white/10 text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">Reject</button>
              <button className="flex-1 sm:flex-none px-6 py-2 rounded-full gold-button text-xs uppercase tracking-widest">Approve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
