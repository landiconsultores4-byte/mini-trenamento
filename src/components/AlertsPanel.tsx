import React from 'react';
import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Download,
  Clock,
  MapPin,
  ChevronRight
} from 'lucide-react';

interface AlertsPanelProps {
  isFullWidth?: boolean;
}

const AlertsPanel: React.FC<AlertsPanelProps> = ({ isFullWidth = false }) => {
  const alerts = [
    {
      id: 'MZ-8921',
      type: 'CRITICAL EMERGENCY',
      time: '2m ago',
      location: 'Inhambane Province, Maxixe',
      desc: 'SOS signal detected from Women\'s Safety Module.',
      tags: ['WOMEN', 'DISPATCHING'],
      status: 'critical'
    },
    {
      id: 'MZ-8919',
      type: 'HIGH PRIORITY',
      time: '12m ago',
      location: 'Maputo City, Polana',
      desc: 'Medical emergency reported via mobile portal.',
      tags: ['GENERAL', 'EN ROUTE'],
      status: 'high'
    },
    {
      id: 'MZ-8918',
      type: 'CRITICAL EMERGENCY',
      time: '18m ago',
      location: 'Beira, Sofala',
      desc: 'Multiple distress signals from flooded district.',
      tags: ['RESCUE', 'RESPONDING'],
      status: 'critical'
    },
    {
      id: 'MZ-8912',
      type: 'RESOLVED',
      time: '45m ago',
      location: 'Nampula, District 4',
      desc: 'False alarm verified by local units.',
      tags: ['MEN'],
      status: 'resolved'
    }
  ];

  return (
    <div className={`${isFullWidth ? 'w-full' : 'w-[380px]'} bg-[#140c08] border-r border-white/5 flex flex-col h-full`}>
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-[#ec5b13]" />
            <h2 className="text-lg font-bold text-white tracking-tight">Active Alerts</h2>
          </div>
          <span className="bg-red-500/10 text-red-500 text-[10px] font-black px-2 py-0.5 rounded border border-red-500/20">
            LIVE: 12
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded bg-[#ec5b13] text-white shadow-lg shadow-[#ec5b13]/20">
            Critical
          </button>
          <button className="flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded bg-[#2d1e16] text-gray-500 hover:text-gray-300 transition-colors">
            Pending
          </button>
          <button className="flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded bg-[#2d1e16] text-gray-500 hover:text-gray-300 transition-colors">
            History
          </button>
        </div>
      </div>

      {/* Alerts List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {alerts.map((alert) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-4 rounded-xl border transition-all cursor-pointer group ${
              alert.status === 'critical' ? 'bg-red-500/5 border-red-500/10 hover:border-red-500/30' :
              alert.status === 'high' ? 'bg-amber-500/5 border-amber-500/10 hover:border-amber-500/30' :
              'bg-white/5 border-white/5 hover:border-white/10'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[9px] font-black uppercase tracking-tighter ${
                alert.status === 'critical' ? 'text-red-500' :
                alert.status === 'high' ? 'text-amber-500' :
                'text-gray-500'
              }`}>
                ● {alert.type}
              </span>
              <span className="text-[9px] font-bold text-gray-600">{alert.time}</span>
            </div>
            
            <h3 className="text-sm font-bold text-white mb-1">Incident #{alert.id}</h3>
            <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
              {alert.location}. {alert.desc}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {alert.tags.map(tag => (
                  <span key={tag} className="bg-[#2d1e16] text-gray-400 text-[8px] font-black px-2 py-0.5 rounded border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
              <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="p-4 border-t border-white/5">
        <button className="w-full py-3 bg-[#ec5b13] text-white text-xs font-black rounded-xl hover:bg-[#ff7a3a] transition-all shadow-xl shadow-[#ec5b13]/20 flex items-center justify-center gap-2 uppercase tracking-widest">
          <Download className="w-4 h-4" />
          Export Command Logs
        </button>
      </div>
    </div>
  );
};

export default AlertsPanel;
