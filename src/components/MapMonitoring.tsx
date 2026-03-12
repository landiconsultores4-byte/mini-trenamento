import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Plus, 
  Minus, 
  Target, 
  Layers,
  Download,
  Search,
  Bell,
  Settings,
  ShieldAlert,
  Zap
} from 'lucide-react';

const alerts = [
  {
    id: '#MZ-8921',
    status: 'EMERGÊNCIA CRÍTICA',
    time: '2m atrás',
    description: 'Província de Inhambane, Maxixe. Sinal SOS detectado do Módulo de Segurança da Mulher.',
    tags: ['MULHERES', 'DESPACHANDO'],
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    id: '#MZ-8919',
    status: 'ALTA PRIORIDADE',
    time: '12m atrás',
    description: 'Cidade de Maputo, Polana. Emergência médica relatada via portal móvel.',
    tags: ['GERAL', 'A CAMINHO'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10'
  },
  {
    id: '#MZ-8918',
    status: 'EMERGÊNCIA CRÍTICA',
    time: '18m atrás',
    description: 'Beira, Sofala. Múltiplos sinais de socorro de distrito inundado.',
    tags: ['RESGATE', 'RESPONDENDO'],
    color: 'text-red-500',
    bgColor: 'bg-red-500/10'
  },
  {
    id: '#MZ-8912',
    status: 'RESOLVIDO',
    time: '45m atrás',
    description: 'Nampula, Distrito 4. Alarme falso verificado por unidades locais.',
    tags: ['HOMENS'],
    color: 'text-gray-400',
    bgColor: 'bg-gray-400/10'
  }
];

const provinces = ['Maputo', 'Gaza', 'Inhambane', 'Sofala', 'Manica', 'Tete', 'Zambézia', 'Nampula'];

const MapMonitoring = () => {
  const [activeProvince, setActiveProvince] = useState('Maputo');

  return (
    <div className="flex h-full bg-[#0d0907] text-gray-300 overflow-hidden rounded-xl border border-[#2d1e16]">
      {/* Left Alerts Sidebar */}
      <div className="w-80 border-r border-[#2d1e16] flex flex-col bg-[#140e0a]">
        <div className="p-4 border-b border-[#2d1e16]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#ec5b13]" />
              Alertas Ativos
            </h3>
            <span className="text-[10px] font-bold bg-red-500/20 text-red-500 px-2 py-0.5 rounded">AO VIVO: 12</span>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-1.5 text-[10px] font-bold bg-[#ec5b13] text-white rounded uppercase">Crítico</button>
            <button className="flex-1 py-1.5 text-[10px] font-bold bg-[#2d1e16] text-gray-400 rounded uppercase hover:bg-[#3d2a1f]">Pendente</button>
            <button className="flex-1 py-1.5 text-[10px] font-bold bg-[#2d1e16] text-gray-400 rounded uppercase hover:bg-[#3d2a1f]">Histórico</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {alerts.map((alert, idx) => (
            <div key={idx} className="space-y-2 group cursor-pointer">
              <div className="flex justify-between items-center">
                <span className={`text-[10px] font-bold flex items-center gap-1 ${alert.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${alert.color.replace('text', 'bg')} ${alert.status === 'EMERGÊNCIA CRÍTICA' ? 'animate-pulse' : ''}`}></span>
                  {alert.status}
                </span>
                <span className="text-[10px] text-gray-500">{alert.time}</span>
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-[#ec5b13] transition-colors">Incidente {alert.id}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{alert.description}</p>
              <div className="flex gap-2">
                {alert.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold bg-[#2d1e16] text-gray-400 px-2 py-0.5 rounded border border-[#3d2a1f] uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-[#2d1e16]">
          <button className="w-full py-3 bg-[#ec5b13] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#ff7a3a] transition-all shadow-lg shadow-[#ec5b13]/10">
            <Download className="w-4 h-4" />
            Exportar Logs de Comando
          </button>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-[#0d0907]">
        {/* Province Selector Overlay */}
        <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
          <div className="flex gap-2 bg-[#1a110c]/80 backdrop-blur-md p-1 rounded-xl border border-[#2d1e16]">
            {provinces.map(p => (
              <button
                key={p}
                onClick={() => setActiveProvince(p)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeProvince === p 
                    ? 'bg-[#ec5b13] text-white shadow-lg shadow-[#ec5b13]/20' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <div className="bg-[#1a110c]/80 backdrop-blur-md p-3 rounded-xl border border-[#2d1e16] flex items-center gap-4">
              <div className="p-2 bg-[#ec5b13]/20 text-[#ec5b13] rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Total de Emergências</p>
                <p className="text-xl font-bold text-white leading-none">1,248</p>
              </div>
            </div>
            <div className="bg-[#1a110c]/80 backdrop-blur-md p-3 rounded-xl border border-[#2d1e16] flex items-center gap-4">
              <div className="p-2 bg-green-500/20 text-green-500 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Tempo de Resposta</p>
                <p className="text-xl font-bold text-white leading-none">4m 12s</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stylized Map SVG */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <svg viewBox="0 0 800 1000" className="w-full h-full max-h-[80%] fill-[#2d1e16] stroke-[#3d2a1f] stroke-width-1">
            <path d="M400,100 L450,150 L480,200 L500,300 L520,400 L550,500 L530,600 L500,700 L450,800 L400,900 L350,850 L300,750 L280,650 L250,550 L280,450 L320,350 L350,250 Z" />
            {/* Markers */}
            <circle cx="450" cy="350" r="8" fill="#ec5b13" className="animate-pulse" />
            <circle cx="350" cy="650" r="8" fill="#ec5b13" className="animate-pulse" />
            <circle cx="550" cy="250" r="8" fill="#3b82f6" />
            <circle cx="500" cy="450" r="8" fill="#f59e0b" />
          </svg>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-6 left-6 bg-[#1a110c]/80 backdrop-blur-md p-4 rounded-xl border border-[#2d1e16] w-56">
          <p className="text-[10px] font-bold text-gray-500 uppercase mb-3">Legenda do Mapa</p>
          <div className="space-y-2">
            {[
              { label: 'Crítico (Não Atribuído)', color: 'bg-red-500' },
              { label: 'Alta Prioridade', color: 'bg-amber-500' },
              { label: 'Resposta Ativa', color: 'bg-blue-500' },
              { label: 'Resolvido / Fechado', color: 'bg-gray-500' }
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                <span className="text-[10px] font-medium text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2">
          <button className="p-2 bg-[#1a110c]/80 backdrop-blur-md rounded-lg border border-[#2d1e16] hover:bg-[#2d1e16] text-gray-400">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 bg-[#1a110c]/80 backdrop-blur-md rounded-lg border border-[#2d1e16] hover:bg-[#2d1e16] text-gray-400">
            <Minus className="w-5 h-5" />
          </button>
          <div className="h-2"></div>
          <button className="p-2 bg-[#1a110c]/80 backdrop-blur-md rounded-lg border border-[#2d1e16] hover:bg-[#2d1e16] text-[#ec5b13]">
            <Target className="w-5 h-5" />
          </button>
          <button className="p-2 bg-[#1a110c]/80 backdrop-blur-md rounded-lg border border-[#2d1e16] hover:bg-[#2d1e16] text-gray-400">
            <Layers className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapMonitoring;
