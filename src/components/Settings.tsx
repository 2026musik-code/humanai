import { Settings as SettingsIcon, Sparkles } from 'lucide-react';

export default function Settings({ selectedModel, setSelectedModel }: { selectedModel: string, setSelectedModel: (model: string) => void }) {
  
  const handleSelectKey = async () => {
    // @ts-ignore - window.aistudio is injected by the platform
    if (window.aistudio) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
    }
  };

  return (
    <div className="glass-card rounded-[2rem] p-8 lg:p-12 shadow-2xl">
      <div className="mb-12">
        <h2 className="text-3xl font-serif italic gold-text tracking-widest mb-2">Preferences</h2>
        <p className="text-zinc-500 tracking-wide">Tailor your artificial intelligence experience.</p>
      </div>

      <div className="space-y-10">
        <div className="space-y-4">
          <label className="block text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">Intelligence Model</label>
          <div className="relative">
            <select 
              value={selectedModel} 
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-zinc-100 focus:outline-none focus:border-[#D4AF37]/50 appearance-none cursor-pointer transition-all tracking-wide"
            >
              <option value="gemini-3-flash-preview">Gemini 3 Flash</option>
              <option value="gemini-3.1-flash-lite-preview">Gemini 3 Flash-Lite</option>
              <option value="gemini-3.1-pro-preview">Gemini 3.1 Pro</option>
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
              <Sparkles size={18} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">Authentication</label>
          <button 
            onClick={handleSelectKey}
            className="w-full p-5 rounded-2xl bg-white/5 text-zinc-100 font-medium border border-white/10 hover:bg-white/10 transition-all flex items-center justify-between group"
          >
            <span className="tracking-wide">Manage API Credentials</span>
            <div className="w-8 h-8 rounded-full gold-button flex items-center justify-center group-hover:scale-110 transition-transform">
              <SettingsIcon size={14} />
            </div>
          </button>
          <p className="text-xs text-zinc-600 italic tracking-wide">
            A valid API key from a paid Google Cloud project is required for advanced reasoning models.
          </p>
        </div>
      </div>
    </div>
  );
}
