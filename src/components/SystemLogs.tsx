import React from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  Shield, 
  Clock, 
  Globe, 
  Activity, 
  User, 
  AlertCircle,
  Search,
  Filter,
  Download
} from 'lucide-react';

const SystemLogs = () => {
  const logs = [
    { id: 1, admin: 'João Teodoro', acao: 'Login no Sistema', ip: '197.235.12.45', data: '2023-11-22 10:15:22', status: 'success' },
    { id: 2, admin: 'João Teodoro', acao: 'Aprovação de Alerta #INC-202', ip: '197.235.12.45', data: '2023-11-22 10:20:05', status: 'success' },
    { id: 3, admin: 'Sistema', acao: 'Backup Automático', ip: '127.0.0.1', data: '2023-11-22 11:00:00', status: 'success' },
    { id: 4, admin: 'Maria Mutola', acao: 'Alteração de Permissões', ip: '197.235.44.12', data: '2023-11-22 11:15:30', status: 'warning' },
    { id: 5, admin: 'Desconhecido', acao: 'Tentativa de Login Falhada', ip: '45.122.3.1', data: '2023-11-22 11:20:12', status: 'error' },
    { id: 6, admin: 'João Teodoro', acao: 'Exportação de Relatório Mensal', ip: '197.235.12.45', data: '2023-11-22 11:45:00', status: 'success' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Logs de Sistema</h1>
          <p className="text-gray-500 mt-1">Auditoria completa de todas as ações realizadas no painel administrativo.</p>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all">
          <Download className="w-4 h-4" />
          Exportar Logs (CSV)
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Activity className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Ações Hoje</p>
            <p className="text-2xl font-black text-white">1,245</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="p-3 bg-red-500/10 rounded-xl">
            <AlertCircle className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Erros/Alertas</p>
            <p className="text-2xl font-black text-white">12</p>
          </div>
        </div>
        <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="p-3 bg-green-500/10 rounded-xl">
            <Shield className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Sessões Ativas</p>
            <p className="text-2xl font-black text-white">8</p>
          </div>
        </div>
      </div>

      {/* Logs Table */}
      <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
        <div className="p-4 border-b border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Filtrar por admin, ação ou IP..."
              className="w-full bg-[#1a110c] border border-white/10 rounded-xl pl-12 pr-4 py-2 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white">
              <Filter className="w-4 h-4" />
            </button>
            <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white">
              <Clock className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Data/Hora</th>
                <th className="px-6 py-4">Administrador</th>
                <th className="px-6 py-4">Ação Realizada</th>
                <th className="px-6 py-4">Endereço IP</th>
                <th className="px-6 py-4">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 text-[11px] text-gray-400">{log.data}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-[#ec5b13]" />
                      <span className="text-xs font-bold text-white">{log.admin}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-300">{log.acao}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Globe className="w-3 h-3" />
                      <span className="text-[11px]">{log.ip}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`w-2 h-2 rounded-full ${
                      log.status === 'success' ? 'bg-green-500' : 
                      log.status === 'warning' ? 'bg-amber-500' : 'bg-red-500'
                    } shadow-[0_0_8px_rgba(0,0,0,0.5)]`}></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 bg-[#1a110c] border-t border-white/5 flex items-center gap-3">
          <Terminal className="w-4 h-4 text-gray-600" />
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">Fim da transmissão de logs em tempo real</p>
        </div>
      </div>
    </div>
  );
};

export default SystemLogs;
