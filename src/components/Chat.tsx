import { useState } from 'react';
import { Send, Image as ImageIcon, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

export default function Chat({ selectedModel }: { selectedModel: string }) {
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string, image?: string}[]>([]);
  const [input, setInput] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input && !image) return;

    const userMessage = { role: 'user' as const, text: input, image: image || undefined };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setImage(null);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      
      const contents: any = { parts: [] };
      if (image) {
        contents.parts.push({ inlineData: { mimeType: 'image/jpeg', data: image.split(',')[1] } });
      }
      if (input) {
        contents.parts.push({ text: input });
      }

      const response = await ai.models.generateContent({
        model: selectedModel,
        contents: contents,
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || 'No response' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Error: Could not get response.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-full glass-card rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50">
      <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
        <div>
          <h2 className="text-lg font-serif italic gold-text tracking-wider">AI Intelligence</h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest">{selectedModel}</p>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-hide">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
            <Sparkles className="text-[#D4AF37] w-12 h-12" />
            <h3 className="text-2xl font-serif italic">How may I assist you this evening?</h3>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              p-5 rounded-3xl max-w-[85%] lg:max-w-[70%] shadow-xl
              ${msg.role === 'user' 
                ? 'gold-button rounded-tr-none text-black' 
                : 'bg-white/10 backdrop-blur-md border border-white/10 rounded-tl-none text-zinc-100'}
            `}>
              {msg.image && <img src={msg.image} className="max-w-full rounded-2xl mb-3 border border-black/20" alt="Uploaded" />}
              <p className="text-sm leading-relaxed tracking-wide font-medium">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-4 rounded-2xl flex items-center gap-3 text-zinc-500 italic text-sm">
              <Loader2 className="animate-spin" size={16} />
              <span>Synthesizing response...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white/5 border-t border-white/5">
        <div className="flex items-center gap-3 bg-black/40 p-2 rounded-full border border-white/10 focus-within:border-[#D4AF37]/50 transition-all">
          <label className="cursor-pointer p-3 text-zinc-400 hover:text-[#D4AF37] transition-colors">
            <ImageIcon size={22} />
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Inquire something..." 
            className="flex-1 bg-transparent py-3 px-2 text-zinc-100 placeholder:text-zinc-600 focus:outline-none text-sm tracking-wide"
          />
          <button 
            onClick={sendMessage} 
            disabled={loading || (!input && !image)}
            className="p-3 rounded-full gold-button disabled:opacity-30 disabled:grayscale"
          >
            <Send size={18} />
          </button>
        </div>
        {image && (
          <div className="mt-4 flex items-center gap-2 p-2 bg-white/5 rounded-xl border border-white/10 w-fit">
            <img src={image} className="w-12 h-12 object-cover rounded-lg" alt="Preview" />
            <button onClick={() => setImage(null)} className="text-xs text-red-400 hover:text-red-300 px-2">Remove</button>
          </div>
        )}
      </div>
    </div>
  );
}
