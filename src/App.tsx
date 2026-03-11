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

export default function App() {
  const [currentPage, setCurrentPage] = useState('chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100">
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        setCurrentPage={setCurrentPage}
      />
      <div className="flex-1 flex flex-col h-full">
        <header className="flex items-center p-4 border-b border-zinc-800 lg:hidden">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-zinc-400 hover:text-white">
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-lg font-bold">HUMAN AI</h1>
        </header>
        <main className="flex-1 p-4 overflow-y-auto">
          {currentPage === 'chat' && <Chat />}
          {currentPage === 'admin' && <AdminPanel />}
          {currentPage === 'registration' && <Registration />}
        </main>
      </div>
    </div>
  );
}
