import { X, MessageSquare, Shield, UserPlus, Settings, Sparkles } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  setCurrentPage: (page: string) => void;
}

export default function Sidebar({ isOpen, toggleSidebar, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { id: 'chat', label: 'AI Assistant', icon: MessageSquare },
    { id: 'admin', label: 'Admin Panel', icon: Shield },
    { id: 'registration', label: 'Registration', icon: UserPlus },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-72 bg-black border-r border-white/5 z-50 transition-transform duration-500 ease-in-out lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gold-button flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                <Sparkles size={20} />
              </div>
              <h1 className="text-2xl font-serif italic gold-text tracking-widest">HUMAN AI</h1>
            </div>
            <button onClick={toggleSidebar} className="lg:hidden text-zinc-500 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  toggleSidebar();
                }}
                className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all group"
              >
                <item.icon size={20} className="group-hover:text-[#D4AF37] transition-colors" />
                <span className="font-medium tracking-wide">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-white/5">
            <div className="p-4 rounded-2xl glass-card">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-zinc-300">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
