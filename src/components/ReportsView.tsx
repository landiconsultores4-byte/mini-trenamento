import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Printer, 
  Download, 
  Filter, 
  ChevronDown, 
  Calendar,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Clock,
  BarChart3,
  PieChart as PieChartIcon,
  Search,
  TrendingUp
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

const incidentData = [
  { id: 'INC-2023-001', type: 'Emergência Médica', province: 'Maputo Cidade', status: 'Resolvido', priority: 'Crítico', date: '2023-11-20', time: '14:20', responseTime: '8 min', unit: 'Ambulância 04' },
  { id: 'INC-2023-002', type: 'Assalto/Roubo', province: 'Matola', status: 'Em Investigação', priority: 'Alto', date: '2023-11-20', time: '15:45', responseTime: '12 min', unit: 'PRM Unidade 12' },
  { id: 'INC-2023-003', type: 'Inundação', province: 'Beira', status: 'Ativo', priority: 'Crítico', date: '2023-11-21', time: '09:10', responseTime: '25 min', unit: 'Proteção Civil' },
  { id: 'INC-2023-004', type: 'Acidente Viação', province: 'Xai-Xai', status: 'Resolvido', priority: 'Médio', date: '2023-11-21', time: '11:30', responseTime: '15 min', unit: 'Bombeiros 02' },
  { id: 'INC-2023-005', type: 'Violência Doméstica', province: 'Nampula', status: 'Resolvido', priority: 'Alto', date: '2023-11-22', time: '18:00', responseTime: '10 min', unit: 'Gabinete Atendimento' },
  { id: 'INC-2023-006', type: 'Incêndio', province: 'Tete', status: 'Resolvido', priority: 'Crítico', date: '2023-11-22', time: '20:15', responseTime: '18 min', unit: 'Bombeiros 05' },
];

const statsByProvince = [
  { name: 'Maputo', total: 450, resolved: 430 },
  { name: 'Gaza', total: 210, resolved: 195 },
  { name: 'Inhambane', total: 180, resolved: 170 },
  { name: 'Sofala', total: 320, resolved: 280 },
  { name: 'Tete', total: 150, resolved: 140 },
  { name: 'Nampula', total: 380, resolved: 350 },
];

const incidentTypes = [
  { name: 'Médica', value: 40, color: '#3b82f6' },
  { name: 'Segurança', value: 30, color: '#ef4444' },
  { name: 'Desastres', value: 20, color: '#f59e0b' },
  { name: 'Outros', value: 10, color: '#10b981' },
];

