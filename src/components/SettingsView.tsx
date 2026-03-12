import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Database, 
  Save, 
  Smartphone, 
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

const SettingsView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Perfil do Usuário', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'regional', label: 'Regional & Idioma', icon: Globe },
    { id: 'system', label: 'Sistema & API', icon: Database },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">Configurações do Sistema</h1>
        <p className="text-gray-500 mt-1">Gerencie suas preferências de conta e configurações globais do portal.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="w-full lg:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-[#ec5b13] text-white shadow-lg shadow-[#ec5b13]/20' 
                  : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 space-y-6">
          {activeTab === 'profile' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-2xl border border-white/5"
            >
              <h3 className="text-xl font-bold text-white mb-6">Informações do Perfil</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nome Completo</label>
                  <input 
                    type="text" 
                    defaultValue="João Teodoro"
                    className="w-full bg-[#2d1e16]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Cargo / Função</label>
                  <input 
                    type="text" 
                    defaultValue="Administrador de Resposta"
                    className="w-full bg-[#2d1e16]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Endereço de E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="email" 
                      defaultValue="joao.teodoro@sos.gov.mz"
                      className="w-full bg-[#2d1e16]/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Número de Telefone</label>
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input 
                      type="text" 
                      defaultValue="+258 84 123 4567"
                      className="w-full bg-[#2d1e16]/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#ec5b13] text-white rounded-xl font-bold hover:bg-[#ff7a3a] transition-all shadow-xl shadow-[#ec5b13]/20">
                  <Save className="w-4 h-4" />
                  Salvar Alterações
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-2xl border border-white/5 space-y-8"
            >
              <h3 className="text-xl font-bold text-white">Preferências de Alerta</h3>
              
              <div className="space-y-6">
                {[
                  { title: 'Alertas SOS Críticos', desc: 'Notificações imediatas para sinais de emergência de alto risco.', default: true },
                  { title: 'Relatórios Diários', desc: 'Resumo matinal das atividades de todas as províncias.', default: true },
                  { title: 'Alertas de Sistema', desc: 'Notificações sobre manutenção e integridade do banco de dados.', default: false },
                  { title: 'Novos Usuários', desc: 'Notificar quando um novo administrador for registrado.', default: false },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-[#ec5b13] transition-colors">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.default ? 'bg-[#ec5b13]' : 'bg-white/10'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.default ? 'left-7' : 'left-1'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Alterar Palavra-passe</h3>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Palavra-passe Atual</label>
                    <input 
                      type="password" 
                      className="w-full bg-[#2d1e16]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nova Palavra-passe</label>
                    <div className="relative">
                      <input 
                        type={showPassword ? 'text' : 'password'} 
                        className="w-full bg-[#2d1e16]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none"
                      />
                      <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-xl hover:bg-white/10 transition-colors uppercase tracking-widest">
                    Atualizar Palavra-passe
                  </button>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Lock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Autenticação de Dois Factores (2FA)</h4>
                    <p className="text-xs text-gray-500">Adicione uma camada extra de segurança à sua conta.</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors">
                  Configurar
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'regional' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-2xl border border-white/5 space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Localização & Idioma</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Idioma do Portal</label>
                  <select className="w-full bg-[#2d1e16]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none">
                    <option>Português (Moçambique)</option>
                    <option>English (International)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Fuso Horário</label>
                  <select className="w-full bg-[#2d1e16]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:ring-1 focus:ring-[#ec5b13]/50 outline-none">
                    <option>(GMT+02:00) Maputo, Central Africa Time</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'system' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Chaves de API & Integração</h3>
                <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-4 mb-6">
                  <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                  <p className="text-xs text-amber-200/80 leading-relaxed">
                    As chaves de API permitem que sistemas externos acessem os dados de alerta. Nunca compartilhe suas chaves de produção.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-widest">Chave de Produção Principal</p>
                      <p className="text-[10px] font-mono text-gray-500 mt-1">sk_live_51N********************</p>
                    </div>
                    <button className="text-[10px] font-bold text-[#ec5b13] uppercase tracking-widest hover:underline">Revogar</button>
                  </div>
                  <button className="w-full py-3 border border-dashed border-white/10 text-gray-500 text-xs font-bold rounded-xl hover:bg-white/5 transition-colors uppercase tracking-widest">
                    Gerar Nova Chave de API
                  </button>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Estado do Banco de Dados</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-4 border-[#ec5b13]/20 border-t-[#ec5b13] animate-spin"></div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Sincronização em Tempo Real</h4>
                      <p className="text-xs text-gray-500">Último backup realizado há 14 minutos.</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-lg hover:bg-white/10 transition-colors">
                    Forçar Backup
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
