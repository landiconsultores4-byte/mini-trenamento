import React from 'react';
import { motion } from 'motion/react';

const activities = [
  {
    status: 'Crítico',
    province: 'Cidade de Maputo',
    userId: '#USR-8821',
    type: 'Emergência Médica',
    time: '2 min atrás',
    color: 'text-red-500',
    dotColor: 'bg-red-500'
  },
  {
    status: 'Alto',
    province: 'Beira, Sofala',
    userId: '#USR-4410',
    type: 'Aviso de Inundação',
    time: '14 min atrás',
    color: 'text-amber-500',
    dotColor: 'bg-amber-500'
  },
  {
    status: 'Resolvido',
    province: 'Xai-Xai, Gaza',
    userId: '#USR-1029',
    type: 'Acidente Reportado',
    time: '1 hora atrás',
    color: 'text-green-500',
    dotColor: 'bg-green-500'
  }
];

const RecentActivityTable = () => {
  return (
    <div className="glass-card overflow-hidden">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-lg font-black text-white tracking-tight uppercase">Atividade Recente</h3>
        <button className="text-sm font-bold text-[#ec5b13] hover:text-[#ff7a3a] transition-colors">
          Ver Todos os Alertas
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-white/5 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4">Província</th>
              <th className="px-6 py-4">ID do Usuário</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Hora</th>
              <th className="px-6 py-4 text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {activities.map((activity, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="hover:bg-white/5 transition-colors group"
              >
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-2 ${activity.color} text-sm font-bold`}>
                    <span className={`w-2 h-2 ${activity.dotColor} rounded-full ${activity.status === 'Crítico' ? 'animate-pulse' : ''}`}></span>
                    {activity.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-gray-200">{activity.province}</td>
                <td className="px-6 py-4 text-gray-500">{activity.userId}</td>
                <td className="px-6 py-4 text-gray-300">{activity.type}</td>
                <td className="px-6 py-4 text-gray-500">{activity.time}</td>
                <td className="px-6 py-4 text-right">
                  {activity.status === 'Resolvido' ? (
                    <button className="px-3 py-1.5 bg-[#2d1e16] text-gray-300 text-xs font-bold rounded-lg hover:bg-[#3d2a1f] transition-colors">
                      Detalhes
                    </button>
                  ) : (
                    <button className="px-3 py-1.5 bg-[#ec5b13] text-white text-xs font-bold rounded-lg hover:bg-[#ff7a3a] transition-colors shadow-lg shadow-[#ec5b13]/20">
                      Despachar
                    </button>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivityTable;
