import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Activity, 
  AlertTriangle, 
  Lock, 
  Zap, 
  Terminal, 
  Globe, 
  Server,
  Database,
  Wifi,
  Eye,
  FileSearch,
  Cpu,
  Network
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const logData = [
  { timestamp: '[2023-11-20 14:22:01]', user: 'admin_jt', ip: '192.168.1.44', action: 'Acesso concedido: Configuração do firewall atualizada (Regra #412)', type: 'success' },
  { timestamp: '[2023-11-20 14:21:55]', user: 'system_daemon', ip: '127.0.0.1', action: 'Verificação de integridade de rotina: Nenhuma anomalia detectada no Setor 7', type: 'info' },
  { timestamp: '[2023-11-20 14:20:12]', user: 'unknown_entity', ip: '45.233.12.102', action: 'TENTATIVA DE LOGIN FALHOU: Múltiplas tentativas do Nó de Maputo', type: 'error' },
  { timestamp: '[2023-11-20 14:18:44]', user: 'm_fernando', ip: '192.168.1.102', action: 'Acesso ao painel: Métricas de visão geral solicitadas', type: 'success' },
  { timestamp: '[2023-11-20 14:15:30]', user: 'system_daemon', ip: '127.0.0.1', action: 'Backup concluído: Logs de auditoria de segurança criptografados e armazenados', type: 'success' },
  { timestamp: '[2023-11-20 14:12:11]', user: 'admin_jt', ip: '192.168.1.44', action: 'Inicialização da sessão: Handshake do terminal concluído', type: 'info' },
  { timestamp: '[2023-11-20 14:05:01]', user: 'guest_user_1', ip: '192.168.5.12', action: 'Acesso somente leitura: Visualizando nó de relatório público', type: 'info' },
  { timestamp: '[2023-11-20 13:59:44]', user: 'root', ip: '127.0.0.1', action: 'Patch de kernel aplicado: Mitigação CVE-2023-44487 implantada', type: 'success' },
];

const trafficData = [
  { time: '00:00', intensity: 20 },
  { time: '04:00', intensity: 15 },
  { time: '08:00', intensity: 45 },
  { time: '12:00', intensity: 30 },
  { time: '16:00', intensity: 60 },
  { time: '20:00', intensity: 40 },
  { time: '23:59', intensity: 80 },
];

const nodeData = [
  { name: 'Active', value: 14, color: '#ec5b13' },
  { name: 'Inactive', value: 2, color: '#2d1e16' },
];