const ReportsView = () => {
  const [filterProvince, setFilterProvince] = useState('Todas');
  const [filterType, setFilterType] = useState('Todos');
  const reportRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 no-print">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Relatórios e Estatísticas</h1>
          <p className="text-gray-500 mt-1">Gere relatórios detalhados de incidentes por província e tipo.</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex bg-[#2d1e16] rounded-xl border border-white/5 p-1">
            <button className="px-4 py-2 text-xs font-bold text-white bg-[#ec5b13] rounded-lg shadow-lg">Visão Geral</button>
            <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-300 transition-colors">Personalizado</button>
          </div>
          
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-white hover:bg-white/10 transition-all"
          >
            <Printer className="w-4 h-4" />
            Imprimir Relatório
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-[#ec5b13] text-white rounded-xl text-sm font-bold hover:bg-[#ff7a3a] transition-all shadow-lg shadow-[#ec5b13]/20">
            <Download className="w-4 h-4" />
            Exportar PDF
          </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="glass-card p-4 rounded-xl border border-white/5 flex flex-wrap gap-4 items-center no-print">
        <div className="flex items-center gap-2 text-gray-500">
          <Filter className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-widest">Filtros:</span>
        </div>
        
        <div className="flex gap-4">
          <select 
            value={filterProvince}
            onChange={(e) => setFilterProvince(e.target.value)}
            className="bg-[#1a110c] border border-white/10 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-300 outline-none focus:ring-1 focus:ring-[#ec5b13]/50"
          >
            <option>Todas as Províncias</option>
            <option>Maputo Cidade</option>
            <option>Maputo Província</option>
            <option>Gaza</option>
            <option>Inhambane</option>
            <option>Sofala</option>
            <option>Nampula</option>
          </select>

          <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-[#1a110c] border border-white/10 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-300 outline-none focus:ring-1 focus:ring-[#ec5b13]/50"
          >
            <option>Todos os Tipos</option>
            <option>Emergência Médica</option>
            <option>Assalto/Roubo</option>
            <option>Inundação</option>
            <option>Incêndio</option>
          </select>

          <div className="flex items-center gap-2 bg-[#1a110c] border border-white/10 rounded-lg px-3 py-1.5">
            <Calendar className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-xs font-semibold text-gray-300">Últimos 30 Dias</span>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div ref={reportRef} className="space-y-8 print:bg-white print:text-black print:p-8">
        {/* Print Header (Only visible when printing) */}
        <div className="hidden print:block border-b-2 border-black pb-6 mb-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-black uppercase italic">SOS Moçambique</h1>
              <p className="text-sm font-bold mt-1">Relatório Oficial de Incidentes e Estatísticas</p>
            </div>
            <div className="text-right text-xs">
              <p>Data de Emissão: {new Date().toLocaleDateString()}</p>
              <p>ID do Relatório: #REP-{Math.floor(Math.random() * 1000000)}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5 print:border-black print:bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest print:text-gray-700">Total de Incidentes</p>
              <FileText className="w-4 h-4 text-[#ec5b13]" />
            </div>
            <p className="text-3xl font-black text-white print:text-black">1,690</p>
            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-green-500">
              <TrendingUp className="w-3 h-3" />
              <span>+8.4% vs mês anterior</span>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 print:border-black print:bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest print:text-gray-700">Taxa de Resolução</p>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </div>
            <p className="text-3xl font-black text-white print:text-black">94.2%</p>
            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-green-500">
              <TrendingUp className="w-3 h-3" />
              <span>+1.2% de melhoria</span>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 print:border-black print:bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest print:text-gray-700">Tempo Médio Resposta</p>
              <Clock className="w-4 h-4 text-blue-500" />
            </div>
            <p className="text-3xl font-black text-white print:text-black">12.5m</p>
            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-blue-500">
              <span>Meta: 10.0m</span>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 print:border-black print:bg-gray-50">
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest print:text-gray-700">Alertas Críticos</p>
              <AlertCircle className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-3xl font-black text-white print:text-black">142</p>
            <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-red-500">
              <span>8.4% do total</span>
            </div>
          </div>
        </div>

        {/* Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-2xl border border-white/5 print:border-black">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2 print:text-black">
              <BarChart3 className="w-4 h-4 text-[#ec5b13]" />
              Incidentes por Província
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsByProvince}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="name" stroke="#6b7280" fontSize={10} fontWeight="bold" />
                  <YAxis stroke="#6b7280" fontSize={10} fontWeight="bold" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a110c', border: '1px solid #ffffff10', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="total" fill="#ec5b13" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="resolved" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5 print:border-black">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2 print:text-black">
              <PieChartIcon className="w-4 h-4 text-[#ec5b13]" />
              Distribuição por Tipo
            </h3>
            <div className="h-64 flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={incidentTypes}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {incidentTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 pr-8">
                {incidentTypes.map((type) => (
                  <div key={type.name} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: type.color }}></div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">{type.name}</span>
                    <span className="text-[10px] font-bold text-white ml-auto">{type.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Incidents Table */}
        <div className="glass-card rounded-2xl border border-white/5 overflow-hidden print:border-black">
          <div className="p-6 border-b border-white/5 flex items-center justify-between print:border-black">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest print:text-black">Lista Detalhada de Incidentes</h3>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 no-print">
              <Search className="w-3 h-3" />
              <span>Mostrando {incidentData.length} registros</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest print:bg-gray-100 print:text-black">
                <tr>
                  <th className="px-6 py-4">ID Incidente</th>
                  <th className="px-6 py-4">Tipo</th>
                  <th className="px-6 py-4">Província</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4">Prioridade</th>
                  <th className="px-6 py-4">Data/Hora</th>
                  <th className="px-6 py-4">Resposta</th>
                  <th className="px-6 py-4">Unidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 print:divide-gray-200">
                {incidentData.map((incident) => (
                  <tr key={incident.id} className="hover:bg-white/5 transition-colors print:text-black">
                    <td className="px-6 py-4 text-xs font-bold text-white print:text-black">{incident.id}</td>
                    <td className="px-6 py-4 text-xs text-gray-300">{incident.type}</td>
                    <td className="px-6 py-4 text-xs text-gray-300">{incident.province}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        incident.status === 'Resolvido' ? 'bg-green-500/20 text-green-500' : 
                        incident.status === 'Ativo' ? 'bg-red-500/20 text-red-500' : 
                        'bg-blue-500/20 text-blue-500'
                      }`}>
                        {incident.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold ${
                        incident.priority === 'Crítico' ? 'text-red-500' : 
                        incident.priority === 'Alto' ? 'text-orange-500' : 
                        'text-blue-500'
                      }`}>
                        {incident.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-500">
                      <div>{incident.date}</div>
                      <div className="text-[10px]">{incident.time}</div>
                    </td>
                    <td className="px-6 py-4 text-xs text-gray-300">{incident.responseTime}</td>
                    <td className="px-6 py-4 text-xs text-gray-500">{incident.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer (Print Only) */}
        <div className="hidden print:block mt-20 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-8">
              <div className="h-px bg-black w-32 mx-auto"></div>
              <p className="text-[10px] font-bold uppercase">Assinatura do Operador</p>
            </div>
            <div className="space-y-8">
              <div className="h-px bg-black w-32 mx-auto"></div>
              <p className="text-[10px] font-bold uppercase">Assinatura do Supervisor</p>
            </div>
            <div className="space-y-8">
              <div className="h-px bg-black w-32 mx-auto"></div>
              <p className="text-[10px] font-bold uppercase">Carimbo Oficial</p>
            </div>
          </div>
          <p className="text-[8px] text-gray-400 mt-12 text-center italic">
            Este documento é confidencial e propriedade do Sistema Nacional de Emergência SOS Moçambique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportsView;
