import React, { useState } from 'react';
import { 
  Sliders, 
  Wand2, 
  Crop, 
  Type, 
  Layers, 
  Sparkles,
  MessageCircle,
  ShieldCheck,
  X
} from 'lucide-react';
import { PresetsPanel } from './PresetsPanel';
import { AdjustmentsPanel } from './AdjustmentsPanel';
import { AIMagicPanel } from './AIMagicPanel';
import { CropFramePanel } from './CropFramePanel';
import { TextStickerPanel } from './TextStickerPanel';
import { OverlaysPanel } from './OverlaysPanel';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  // Panel props for mobile bottom sheet rendering
  presetProps?: any;
  adjustmentProps?: any;
  aiMagicProps?: any;
  cropProps?: any;
  textProps?: any;
  overlayProps?: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab,
  presetProps,
  adjustmentProps,
  aiMagicProps,
  cropProps,
  textProps,
  overlayProps
}) => {
  const [mobileSheetOpen, setMobileSheetOpen] = useState(false);

  const tabs = [
    { id: 'presets', label: 'Presets', icon: Sparkles, badge: 'iPhone' },
    { id: 'adjustments', label: 'Adjustments', icon: Sliders },
    { id: 'overlays', label: 'Overlays', icon: Layers },
    { id: 'text', label: 'Layers & Text', icon: Type },
    { id: 'ai-magic', label: 'AI Magic', icon: Wand2, badge: 'Ultra', hiddenMobileBar: true },
    { id: 'crop', label: 'Crop & Frame', icon: Crop, hiddenMobileBar: true }
  ];

  const handleMobileTabClick = (id: string) => {
    setActiveTab(id);
    setMobileSheetOpen(true);
  };

  const activeTabData = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <>
      {/* Desktop Sidebar (Hidden on Mobile by default) */}
      <aside className="hidden md:flex flex-col w-64 glass-panel border-r border-slate-800/80 p-4 gap-2 flex-shrink-0 z-30 overflow-y-auto no-scrollbar bg-[#0B0F19]/90 backdrop-blur-2xl">
        <div className="px-2 py-2 mb-2 border-b border-slate-800/80 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-400 tracking-wider uppercase">Studio Tools</p>
          <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded-full font-bold">
            PRO UNLOCKED
          </span>
        </div>

        <div className="space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between w-full p-3.5 rounded-2xl font-bold text-xs transition-all cursor-pointer min-h-[48px] ${
                  isActive 
                    ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-xl shadow-indigo-500/25 scale-[1.02] border border-white/20' 
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white border border-transparent hover:border-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                  <span className="tracking-wide text-sm">{tab.label}</span>
                </div>
                {tab.badge && (
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md shadow-sm ${
                    isActive 
                      ? 'bg-white text-slate-950' 
                      : tab.badge === 'iPhone' 
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 100% Free Guarantee Banner */}
        <div className="mt-6 p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 shadow-inner flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-xs font-extrabold text-white">100% Free Studio</h5>
            <p className="text-[10px] text-slate-400 leading-tight">No watermarks, no subscriptions. Fully unlocked.</p>
          </div>
        </div>

        {/* WhatsApp Channel Callout Card */}
        <div className="mt-auto pt-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 border border-emerald-500/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl group-hover:bg-emerald-500/30 transition-all" />
            <div className="flex items-center gap-2 mb-1.5">
              <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
              <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">Official Community</h4>
            </div>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
              Get exclusive Lightroom presets & iPhone Pro LUTs directly on WhatsApp!
            </p>
            <a
              href="https://whatsapp.com/channel/0029Vb7uioRLo4hYKuvzYw15"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-50 hover:to-emerald-400 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-emerald-400/30 min-h-[48px]"
            >
              Join WhatsApp Channel
            </a>
          </div>
        </div>
      </aside>

      {/* Modern Mobile Bottom Navigation Bar (Crucial for Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-slate-800/80 z-40 px-2 py-1.5 flex items-center justify-around shadow-[0_-10px_30px_rgba(0,0,0,0.8)] bg-[#0B0F19]/95 backdrop-blur-3xl min-h-[64px]">
        {tabs.filter(t => !t.hiddenMobileBar).map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id && mobileSheetOpen;
          return (
            <button
              key={tab.id}
              onClick={() => handleMobileTabClick(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 p-2 rounded-2xl transition-all relative cursor-pointer flex-1 min-h-[48px] ${
                isActive ? 'text-white bg-slate-800/90 border border-slate-700 shadow-inner scale-105' : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label={`Open ${tab.label}`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-400 animate-pulse' : ''}`} />
              <span className="text-[11px] font-bold tracking-tight line-clamp-1">{tab.label}</span>
              {isActive && (
                <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Modern Swipeable Bottom Sheet (Drawer) for Mobile Screens */}
      {mobileSheetOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0F19]/80 backdrop-blur-sm flex flex-col justify-end md:hidden animate-fade-in select-none">
          {/* Backdrop Click to Close */}
          <div className="flex-1 w-full" onClick={() => setMobileSheetOpen(false)} />

          {/* Swipeable Sheet Container */}
          <div className="w-full bg-[#0B0F19] border-t border-slate-700/80 rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.9)] flex flex-col max-h-[82vh] animate-slide-up overflow-hidden">
            {/* Pull-up Grab Bar Indicator & Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-black text-xs shadow-md">
                  PRO
                </div>
                <div>
                  <h3 className="text-sm font-black text-white tracking-tight">{activeTabData.label} Studio</h3>
                  <p className="text-[10px] text-indigo-300 font-bold">Swipeable Mobile Bottom Sheet</p>
                </div>
              </div>
              <button
                onClick={() => setMobileSheetOpen(false)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer border border-slate-700 active:scale-95"
                aria-label="Close Bottom Sheet"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Sheet Content Area */}
            <div className="flex-1 overflow-y-auto p-2 no-scrollbar pb-8">
              {activeTab === 'presets' && presetProps && (
                <PresetsPanel {...presetProps} />
              )}
              {activeTab === 'adjustments' && adjustmentProps && (
                <AdjustmentsPanel {...adjustmentProps} />
              )}
              {activeTab === 'overlays' && overlayProps && (
                <OverlaysPanel {...overlayProps} />
              )}
              {activeTab === 'text' && textProps && (
                <TextStickerPanel {...textProps} />
              )}
              {activeTab === 'ai-magic' && aiMagicProps && (
                <AIMagicPanel {...aiMagicProps} />
              )}
              {activeTab === 'crop' && cropProps && (
                <CropFramePanel {...cropProps} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
