import React from 'react';
import { X, MessageCircle, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface WhatsAppBannerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppBanner: React.FC<WhatsAppBannerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const benefits = [
    'Daily Free iPhone Pro Filter LUTs',
    'Premium Lightroom Mobile Presets (DNG)',
    'Ultra Advanced AI Editing Tutorials',
    'Direct Chat & Support from Kashif Edit',
    'VIP Contest Giveaways & Community Showcases'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="glass-panel w-full max-w-md rounded-3xl border border-emerald-500/30 shadow-2xl overflow-hidden flex flex-col bg-gradient-to-b from-slate-900 via-slate-950 to-emerald-950/40 relative">
        {/* Absolute glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-emerald-950/40">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-emerald-400 fill-current animate-pulse" />
            <h3 className="text-base font-extrabold text-white tracking-tight">Kashif Edit Official Channel</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh] no-scrollbar">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 mb-2 shadow-lg shadow-emerald-500/10">
              <Sparkles className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-extrabold text-white tracking-tight">
              Join 50,000+ Pro Editors!
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto font-light leading-relaxed">
              Don't miss out on the most exclusive photo editing community. Tap below to subscribe to our WhatsApp Channel instantly.
            </p>
          </div>

          {/* Benefits list */}
          <div className="space-y-3 glass-panel-subtle p-4 rounded-2xl border border-slate-800/80">
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Member Privileges</h5>
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="space-y-3">
            <a
              href="https://whatsapp.com/channel/0029Vb7uioRLo4hYKuvzYw15"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Join WhatsApp Channel Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 font-semibold text-xs transition-all cursor-pointer"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
