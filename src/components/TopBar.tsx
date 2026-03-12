import React from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  User,
  AlertTriangle,
  ChevronDown
} from 'lucide-react';

interface TopBarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: 'dashboard', label: 'Command Center' },
    { id: 'map', label: 'Live Map' },
    { id: 'reports', label: 'Historical Reports' },
    { id: 'stats', label: 'Analytics' },
  ];

  return (
    <header className="h-16 bg-[#140c08] border-b border-white/5 flex items-center px-6 justify-between z-20">
      {/* Logo & Nav */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveView('dashboard')}>
          <div className="bg-[#ec5b13] p-1.5 rounded-lg shadow-lg shadow-[#ec5b13]/20">
            <AlertTriangle className="text-white w-5 h-5" />
          </div>
          <h1 className="text-lg font-black tracking-tight text-white uppercase">
            SOS <span className="text-gray-500">Moçambique</span>
          </h1>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`text-[11px] font-black uppercase tracking-widest transition-all relative py-5 ${
                activeView === item.id ? 'text-[#ec5b13]' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {item.label}
              {activeView === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ec5b13] shadow-[0_0_8px_rgba(236,91,19,0.5)]"></div>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Search & Actions */}
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
          <input 
            type="text" 
            placeholder="Search incidents or provinces.."
            className="bg-[#1a110c] border border-white/5 rounded-xl pl-12 pr-4 py-2 text-xs text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none w-64 transition-all"
          />
        </div>

        <div className="flex items-center gap-3 border-l border-white/5 pl-6">
          <button className="p-2 bg-white/5 rounded-xl text-gray-500 hover:text-white relative">
            <Bell className="w-4 h-4" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#140c08]"></div>
          </button>
          <button className="p-2 bg-white/5 rounded-xl text-gray-500 hover:text-white">
            <Settings className="w-4 h-4" />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-white/5 pl-6 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-black text-white leading-none">C. Rodrigues</p>
            <p className="text-[9px] font-bold text-gray-600 uppercase tracking-tighter mt-1">SUPERINTENDENT</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#ec5b13]/10 border border-[#ec5b13]/20 overflow-hidden group-hover:border-[#ec5b13]/50 transition-all">
            <img 
              src="https://picsum.photos/seed/super/100/100" 
              alt="Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
