import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'MON', value: 100 },
  { name: 'TUE', value: 150 },
  { name: 'WED', value: 120 },
  { name: 'THU', value: 180 },
  { name: 'FRI', value: 140 },
  { name: 'SAT', value: 220 },
  { name: 'SUN', value: 190 },
];

const AlertsChart = () => {
  return (
    <div className="glass-card p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-black text-white tracking-tight uppercase">Alertas SOS ao Longo do Tempo</h3>
          <p className="text-sm text-gray-500 font-medium">Tendência histórica de sinais de emergência</p>
        </div>
        <select className="bg-white/5 border border-white/10 rounded-lg text-sm font-semibold text-gray-300 px-3 py-1.5 focus:ring-1 focus:ring-[#ec5b13]/50">
          <option>Semanal</option>
          <option>Mensal</option>
        </select>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec5b13" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ec5b13" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 10, fontWeight: 700 }}
              dy={10}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(15, 10, 7, 0.9)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
              itemStyle={{ color: '#ec5b13' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#ec5b13" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AlertsChart;
