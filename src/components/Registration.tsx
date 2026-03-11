import { Sparkles } from 'lucide-react';

export default function Registration() {
  return (
    <div className="glass-card rounded-[2rem] p-8 lg:p-12 shadow-2xl max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif italic gold-text tracking-widest mb-4">Join the Elite</h2>
        <p className="text-zinc-500 tracking-wide">Request access to the most advanced human-AI interface.</p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-500 ml-4">Full Name</label>
          <input type="text" placeholder="Your Name" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-zinc-100 focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-zinc-700" />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-500 ml-4">Email Address</label>
          <input type="email" placeholder="you@example.com" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-zinc-100 focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-zinc-700" />
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest text-zinc-500 ml-4">Security Phrase</label>
          <input type="password" placeholder="••••••••" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-zinc-100 focus:outline-none focus:border-[#D4AF37]/50 transition-all placeholder:text-zinc-700" />
        </div>
        
        <div className="pt-6">
          <button type="button" className="w-full p-5 rounded-full gold-button text-lg font-serif italic tracking-widest shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-3 group">
            <span>Scan Face & Register</span>
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}
