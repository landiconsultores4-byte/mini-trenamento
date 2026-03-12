import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Navigation, 
  Layers, 
  Crosshair,
  Plus,
  Minus,
  Target,
  Zap
} from 'lucide-react';

const NationalMap = () => {
  const [activeProvince, setActiveProvince] = useState('Maputo');

  const provinces = [
    'Maputo', 'Gaza', 'Inhambane', 'Sofala', 'Manica', 'Tete', 'Zambezia', 'Nampula', 'Niassa', 'Cabo Delgado'
  ];

  const markers = [
    { id: 1, type: 'critical', lat: 40, lng: 45 },
    { id: 2, type: 'high', lat: 60, lng: 70 },
    { id: 3, type: 'active', lat: 50, lng: 55 },
    { id: 4, type: 'resolved', lat: 75, lng: 80 },
  ];

  return (
    <div className="h-full flex flex-col gap-4 relative">
      {/* Province Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {provinces.map((prov) => (
          <button
            key={prov}
            onClick={() => setActiveProvince(prov)}
            className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
              activeProvince === prov 
                ? 'bg-[#ec5b13] text-white shadow-lg shadow-[#ec5b13]/20' 
                : 'bg-[#2d1e16] text-gray-500 hover:text-gray-300'
            }`}
          >
            {prov}
          </button>
        ))}
      </div>

      {/* Map Area */}
      <div className="flex-1 bg-[#140c08] rounded-2xl border border-white/5 relative overflow-hidden">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <Globe className="w-[80%] h-[80%] text-[#ec5b13]" />
        </div>

        {/* Stats Overlays */}
        <div className="absolute top-6 right-6 flex gap-4 z-10">
          <div className="bg-[#140c08]/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 rounded-xl bg-[#ec5b13]/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#ec5b13]" />
            </div>
            <div>
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Total Emergencies</p>
              <p className="text-xl font-black text-white">1,248</p>
            </div>
          </div>

          <div className="bg-[#140c08]/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Response Time</p>
              <p className="text-xl font-black text-white">4m 12s</p>
            </div>
          </div>
        </div>

        {/* Map Markers */}
        {markers.map((marker) => (
          <motion.div
            key={marker.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute"
            style={{ top: `${marker.lat}%`, left: `${marker.lng}%` }}
          >
            <div className="relative flex items-center justify-center">
              <div className={`absolute w-8 h-8 rounded-full animate-ping opacity-20 ${
                marker.type === 'critical' ? 'bg-red-500' :
                marker.type === 'high' ? 'bg-amber-500' :
                marker.type === 'active' ? 'bg-[#ec5b13]' : 'bg-gray-500'
              }`}></div>
              <div className={`w-4 h-4 rounded-full border-2 border-white shadow-2xl ${
                marker.type === 'critical' ? 'bg-red-500' :
                marker.type === 'high' ? 'bg-amber-500' :
                marker.type === 'active' ? 'bg-[#ec5b13]' : 'bg-gray-500'
              }`}></div>
            </div>
          </motion.div>
        ))}

        {/* Map Legend */}
        <div className="absolute bottom-6 left-6 bg-[#140c08]/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl shadow-2xl z-10 w-48">
          <h4 className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-3">Map Legend</h4>
          <div className="space-y-2">
            {[
              { color: 'bg-red-500', label: 'Critical (Unassigned)' },
              { color: 'bg-amber-500', label: 'High Priority' },
              { color: 'bg-[#ec5b13]', label: 'Active Response' },
              { color: 'bg-gray-500', label: 'Resolved / Closed' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                <span className="text-[10px] font-bold text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
          <button className="p-3 bg-[#140c08] border border-white/5 rounded-xl text-gray-500 hover:text-white shadow-2xl"><Plus className="w-4 h-4" /></button>
          <button className="p-3 bg-[#140c08] border border-white/5 rounded-xl text-gray-500 hover:text-white shadow-2xl"><Minus className="w-4 h-4" /></button>
          <div className="h-2"></div>
          <button className="p-3 bg-[#140c08] border border-white/5 rounded-xl text-[#ec5b13] shadow-2xl"><Target className="w-4 h-4" /></button>
          <button className="p-3 bg-[#140c08] border border-white/5 rounded-xl text-gray-500 hover:text-white shadow-2xl"><Layers className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
};

const Globe = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default NationalMap;
