import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Phone, 
  AlertCircle, 
  MapPin, 
  Heart, 
  UserPlus, 
  Lock,
  ChevronRight,
  Zap
} from 'lucide-react';

interface LandingPageProps {
  onEnterDashboard: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnterDashboard }) => {
  return (
    <div className="min-h-screen bg-[#0f0a07] text-white selection:bg-[#ec5b13]/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f0a07]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#ec5b13] rounded-xl flex items-center justify-center shadow-lg shadow-[#ec5b13]/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">SOS Moçambique</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#services" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <button 
            onClick={onEnterDashboard}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all"
          >
            <Lock className="w-4 h-4" />
            Acesso Admin
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#ec5b13]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ec5b13]/10 border border-[#ec5b13]/20 rounded-full text-[#ec5b13] text-xs font-bold uppercase tracking-widest mb-8"
          >
            <AlertCircle className="w-4 h-4" />
            Sistema Nacional de Emergência
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            PROTEÇÃO EM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec5b13] to-[#ff7a3a]">TEMPO REAL</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            A plataforma oficial de segurança de Moçambique. Envie alertas SOS instantâneos para as autoridades em situações de perigo.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-[#ec5b13] text-white rounded-2xl text-lg font-bold hover:bg-[#ff7a3a] transition-all shadow-2xl shadow-[#ec5b13]/30 flex items-center justify-center gap-3 group">
              <Phone className="w-6 h-6" />
              ENVIAR SOS AGORA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <UserPlus className="w-6 h-6" />
              REGISTAR-SE
            </button>
          </motion.div>
        </div>
      </section>

      {/* Emergency Types */}
      <section id="services" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Canais de Emergência Especializados</h2>
            <p className="text-gray-500">Alertas direcionados para equipas de resposta rápida.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'SOS Mulher',
                desc: 'Canal dedicado à proteção contra violência doméstica e assédio.',
                icon: Heart,
                color: 'text-pink-500',
                bg: 'bg-pink-500/10'
              },
              {
                title: 'SOS Homem',
                desc: 'Assistência em situações de perigo iminente ou violência.',
                icon: Shield,
                color: 'text-blue-500',
                bg: 'bg-blue-500/10'
              },
              {
                title: 'Casamento Prematuro',
                desc: 'Denúncia anónima e proteção de menores em risco.',
                icon: AlertCircle,
                color: 'text-amber-500',
                bg: 'bg-amber-500/10'
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 glass-card rounded-3xl border border-white/5 group cursor-pointer"
              >
                <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                <div className="flex items-center gap-2 text-[#ec5b13] font-bold text-sm group-hover:gap-3 transition-all">
                  Saber mais <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Utilizadores', value: '1.2M+' },
            { label: 'Províncias', value: '11' },
            { label: 'Alertas Resolvidos', value: '45K+' },
            { label: 'Tempo de Resposta', value: '< 5min' }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-[#ec5b13]" />
            <span className="font-bold tracking-tighter uppercase">SOS Moçambique</span>
          </div>
          <p className="text-gray-500 text-sm">© 2026 Governo de Moçambique. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
