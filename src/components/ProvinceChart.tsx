import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'MAPUTO', value: 1200 },
  { name: 'GAZA', value: 2800 },
  { name: 'INHAM', value: 2100 },
  { name: 'SOFALA', value: 3500 },
  { name: 'TETE', value: 800 },
  { name: 'MANICA', value: 1600 },
  { name: 'NAMP', value: 2400 },
];

const ProvinceChart = () => {
  return (
    <div className="glass-card p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-black text-white tracking-tight uppercase">Alertas por Província</h3>
          <p className="text-sm text-gray-500 font-medium">Distribuição de incidentes em todo o país</p>
        </div>
        <span className="text-xs font-bold text-[#ec5b13] bg-[#ec5b13]/10 px-2.5 py-1 rounded-full border border-[#ec5b13]/20">
          Dados em Tempo Real
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 10, fontWeight: 700 }}
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(236, 91, 19, 0.05)' }}
              contentStyle={{ 
                backgroundColor: 'rgba(15, 10, 7, 0.9)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 3 ? '#ec5b13' : 'rgba(255,255,255,0.1)'} 
                  className="hover:fill-[#ec5b13] transition-colors duration-300"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProvinceChart;
