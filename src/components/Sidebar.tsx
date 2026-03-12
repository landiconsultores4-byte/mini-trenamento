import React from 'react';
import { 
  LayoutDashboard, 
  Bell, 
  Map, 
  FileText, 
  Settings, 
  LogOut,
  AlertTriangle,
  Users,
  Shield,
  MessageSquare,
  BarChart3,
  Terminal,
  Code
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, onLogout }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Painel de Controle' },
    { id: 'map', icon: Map, label: 'Mapa Nacional' },
    { id: 'alerts', icon: Bell, label: 'Monitor de Alertas' },
    { id: 'users', icon: Users, label: 'Gestão de Utilizadores' },
    { id: 'complaints', icon: MessageSquare, label: 'Gestão de Denúncias' },
    { id: 'stats', icon: BarChart3, label: 'Estatísticas Nacionais' },
    { id: 'logs', icon: Terminal, label: 'Logs de Sistema' },
    { id: 'api', icon: Code, label: 'Integração API' },
  ];

  const systemItems = [
    { id: 'settings', icon: Settings, label: 'Configurações' },
  ];

  return (
    <aside className="w-64 bg-[#1a110c] border-r border-[#2d1e16] flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-[#ec5b13] p-2 rounded-lg">
          <AlertTriangle className="text-white w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-white">
          SOS <span className="text-[#ec5b13]">MZ</span>
        </h2>
      </div>

      <div className="flex-1 px-4 space-y-8 py-4">
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-4">
            Menu Principal
          </div>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  activeView === item.id 
                    ? 'bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeView === item.id ? 'fill-[#ec5b13]/20' : ''}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-4">
            Sistema
          </div>
          <nav className="space-y-1">
            {systemItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  activeView === item.id 
                    ? 'bg-[#ec5b13]/10 text-[#ec5b13] border border-[#ec5b13]/20' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-[#2d1e16] space-y-2">
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[#ec5b13]/20 flex items-center justify-center border border-[#ec5b13]/30 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/admin/100/100" 
              alt="User avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">Maputo HQ</p>
            <p className="text-xs text-gray-500 truncate">Administrador</p>
          </div>
        </div>
        
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors font-medium"
        >
          <LogOut className="w-5 h-5" />
          <span>Sair do Sistema</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
