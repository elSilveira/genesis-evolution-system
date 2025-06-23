
import React from 'react';
import { Brain, Database, Network, Cpu, Lock, BarChart3 } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, benefits }) => (
  <div className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500">
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/20">
        {icon}
      </div>
      
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-slate-300 mb-6 leading-relaxed">{description}</p>
        
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-slate-400">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const FeatureShowcase = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "Adaptive Intelligence",
      description: "AI-powered resource allocation that learns from usage patterns and automatically optimizes performance across your entire infrastructure.",
      benefits: [
        "Machine learning-driven optimization",
        "Predictive scaling and load balancing",
        "Automated performance tuning"
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: "Distributed Architecture",
      description: "Horizontally scalable infrastructure that grows with your business, ensuring consistent performance at any scale.",
      benefits: [
        "Linear performance scaling",
        "Geographic data distribution",
        "Zero-downtime deployments"
      ]
    },
    {
      icon: <Network className="w-8 h-8 text-green-400" />,
      title: "Edge Computing",
      description: "Process data closer to your users with our global edge network, reducing latency and improving response times.",
      benefits: [
        "Sub-10ms response times",
        "Global content delivery",
        "Intelligent traffic routing"
      ]
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance frameworks protect your data with multi-layered security protocols.",
      benefits: [
        "End-to-end encryption",
        "SOC 2 Type II compliance",
        "Advanced threat detection"
      ]
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "High-Performance Computing",
      description: "Leverage specialized hardware and optimized algorithms for compute-intensive workloads and real-time processing.",
      benefits: [
        "GPU-accelerated computing",
        "Custom silicon optimization",
        "Parallel processing frameworks"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: "Advanced Analytics",
      description: "Real-time monitoring and analytics provide deep insights into system performance and business metrics.",
      benefits: [
        "Real-time performance dashboards",
        "Predictive analytics and alerts",
        "Custom reporting and insights"
      ]
    }
  ];

  return (
    <section className="py-24 px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Enterprise-Grade Capabilities
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Built for the most demanding enterprise workloads with cutting-edge technology 
            and proven reliability at global scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
