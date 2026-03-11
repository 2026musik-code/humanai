export default function Chat() {
  return (
    <div className="flex flex-col h-full bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        <div className="bg-zinc-800 p-4 rounded-2xl rounded-bl-none max-w-[80%] text-zinc-100">
          Hello! How can I assist you today?
        </div>
        <div className="bg-emerald-600 p-4 rounded-2xl rounded-br-none max-w-[80%] ml-auto text-white">
          I need help with my project.
        </div>
      </div>
      <div className="p-4 border-t border-zinc-800">
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="w-full bg-zinc-950 p-4 rounded-full border border-zinc-700 text-zinc-100 focus:outline-none focus:border-emerald-500"
        />
      </div>
    </div>
  );
}
