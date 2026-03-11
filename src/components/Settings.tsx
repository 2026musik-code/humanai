import { useState } from 'react';

export default function Settings() {
  const [model, setModel] = useState('gemini-3-flash-preview');
  
  const handleSelectKey = async () => {
    // @ts-ignore - window.aistudio is injected by the platform
    if (window.aistudio) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
    }
  };

  return (
    <div className="p-6 bg-zinc-900 rounded-3xl border border-zinc-800">
      <h2 className="text-2xl font-bold mb-6 text-white">Pengaturan AI</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-zinc-400 mb-2">Pilih Model Gemini</label>
          <select 
            value={model} 
            onChange={(e) => setModel(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-950 border border-zinc-700 text-white focus:outline-none focus:border-emerald-500"
          >
            <option value="gemini-3-flash-preview">Gemini 3 Flash (Fast & Efficient)</option>
            <option value="gemini-3.1-pro-preview">Gemini 3.1 Pro (Complex Reasoning)</option>
          </select>
        </div>
        <div>
          <label className="block text-zinc-400 mb-2">API Key (Paid Models)</label>
          <button 
            onClick={handleSelectKey}
            className="w-full p-4 rounded-full bg-zinc-800 text-white font-bold border border-zinc-700 hover:bg-zinc-700 transition-all"
          >
            Pilih/Kelola API Key
          </button>
          <p className="text-xs text-zinc-500 mt-2">
            Gunakan API Key dari project Google Cloud berbayar untuk model Pro.
          </p>
        </div>
      </div>
    </div>
  );
}
