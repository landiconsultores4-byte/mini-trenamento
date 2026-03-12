import React from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Image as ImageIcon, 
  Video, 
  Mic, 
  MapPin, 
  Calendar, 
  User, 
  ExternalLink,
  CheckCircle2,
  XCircle,
  MessageSquare
} from 'lucide-react';

const ComplaintsManagement = () => {
  const complaints = [
    { 
      id: 'REP-001', 
      user: 'Maria Mutola', 
      tipo: 'Violência Doméstica', 
      descricao: 'Vítima relata agressões físicas recorrentes por parte do cônjuge. Necessita de intervenção imediata e abrigo.', 
      data: '2023-11-22 10:30', 
      provincia: 'Maputo',
      status: 'pendente',
      evidencias: [
        { tipo: 'foto', url: 'https://picsum.photos/seed/ev1/400/300' },
        { tipo: 'audio', url: '#' }
      ]
    },
    { 
      id: 'REP-002', 
      user: 'Anónimo', 
      tipo: 'Casamento Prematuro', 
      descricao: 'Denúncia de casamento forçado envolvendo uma menor de 14 anos agendado para o próximo fim de semana.', 
      data: '2023-11-21 15:45', 
      provincia: 'Nampula',
      status: 'em_analise',
      evidencias: [
        { tipo: 'foto', url: 'https://picsum.photos/seed/ev2/400/300' }
      ]
    },
    { 
      id: 'REP-003', 
      user: 'Carlos Tembe', 
      tipo: 'Assédio', 
      descricao: 'Relato de assédio persistente no local de trabalho.', 
      data: '2023-11-20 09:00', 
      provincia: 'Sofala',
      status: 'resolvido',
      evidencias: []
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Gestão de Denúncias</h1>
          <p className="text-gray-500 mt-1">Analise e processe denúncias e evidências submetidas pelos utilizadores.</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-[#2d1e16] p-1 rounded-xl border border-white/5 flex">
            <button className="px-4 py-2 text-xs font-bold bg-[#ec5b13] text-white rounded-lg shadow-lg">Pendentes</button>
            <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-300 transition-colors">Resolvidas</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {complaints.map((complaint) => (
          <motion.div 
            key={complaint.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col lg:flex-row"
          >
            {/* Main Info */}
            <div className="flex-1 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-[#ec5b13] uppercase tracking-widest">
                    {complaint.id}
                  </span>
                  <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${
                    complaint.status === 'pendente' ? 'bg-red-500/20 text-red-500' : 
                    complaint.status === 'em_analise' ? 'bg-blue-500/20 text-blue-500' : 
                    'bg-green-500/20 text-green-500'
                  }`}>
                    {complaint.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {complaint.data}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {complaint.provincia}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-2">{complaint.tipo}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{complaint.descricao}</p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-xs font-bold text-gray-300">{complaint.user}</span>
                </div>
                <div className="flex gap-2 ml-auto">
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-xl text-xs font-bold hover:bg-green-500/20 transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                    Resolver
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-xl text-xs font-bold hover:bg-blue-500/20 transition-all">
                    <MessageSquare className="w-4 h-4" />
                    Contactar
                  </button>
                  <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Evidence Sidebar */}
            <div className="w-full lg:w-80 bg-white/5 border-l border-white/5 p-6">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Evidências Anexadas</h4>
              {complaint.evidencias.length > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  {complaint.evidencias.map((ev, idx) => (
                    <div key={idx} className="relative group cursor-pointer aspect-square rounded-xl overflow-hidden border border-white/10">
                      {ev.tipo === 'foto' ? (
                        <img src={ev.url} alt="Evidência" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      ) : (
                        <div className="w-full h-full bg-[#1a110c] flex items-center justify-center">
                          {ev.tipo === 'audio' ? <Mic className="w-6 h-6 text-[#ec5b13]" /> : <Video className="w-6 h-6 text-[#ec5b13]" />}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-32 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-2">
                  <FileText className="w-6 h-6 text-gray-600" />
                  <span className="text-[10px] text-gray-600 font-bold uppercase">Sem evidências</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ComplaintsManagement;
