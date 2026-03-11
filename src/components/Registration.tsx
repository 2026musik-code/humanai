export default function Registration() {
  return (
    <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-700" />
        <input type="email" placeholder="Email" className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-700" />
        <input type="password" placeholder="Password" className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-700" />
        <button type="button" className="w-full p-4 rounded-full bg-emerald-600 font-bold">Scan Face & Register</button>
      </form>
    </div>
  );
}
