import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  UserPlus, 
  MapPin, 
  Phone, 
  Calendar,
  Shield,
  Trash2,
  Edit3,
  ExternalLink
} from 'lucide-react';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: '1', nome: 'João Teodoro', telefone: '+258 84 123 4567', provincia: 'Maputo', distrito: 'Kamavota', data_registo: '2023-10-15', status: 'ativo', role: 'admin' },
    { id: '2', nome: 'Maria Mutola', telefone: '+258 82 987 6543', provincia: 'Gaza', distrito: 'Xai-Xai', data_registo: '2023-11-02', status: 'ativo', role: 'user' },
    { id: '3', nome: 'Carlos Tembe', telefone: '+258 87 456 7890', provincia: 'Sofala', distrito: 'Beira', data_registo: '2023-11-10', status: 'inativo', role: 'user' },
    { id: '4', nome: 'Ana Paula', telefone: '+258 84 333 2222', provincia: 'Nampula', distrito: 'Nampula', data_registo: '2023-11-12', status: 'ativo', role: 'user' },
    { id: '5', nome: 'Samuel Eto', telefone: '+258 85 111 0000', provincia: 'Tete', distrito: 'Moatize', data_registo: '2023-11-15', status: 'ativo', role: 'user' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Gestão de Utilizadores</h1>
          <p className="text-gray-500 mt-1">Administre as contas dos utilizadores e permissões do sistema.</p>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-3 bg-[#ec5b13] text-white rounded-xl font-bold hover:bg-[#ff7a3a] transition-all shadow-xl shadow-[#ec5b13]/20">
          <UserPlus className="w-4 h-4" />
          Adicionar Administrador
        </button>
      </div>

      {/* Filters & Search */}
      <div className="glass-card p-4 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Procurar por nome, telefone ou província..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1a110c] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-gray-400 hover:text-white transition-all">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
          <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold text-gray-400 outline-none">
            <option>Todas as Províncias</option>
            <option>Maputo</option>
            <option>Gaza</option>
            <option>Sofala</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="glass-card rounded-2xl border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Utilizador</th>
                <th className="px-6 py-4">Localização</th>
                <th className="px-6 py-4">Contacto</th>
                <th className="px-6 py-4">Data Registo</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ec5b13]/10 flex items-center justify-center border border-[#ec5b13]/20">
                        <span className="text-sm font-bold text-[#ec5b13]">{user.nome.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white flex items-center gap-2">
                          {user.nome}
                          {user.role === 'admin' && <Shield className="w-3 h-3 text-blue-500" />}
                        </p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-tighter">{user.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{user.provincia}, {user.distrito}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Phone className="w-3 h-3" />
                      <span className="text-xs">{user.telefone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{user.data_registo}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      user.status === 'ativo' ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-500'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-blue-500/10 rounded-lg text-gray-400 hover:text-blue-500 transition-all">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-gray-500">Mostrando 5 de 1,240 utilizadores</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400 hover:text-white">Anterior</button>
            <button className="px-3 py-1 bg-[#ec5b13] text-white rounded text-xs font-bold">1</button>
            <button className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400 hover:text-white">2</button>
            <button className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400 hover:text-white">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