const SecurityConsole = () => {
  return (
    <div className="space-y-6 pb-12 font-sans selection:bg-[#ec5b13] selection:text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-[#ec5b13] p-2 rounded-lg shadow-lg shadow-[#ec5b13]/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight uppercase italic">
              SOS Moçambique <span className="text-[#ec5b13]">Segurança</span>
            </h1>
            <div className="flex gap-4 mt-1">
              <span className="text-[10px] font-bold text-[#ec5b13] uppercase tracking-widest border-b-2 border-[#ec5b13] pb-1 cursor-pointer">Painel</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-gray-300 cursor-pointer transition-colors">Explorador de Logs</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-gray-300 cursor-pointer transition-colors">Mapas de Ameaças</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest hover:text-gray-300 cursor-pointer transition-colors">Incidentes</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Pesquisar logs..." 
            className="bg-[#1a110c] border border-[#2d1e16] rounded-xl text-xs font-medium text-gray-300 pl-10 pr-4 py-2.5 w-64 focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
          />
          <FileSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        </div>
      </div>

      {/* Security KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-xl relative overflow-hidden group hover:border-green-500/30 transition-all">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Saúde do Sistema</p>
            <Activity className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-black text-white tracking-tight">99.8%</p>
            <p className="text-[10px] font-bold text-green-500 mb-1">+0.2%</p>
          </div>
        </div>

        <div className="glass-card p-5 rounded-xl relative overflow-hidden group hover:border-orange-500/30 transition-all">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Ameaças Ativas</p>
            <AlertTriangle className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-black text-white tracking-tight">02</p>
            <p className="text-[10px] font-bold text-gray-500 mb-1">Faixa Normal</p>
          </div>
        </div>

        <div className="glass-card p-5 rounded-xl relative overflow-hidden group hover:border-amber-500/30 transition-all">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Falhas de Autenticação</p>
            <Lock className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-black text-white tracking-tight">12</p>
            <p className="text-[10px] font-bold text-green-500 mb-1">-15% ↓</p>
          </div>
        </div>

        <div className="glass-card-orange color-bleed-orange p-5 rounded-xl relative overflow-hidden group transition-all">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tempo de Resposta</p>
            <Zap className="w-4 h-4 text-[#ec5b13] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-black text-white tracking-tight">24ms</p>
            <p className="text-[10px] font-bold text-gray-400 mb-1">Latência Média</p>
          </div>
        </div>
      </div>

      {/* Main Console Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Terminal Log Viewer */}
        <div className="lg:col-span-3 bg-[#0a0705]/80 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="text-[10px] font-mono text-gray-500">root@sos-moz-sec:~/logs/auth.log</div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ec5b13] animate-pulse"></div>
              <span className="text-[9px] font-bold text-[#ec5b13] uppercase tracking-widest">Monitoramento em Tempo Real</span>
            </div>
          </div>
          <div className="p-6 font-mono text-[11px] overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 uppercase tracking-widest border-b border-white/5">
                  <th className="pb-3 font-bold">Timestamp</th>
                  <th className="pb-3 font-bold">Usuário</th>
                  <th className="pb-3 font-bold">Endereço IP</th>
                  <th className="pb-3 font-bold">Ação Realizada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-transparent">
                {logData.map((log, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-2 text-gray-500 whitespace-nowrap">{log.timestamp}</td>
                    <td className={`py-2 font-bold ${log.type === 'error' ? 'text-orange-500' : 'text-green-500'}`}>{log.user}</td>
                    <td className="py-2 text-blue-400">{log.ip}</td>
                    <td className={`py-2 ${
                      log.type === 'error' ? 'text-red-500' : 
                      log.type === 'success' ? 'text-green-400' : 
                      'text-cyan-400'
                    }`}>
                      {log.action}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4} className="py-4 text-[#ec5b13] animate-pulse font-bold">{'> _'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Panels */}
        <div className="space-y-6">
          {/* Traffic Analysis */}
          <div className="glass-card p-5 rounded-xl">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Análise de Tráfego</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[10px] font-bold mb-1.5">
                  <span className="text-gray-400">Entrada</span>
                  <span className="text-green-500">450 Mbps</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[75%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-bold mb-1.5">
                  <span className="text-gray-400">Saída</span>
                  <span className="text-blue-500">124 Mbps</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[35%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>
              <div className="h-24 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trafficData}>
                    <Line 
                      type="monotone" 
                      dataKey="intensity" 
                      stroke="#ec5b13" 
                      strokeWidth={2} 
                      dot={false} 
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-center text-[8px] font-bold text-gray-600 uppercase tracking-widest mt-2">Intensidade de Pacotes (24h)</p>
              </div>
            </div>
          </div>

          {/* Node Distribution */}
          <div className="glass-card p-5 rounded-xl">
            <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Distribuição de Nós</h3>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={nodeData}
                      innerRadius={25}
                      outerRadius={35}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {nodeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <p className="text-2xl font-black text-white">14</p>
                <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Nós Ativos</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center text-[10px] font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ec5b13] shadow-[0_0_5px_#ec5b13]"></div>
                  <span className="text-gray-400">Sede Maputo</span>
                </div>
                <span className="text-green-500">Online</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
                  <span className="text-gray-400">Filial Beira</span>
                </div>
                <span className="text-green-500">Online</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_5px_#f59e0b]"></div>
                  <span className="text-gray-400">Nó de Nampula</span>
                </div>
                <span className="text-amber-500">Sincronizando</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="glass-card rounded-xl p-5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Incidentes de Segurança Recentes</h3>
          <button className="text-[10px] font-bold text-[#ec5b13] hover:underline uppercase tracking-widest">Exportar Relatório</button>
        </div>
        <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-orange-500/30 transition-all">
          <div className="flex items-center gap-4">
            <div className="bg-orange-500/20 p-2.5 rounded-lg group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Força Bruta Detectada</p>
              <p className="text-xs text-gray-500">Alvo: Nó Interno do BD • Origem: IP Externo 45.***</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Alto Risco</p>
            <p className="text-[10px] text-gray-600 mt-1">14:20 PM</p>
          </div>
        </div>
      </div>

      {/* Security Footer */}
      <div className="pt-6 border-t border-[#2d1e16] flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em]">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-green-500">
            <div className="w-1 h-1 rounded-full bg-green-500"></div>
            Conexão DB: Estável
          </div>
          <div className="flex items-center gap-2 text-green-500">
            <div className="w-1 h-1 rounded-full bg-green-500"></div>
            Firewall: Ativo
          </div>
          <div className="flex items-center gap-2 text-blue-500">
            <div className="w-1 h-1 rounded-full bg-blue-500"></div>
            IDS: Monitorando
          </div>
        </div>
        <div className="text-gray-600">
          Versão do Sistema: 4.2.0-STABLE | © 2023 Segurança Cibernética SOS Moçambique
        </div>
      </div>
    </div>
  );
};

export default SecurityConsole;
