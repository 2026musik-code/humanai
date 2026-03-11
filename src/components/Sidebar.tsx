import { Menu, User, Settings, MessageSquare, X } from 'lucide-react';

export default function Sidebar({ isOpen, toggleSidebar, setCurrentPage }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggleSidebar}></div>
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-zinc-900 border-r border-zinc-800 p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-0`}>
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-white tracking-tight">HUMAN AI</h1>
          <button onClick={toggleSidebar} className="lg:hidden text-zinc-400"><X /></button>
        </div>
        <nav className="space-y-2">
          {[
            { name: 'Chat', icon: MessageSquare, page: 'chat' },
            { name: 'Admin', icon: User, page: 'admin' },
            { name: 'Registration', icon: User, page: 'registration' },
            { name: 'Settings', icon: Settings, page: 'settings' },
          ].map((item) => (
            <button 
              key={item.name}
              onClick={() => { setCurrentPage(item.page); toggleSidebar(); }} 
              className="flex items-center space-x-3 w-full p-3 rounded-xl text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all"
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
