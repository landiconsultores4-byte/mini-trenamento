import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Users, 
  Plus, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  Stethoscope,
  Shield,
  Flame,
  LifeBuoy,
  MapPin,
  Activity,
  History,
  Calendar
} from 'lucide-react';

const alertRecords = [
  {
    id: '#MZ-9821',
    user: { name: 'João Muthemba', initials: 'JM', color: 'bg-amber-500' },
    module: { type: 'MEDICAL', icon: Stethoscope, color: 'bg-red-500/20 text-red-500' },
    province: 'Maputo City',
    gps: '-25.9692, 32.5732',
    dateTime: 'Oct 27, 2023 14:20:05',
    status: 'ACTIVE',
    statusColor: 'text-amber-500'
  },
  {
    id: '#MZ-9820',
    user: { name: 'Maria Sitoe', initials: 'MS', color: 'bg-blue-500' },
    module: { type: 'SECURITY', icon: Shield, color: 'bg-blue-500/20 text-blue-500' },
    province: 'Beira',
    gps: '-19.8317, 34.8369',
    dateTime: 'Oct 27, 2023 13:45:12',
    status: 'RESOLVED',
    statusColor: 'text-green-500'
  },
  {
    id: '#MZ-9819',
    user: { name: 'Carlos Tembe', initials: 'CT', color: 'bg-orange-500' },
    module: { type: 'FIRE', icon: Flame, color: 'bg-orange-500/20 text-orange-500' },
    province: 'Nampula',
    gps: '-15.1165, 39.2662',
    dateTime: 'Oct 27, 2023 12:30:55',
    status: 'ACTIVE',
    statusColor: 'text-amber-500'
  },
  {
    id: '#MZ-9818',
    user: { name: 'Elena Mondlane', initials: 'EM', color: 'bg-purple-500' },
    module: { type: 'RESCUE', icon: LifeBuoy, color: 'bg-purple-500/20 text-purple-500' },
    province: 'Inhambane',
    gps: '-23.8648, 35.3833',
    dateTime: 'Oct 27, 2023 11:15:22',
    status: 'RESOLVED',
    statusColor: 'text-green-500'
  }
];

