
import React, { useEffect, useState } from 'react';
import { TrendingUp, Zap, Shield, Globe } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label, description, color }) => (
  <div className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 bg-gradient-to-br ${color}`}>
      {icon}
    </div>
    
    <div className="text-4xl font-bold text-white mb-2 tracking-tight">{value}</div>
    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-3">{label}</div>
    <div className="text-slate-300 text-sm leading-relaxed">{description}</div>
    
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </div>
);

const MetricsDisplay = () => {
  const [metrics, setMetrics] = useState({
    activeNodes: 1247,
    processIntegrity: 99.7,
    throughput: 2.4,
    uptime: 99.99
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeNodes: prev.activeNodes + Math.floor(Math.random() * 3),
        processIntegrity: Math.max(99.5, Math.min(100, prev.processIntegrity + (Math.random() - 0.5) * 0.1)),
        throughput: Math.max(2.0, Math.min(3.0, prev.throughput + (Math.random() - 0.5) * 0.1)),
        uptime: Math.max(99.95, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.01))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Performance at Scale
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real-time metrics from our global infrastructure, processing millions of operations 
            with enterprise-grade reliability and performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            icon={<Globe className="w-7 h-7 text-white" />}
            value={metrics.activeNodes.toLocaleString()}
            label="Active Nodes"
            description="Distributed computing nodes operating across global infrastructure"
            color="from-blue-600 to-cyan-600"
          />
          
          <MetricCard
            icon={<Shield className="w-7 h-7 text-white" />}
            value={`${metrics.processIntegrity.toFixed(1)}%`}
            label="System Integrity"
            description="Continuous monitoring ensures optimal performance and security"
            color="from-green-600 to-emerald-600"
          />
          
          <MetricCard
            icon={<Zap className="w-7 h-7 text-white" />}
            value={`${metrics.throughput.toFixed(1)}M/s`}
            label="Throughput"
            description="Operations processed per second across the entire network"
            color="from-purple-600 to-violet-600"
          />
          
          <MetricCard
            icon={<TrendingUp className="w-7 h-7 text-white" />}
            value={`${metrics.uptime.toFixed(2)}%`}
            label="Uptime"
            description="Service availability with enterprise SLA guarantees"
            color="from-orange-600 to-red-600"
          />
        </div>
      </div>
    </section>
  );
};

export default MetricsDisplay;
