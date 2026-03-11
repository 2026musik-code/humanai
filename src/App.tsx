/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import AdminPanel from './components/AdminPanel';
import Registration from './components/Registration';
import Settings from './components/Settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState('gemini-3-flash-preview');

  return (
    <div className="flex h-screen bg-black text-zinc-100 font-sans luxury-gradient">
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        setCurrentPage={setCurrentPage}
      />
      <div className="flex-1 flex flex-col h-full relative">
        <header className="flex items-center p-6 border-b border-white/5 lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-zinc-400 hover:text-white transition-colors">
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-xl font-serif italic tracking-widest gold-text">HUMAN AI</h1>
        </header>
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto h-full">
            {currentPage === 'chat' && <Chat selectedModel={selectedModel} />}
            {currentPage === 'admin' && <AdminPanel />}
            {currentPage === 'registration' && <Registration />}
            {currentPage === 'settings' && <Settings selectedModel={selectedModel} setSelectedModel={setSelectedModel} />}
          </div>
        </main>
      </div>
    </div>
  );
}
