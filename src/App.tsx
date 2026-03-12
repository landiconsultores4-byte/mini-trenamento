/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Zap, 
  AlertTriangle, 
  CheckCircle,
  Calendar,
  Download,
  Map as MapIcon,
  Bell,
  FileText,
  Settings as SettingsIcon
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import KPICard from './components/KPICard';
import AlertsChart from './components/AlertsChart';
import ProvinceChart from './components/ProvinceChart';
import RecentActivityTable from './components/RecentActivityTable';
import MapMonitoring from './components/MapMonitoring';
import AlertManagement from './components/AlertManagement';
import UserManagement from './components/UserManagement';
import SecurityConsole from './components/SecurityConsole';
import ProvinceOverview from './components/ProvinceOverview';
import SettingsView from './components/SettingsView';
import ReportsView from './components/ReportsView';
import NationalMap from './components/NationalMap';
import ComplaintsManagement from './components/ComplaintsManagement';
import SystemLogs from './components/SystemLogs';
import ApiIntegration from './components/ApiIntegration';
import LandingPage from './components/LandingPage';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isDashboardMode, setIsDashboardMode] = useState(false);

  if (!isDashboardMode) {
    return <LandingPage onEnterDashboard={() => setIsDashboardMode(true)} />;
  }

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-3xl font-bold text-white tracking-tight">Visão Geral de Estatísticas Nacionais</h1>
          <p className="text-gray-500 mt-1">Sistema de monitoramento de emergência em tempo real em todas as províncias.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-3"
        >
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2d1e16] rounded-lg text-sm font-semibold text-gray-300 hover:bg-[#3d2a1f] transition-colors border border-[#3d2a1f]">
            <Calendar className="w-4 h-4" />
            Últimos 30 Dias
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#ec5b13] text-white rounded-lg text-sm font-semibold hover:bg-[#ff7a3a] transition-all shadow-lg shadow-[#ec5b13]/20">
            <Download className="w-4 h-4" />
            Exportar Relatório
          </button>
        </motion.div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          icon={Users}
          label="Total de Usuários Registrados"
          value="1,248,302"
          trend="2.4%"
          iconBg="bg-blue-500/10"
          iconColor="text-blue-500"
        />
        <KPICard 
          icon={Zap}
          label="Total de Sinais SOS"
          value="45,203"
          trend="12.1%"
          iconBg="bg-[#ec5b13]/10"
          iconColor="text-[#ec5b13]"
        />
        <KPICard 
          icon={AlertTriangle}
          label="Alertas Ativos"
          value="128"
          trend="128"
          trendUp={false}
          highlighted={true}
          iconBg="bg-red-500/10"
          iconColor="text-red-500"
        />
        <KPICard 
          icon={CheckCircle}
          label="Incidentes Resolvidos"
          value="45,075"
          trend="15.3%"
          iconBg="bg-green-500/10"
          iconColor="text-green-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <AlertsChart />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <ProvinceChart />
        </motion.div>
      </div>

      {/* Table Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <RecentActivityTable />
      </motion.div>
    </div>
  );

  const renderPlaceholder = (title: string, icon: any) => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4"
    >
      <div className="p-6 bg-[#ec5b13]/10 rounded-full">
        {React.createElement(icon, { className: "w-16 h-16 text-[#ec5b13]" })}
      </div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-gray-500 max-w-md">
        Esta seção está atualmente em desenvolvimento. Dados em tempo real para {title.toLowerCase()} serão exibidos aqui.
      </p>
      <button 
        onClick={() => setCurrentView('dashboard')}
        className="px-6 py-2 bg-[#2d1e16] text-gray-300 rounded-lg hover:bg-[#3d2a1f] transition-colors"
      >
        Voltar ao Painel
      </button>
    </motion.div>
  );

  return (
    <div className="flex min-h-screen bg-[#1a110c] text-gray-100 font-sans">
      <Sidebar activeView={currentView} setActiveView={setCurrentView} onLogout={() => setIsDashboardMode(false)} />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <div className="flex-1 overflow-y-auto p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {currentView === 'dashboard' && renderDashboard()}
              {currentView === 'users' && <UserManagement />}
              {currentView === 'map' && <NationalMap />}
              {currentView === 'alerts' && <AlertManagement />}
              {currentView === 'provinces' && <ProvinceOverview />}
              {currentView === 'complaints' && <ComplaintsManagement />}
              {currentView === 'stats' && <ReportsView />}
              {currentView === 'reports' && <ReportsView />}
              {currentView === 'logs' && <SystemLogs />}
              {currentView === 'api' && <ApiIntegration />}
              {currentView === 'settings' && <SettingsView />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
