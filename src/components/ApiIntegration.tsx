import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Database, 
  Key, 
  Copy, 
  CheckCircle2,
  ExternalLink,
  Terminal
} from 'lucide-react';

const ApiIntegration = () => {
  const endpoints = [
    { method: 'POST', path: '/api/v1/sos/alert', desc: 'Envia um novo alerta SOS com coordenadas GPS.', auth: 'API Key' },
    { method: 'GET', path: '/api/v1/users/{id}', desc: 'Recupera o perfil completo de um utilizador.', auth: 'JWT Token' },
    { method: 'POST', path: '/api/v1/reports/evidence', desc: 'Faz o upload de evidências multimédia.', auth: 'API Key' },
    { method: 'GET', path: '/api/v1/provinces/stats', desc: 'Estatísticas agregadas por província.', auth: 'Public' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Integração API</h1>
          <p className="text-gray-500 mt-1">Documentação técnica e monitorização dos endpoints do sistema.</p>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-xl">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-bold text-green-500 uppercase tracking-widest">API Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* API Keys Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <Key className="w-4 h-4 text-[#ec5b13]" />
              Chaves de Acesso
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Client ID</label>
                <div className="flex gap-2">
                  <input readOnly value="sos_mz_prod_8829" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs font-mono text-gray-300 outline-none" />
                  <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-gray-500 hover:text-white"><Copy className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Secret Key</label>
                <div className="flex gap-2">
                  <input readOnly type="password" value="************************" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs font-mono text-gray-300 outline-none" />
                  <button className="p-2 bg-white/5 border border-white/10 rounded-xl text-gray-500 hover:text-white"><Copy className="w-4 h-4" /></button>
                </div>
              </div>
              <button className="w-full py-3 bg-[#ec5b13] text-white text-xs font-bold rounded-xl hover:bg-[#ff7a3a] transition-all shadow-xl shadow-[#ec5b13]/20 uppercase tracking-widest mt-2">
                Gerar Novas Credenciais
              </button>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Uso da API (24h)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-xs text-gray-500">Requisições</span>
                <span className="text-lg font-black text-white">45,201</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[65%] h-full bg-[#ec5b13]"></div>
              </div>
              <p className="text-[10px] text-gray-500 italic">65% da quota diária utilizada.</p>
            </div>
          </div>
        </div>

        {/* Endpoints Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#ec5b13]" />
              Documentação de Endpoints
            </h3>
            <div className="space-y-4">
              {endpoints.map((ep, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-xl hover:border-white/20 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                        ep.method === 'POST' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
                      }`}>
                        {ep.method}
                      </span>
                      <code className="text-xs font-mono text-white">{ep.path}</code>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase">{ep.auth}</span>
                  </div>
                  <p className="text-xs text-gray-400">{ep.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Exemplo de Implementação (cURL)</h3>
            <div className="bg-[#1a110c] p-4 rounded-xl border border-white/10 font-mono text-[11px] text-gray-400 overflow-x-auto">
              <p className="text-blue-400">curl</p> -X POST https://api.sos.gov.mz/v1/sos/alert \
              <br />  -H <span className="text-amber-500">"Content-Type: application/json"</span> \
              <br />  -H <span className="text-amber-500">"X-API-Key: YOUR_API_KEY"</span> \
              <br />  -d <span className="text-amber-500">{`'{ "type": "women", "lat": -25.9, "lng": 32.5 }'`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegration;
