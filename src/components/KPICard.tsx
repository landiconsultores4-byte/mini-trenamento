import React from 'react';
import { LucideIcon, TrendingUp, AlertCircle } from 'lucide-react';

interface KPICardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
  trendUp?: boolean;
  highlighted?: boolean;
  iconBg: string;
  iconColor: string;
}

const KPICard: React.FC<KPICardProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  trend, 
  trendUp = true,
  highlighted = false,
  iconBg,
  iconColor
}) => {
  return (
    <div className={`p-6 rounded-2xl transition-all duration-300 group ${
      highlighted 
        ? 'glass-card-orange color-bleed-orange' 
        : 'glass-card hover:border-[#ec5b13]/40'
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl transition-transform group-hover:scale-110 ${iconBg} ${iconColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className={`text-xs font-black flex items-center gap-1 px-2 py-1 rounded-full ${
          trendUp ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
        }`}>
          {trendUp ? <TrendingUp className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
          {trend}
        </span>
      </div>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{label}</p>
      <p className="text-3xl font-black mt-1 text-white tracking-tight">{value}</p>
    </div>
  );
};

export default KPICard;
