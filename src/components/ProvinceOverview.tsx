import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Users, 
  Zap, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
  Search,
  Filter
} from 'lucide-react';

const provinceData = [
  { name: 'Maputo Cidade', users: '245,302', sos: 12, resolved: 1450, risk: 'Baixo', color: 'text-green-500' },
  { name: 'Maputo Província', users: '182,104', sos: 8, resolved: 980, risk: 'Baixo', color: 'text-green-500' },
  { name: 'Gaza', users: '98,450', sos: 15, resolved: 420, risk: 'Médio', color: 'text-amber-500' },
  { name: 'Inhambane', users: '112,300', sos: 24, resolved: 560, risk: 'Alto', color: 'text-red-500' },
  { name: 'Sofala', users: '156,700', sos: 18, resolved: 890, risk: 'Médio', color: 'text-amber-500' },
  { name: 'Manica', users: '89,200', sos: 5, resolved: 340, risk: 'Baixo', color: 'text-green-500' },
  { name: 'Tete', users: '76,400', sos: 7, resolved: 290, risk: 'Baixo', color: 'text-green-500' },
  { name: 'Zambézia', users: '210,500', sos: 32, resolved: 1100, risk: 'Crítico', color: 'text-red-600' },
  { name: 'Nampula', users: '289,400', sos: 21, resolved: 1350, risk: 'Alto', color: 'text-red-500' },
  { name: 'Niassa', users: '45,200', sos: 3, resolved: 180, risk: 'Baixo', color: 'text-green-500' },
  { name: 'Cabo Delgado', users: '134,800', sos: 45, resolved: 720, risk: 'Crítico', color: 'text-red-600' },
];

const ProvinceOverview = () => {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Visão Geral das Províncias</h1>
          <p className="text-gray-500 mt-1">Estatísticas detalhadas e estado de prontidão por região.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Pesquisar província..." 
              className="bg-[#2d1e16]/50 border border-white/5 rounded-xl text-xs font-medium text-gray-300 pl-10 pr-4 py-2.5 w-64 focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
            />
          </div>
          <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid of Provinces */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {provinceData.map((province, index) => (
          <motion.div
            key={province.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className={`glass-card p-6 rounded-2xl relative overflow-hidden group transition-all duration-300 ${
              province.risk === 'Crítico' ? 'border-red-500/30' : 
              province.risk === 'Alto' ? 'border-orange-500/30' : 
              'border-white/5'
            }`}
          >
            {/* Background Glow for Critical/High Risk */}
            {(province.risk === 'Crítico' || province.risk === 'Alto') && (
              <div className={`absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-20 rounded-full ${
                province.risk === 'Crítico' ? 'bg-red-600' : 'bg-orange-500'
              }`} />
            )}

            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  province.risk === 'Crítico' ? 'bg-red-500/10' : 
                  province.risk === 'Alto' ? 'bg-orange-500/10' : 
                  'bg-[#ec5b13]/10'
                }`}>
                  <MapPin className={`w-5 h-5 ${
                    province.risk === 'Crítico' ? 'text-red-500' : 
                    province.risk === 'Alto' ? 'text-orange-500' : 
                    'text-[#ec5b13]'
                  }`} />
                </div>
                <h3 className="font-bold text-white text-lg tracking-tight">{province.name}</h3>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded ${
                province.risk === 'Crítico' ? 'bg-red-500/20 text-red-500' : 
                province.risk === 'Alto' ? 'bg-orange-500/20 text-orange-500' : 
                province.risk === 'Médio' ? 'bg-amber-500/20 text-amber-500' : 
                'bg-green-500/20 text-green-500'
              }`}>
                {province.risk}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">Utilizadores</span>
                </div>
                <span className="text-sm font-bold text-gray-200">{province.users}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <Zap className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">SOS Ativos</span>
                </div>
                <span className={`text-sm font-bold ${province.sos > 20 ? 'text-red-500' : 'text-gray-200'}`}>
                  {province.sos}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">Resolvidos</span>
                </div>
                <span className="text-sm font-bold text-gray-200">{province.resolved}</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[10px] font-bold text-green-500">
                <TrendingUp className="w-3 h-3" />
                <span>+4.2%</span>
              </div>
              <button className="text-[10px] font-bold text-[#ec5b13] uppercase tracking-widest hover:underline flex items-center gap-1">
                Ver Detalhes
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="glass-card p-8 rounded-2xl border border-white/5">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-bold text-white">Análise de Risco Nacional</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Atualmente, as províncias de <span className="text-red-500 font-bold">Cabo Delgado</span> e <span className="text-red-500 font-bold">Zambézia</span> apresentam o maior volume de sinais SOS ativos. Recomenda-se o reforço das unidades de resposta nestas regiões.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-600"></div>
                <span className="text-xs font-bold text-gray-400">2 Críticas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-xs font-bold text-gray-400">2 Altas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-xs font-bold text-gray-400">2 Médias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-bold text-gray-400">5 Baixas</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-64 h-32 bg-[#ec5b13]/5 rounded-xl border border-[#ec5b13]/10 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Prontidão Geral</p>
              <p className="text-4xl font-black text-white">84%</p>
              <div className="w-32 h-1 bg-[#2d1e16] rounded-full mt-2 overflow-hidden mx-auto">
                <div className="h-full bg-[#ec5b13] w-[84%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvinceOverview;
