
import React from 'react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Header from '../components/Header';
import MetricsDisplay from '../components/MetricsDisplay';
import FeatureShowcase from '../components/FeatureShowcase';
import TrustSection from '../components/TrustSection';
import CallToAction from '../components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Sophisticated Three.js background */}
      <BackgroundAnimation />

      {/* Main content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <Header />

        {/* Real-time Metrics */}
        <MetricsDisplay />

        {/* Feature Showcase */}
        <FeatureShowcase />

        {/* Trust & Social Proof */}
        <TrustSection />

        {/* Call to Action */}
        <CallToAction />

        {/* Footer */}
        <footer className="border-t border-slate-800 py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                <div className="text-2xl font-bold mb-4">DETHRON</div>
                <p className="text-slate-400 max-w-md">
                  Enterprise computing platform designed for the future of digital infrastructure.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Platform</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Architecture</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Performance</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Integration</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
              <div>© 2024 Dethron Systems. All rights reserved.</div>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
                <a href="#" className="hover:text-slate-300 transition-colors">Security</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