const AlertManagement = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter italic uppercase">
            Controle de <span className="text-[#ec5b13]">Resposta</span> de Emergência
          </h1>
          <p className="text-gray-500 mt-1 font-medium">Sistema de vigilância e gestão de alertas em tempo real para Moçambique</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#ec5b13] text-white rounded-xl font-bold hover:bg-[#ff7a3a] transition-all shadow-xl shadow-[#ec5b13]/20">
          <Plus className="w-5 h-5" />
          Novo Alerta Manual
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card p-6 relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Alertas Ativos</p>
            <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center">
              <span className="text-[10px] font-bold text-red-500">12/36</span>
            </div>
          </div>
          <p className="text-4xl font-black text-white tracking-tighter">24</p>
          <p className="text-xs text-red-500 font-bold mt-2 flex items-center gap-1">
            <Activity className="w-3 h-3" /> +12% desde a última hora
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card-green p-6 relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Resolvidos Hoje</p>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-4xl font-black text-white tracking-tighter">142</p>
          <p className="text-xs text-green-500 font-bold mt-2 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" /> +8% meta atingida
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card p-6 relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Tempo Médio de Resposta</p>
            <Clock className="w-5 h-5 text-[#ec5b13]" />
          </div>
          <p className="text-4xl font-black text-white tracking-tighter">8m 22s</p>
          <p className="text-xs text-gray-500 font-bold mt-2">— Sem alterações</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="glass-card-orange color-bleed-orange p-6 relative overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Unidades Operacionais</p>
            <Users className="w-5 h-5 text-[#ec5b13]" />
          </div>
          <p className="text-4xl font-black text-white tracking-tighter">56</p>
          <p className="text-xs text-[#ec5b13] font-bold mt-2 flex items-center gap-1">
            <Users className="w-3 h-3" /> Alta capacidade
          </p>
        </motion.div>
      </div>

      {/* Alert Records Table */}
      <div className="glass-card overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <h3 className="text-xl font-black text-white tracking-tight uppercase">Registros de Alerta</h3>
          <div className="flex flex-wrap gap-3">
            <select className="bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-300 px-4 py-2.5 focus:ring-1 focus:ring-[#ec5b13]/50">
              <option>Província: Maputo</option>
            </select>
            <select className="bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-300 px-4 py-2.5 focus:ring-1 focus:ring-[#ec5b13]/50">
              <option>Módulo: Médico</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-300 hover:bg-white/10 transition-colors">
              <Calendar className="w-4 h-4" />
              Data: Últimas 24h
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#ec5b13] rounded-xl text-xs font-bold text-white hover:bg-[#ff7a3a] transition-colors">
              <Filter className="w-4 h-4" />
              Estado: Ativo
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">ID do Alerta</th>
                <th className="px-6 py-4">Usuário</th>
                <th className="px-6 py-4">Módulo</th>
                <th className="px-6 py-4">Província</th>
                <th className="px-6 py-4">Localização GPS</th>
                <th className="px-6 py-4">Data/Hora</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {alertRecords.map((record, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-[#ec5b13]">{record.id}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${record.user.color} flex items-center justify-center text-[10px] font-bold text-white`}>
                        {record.user.initials}
                      </div>
                      <span className="text-sm font-bold text-gray-200">{record.user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${record.module.color}`}>
                      <record.module.icon className="w-3 h-3" />
                      <span className="text-[10px] font-bold">{record.module.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-400">{record.province}</td>
                  <td className="px-6 py-5 text-xs text-gray-500 italic font-mono">{record.gps}</td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-gray-300">{record.dateTime.split(' ')[0]} {record.dateTime.split(' ')[1]} {record.dateTime.split(' ')[2]}</p>
                    <p className="text-[10px] text-gray-500">{record.dateTime.split(' ')[3]}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`flex items-center gap-2 ${record.statusColor} text-[10px] font-bold`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${record.statusColor.replace('text', 'bg')} ${record.status === 'ACTIVE' ? 'animate-pulse' : ''}`}></span>
                      {record.status === 'ACTIVE' ? 'ATIVO' : 'RESOLVIDO'}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {record.status === 'ACTIVE' && (
                        <button className="px-4 py-1.5 bg-white text-black text-[10px] font-bold rounded-lg hover:bg-gray-200 transition-colors">
                          RESOLVER
                        </button>
                      )}
                      <button className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors">
                        DETALHES
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-gray-500">Mostrando <span className="text-gray-300 font-bold">1 a 4</span> de 482 alertas ativos</p>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-500 hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 bg-[#ec5b13] text-white text-xs font-bold rounded-lg">1</button>
            <button className="w-8 h-8 bg-white/5 border border-white/10 text-gray-400 text-xs font-bold rounded-lg hover:bg-white/10">2</button>
            <button className="w-8 h-8 bg-white/5 border border-white/10 text-gray-400 text-xs font-bold rounded-lg hover:bg-white/10">3</button>
            <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-500 hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Hotspots and Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-[#ec5b13]" />
            <h3 className="text-lg font-black text-white uppercase tracking-tight">Pontos Críticos Ativos</h3>
          </div>
          <div className="relative h-64 bg-white/5 rounded-xl overflow-hidden border border-white/10">
            {/* Minimal Map Placeholder */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/map/800/400')] bg-cover grayscale"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-12 h-12 bg-red-500/20 rounded-full animate-ping absolute -inset-0"></div>
                <div className="w-12 h-12 bg-red-500/40 rounded-full flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 left-1/2 -translate-x-1/2 glass-card-orange color-bleed-orange p-3 shadow-2xl w-40 z-10"
                >
                  <p className="text-xs font-bold text-white">Crise em Inhambane</p>
                  <p className="text-[10px] text-gray-400 mt-1">3 unidades de resgate ativas</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-6">
            <History className="w-5 h-5 text-[#ec5b13]" />
            <h3 className="text-lg font-black text-white uppercase tracking-tight">Logs do Sistema</h3>
          </div>
          <div className="space-y-6">
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#ec5b13] rounded-full ring-4 ring-[#0f0a07]"></div>
              <p className="text-xs font-bold text-white">Unidade #42 Despachada</p>
              <p className="text-[10px] text-gray-500 mt-1">Dirigindo-se ao alerta #MZ-9821</p>
              <p className="text-[9px] text-[#ec5b13] font-bold mt-2 uppercase">2 minutos atrás</p>
            </div>
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-green-500 rounded-full ring-4 ring-[#0f0a07]"></div>
              <p className="text-xs font-bold text-green-500">Alerta #MZ-9818 Resolvido</p>
              <p className="text-[10px] text-gray-500 mt-1">Resolução: Extração médica de emergência bem-sucedida</p>
              <p className="text-[9px] text-gray-500 font-bold mt-2 uppercase">15 minutos atrás</p>
            </div>
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full ring-4 ring-[#0f0a07]"></div>
              <p className="text-xs font-bold text-white">Backup do Banco de Dados</p>
              <p className="text-[10px] text-gray-500 mt-1">Backup diário agendado concluído com sucesso</p>
              <p className="text-[9px] text-gray-500 font-bold mt-2 uppercase">1 hora atrás</p>
            </div>
          </div>
          <button className="w-full mt-8 py-3 border border-white/10 text-gray-400 text-[10px] font-bold rounded-xl hover:bg-white/5 transition-colors uppercase tracking-widest">
            Ver Log de Auditoria Completo
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-12 border-t border-[#2d1e16] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase">
          <Shield className="w-3 h-3" />
          Portal de Administração Seguro V2.4.0 • Ministério da Saúde, MZ
        </div>
        <div className="flex gap-6 text-[10px] font-bold text-gray-500 uppercase">
          <a href="#" className="hover:text-white transition-colors">Protocolo de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Centro de Ajuda</a>
          <a href="#" className="hover:text-white transition-colors">Status do Sistema</a>
        </div>
      </div>
    </div>
  );
};

export default AlertManagement;
