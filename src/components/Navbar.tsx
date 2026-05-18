import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  Undo2, 
  Redo2, 
  Download, 
  Eye, 
  Smartphone, 
  MessageCircle,
  ShieldCheck,
  Menu,
  X,
  Sliders,
  Wand2,
  Crop,
  Type,
  Layers,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onReset: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  isComparing: boolean;
  setIsComparing: (val: boolean) => void;
  onOpenExport: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  imageName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onReset,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  isComparing,
  setIsComparing,
  onOpenExport,
  activeTab,
  setActiveTab,
  imageName
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const studioTools = [
    { id: 'presets', label: '50+ Presets', icon: Sparkles, badge: 'iPhone' },
    { id: 'adjustments', label: 'Adjustments', icon: Sliders },
    { id: 'ai-magic', label: 'AI Magic Studio', icon: Wand2, badge: 'Ultra' },
    { id: 'crop', label: 'Crop & Frame', icon: Crop },
    { id: 'text', label: 'Text & Shapes', icon: Type },
    { id: 'overlays', label: 'Overlays FX', icon: Layers }
  ];

  const handleToolSelect = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="glass-panel border-b border-slate-800/80 sticky top-0 z-40 px-3 sm:px-4 py-3 flex items-center justify-between transition-all bg-[#0B0F19]/90 backdrop-blur-2xl">
        {/* Left Branding & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800 flex items-center justify-center min-w-[48px] min-h-[48px] active:scale-95 transition-transform cursor-pointer"
            aria-label="Open Studio Tools Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-lg shadow-indigo-500/30 animate-pulse-glow flex-shrink-0 hidden sm:flex">
            <Sparkles className="w-5 h-5 text-white animate-spin-slow" />
            <div className="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded-md shadow-md">
              PRO
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h1 className="text-base sm:text-xl font-black tracking-tight bg-gradient-to-r from-white via-indigo-100 to-purple-300 bg-clip-text text-transparent">
                KASHIF EDIT
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-900 text-indigo-400 border border-indigo-500/30 shadow-inner">
                <Smartphone className="w-3 h-3" /> iPhone Edition
              </span>
            </div>
            {/* Active Canvas ID displayed prominently on mobile under title */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20 sm:hidden max-w-[130px] truncate">
                🎨 {imageName}
              </span>
              <p className="text-xs text-slate-400 hidden md:block font-medium tracking-wide">Ultra Advanced Photo Editor Studio</p>
              <span className="hidden lg:inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" /> 100% Free & No Watermark
              </span>
            </div>
          </div>
        </div>

        {/* Center Action Controls (Desktop Only) */}
        <div className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 shadow-inner flex-shrink-0">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            className={`p-2 rounded-xl transition-all flex items-center gap-1 text-xs font-semibold ${
              canUndo 
                ? 'text-slate-200 hover:bg-slate-800 active:scale-95 cursor-pointer hover:text-white' 
                : 'text-slate-600 cursor-not-allowed'
            }`}
          >
            <Undo2 className="w-4 h-4" />
            <span className="hidden lg:inline">Undo</span>
          </button>

          <button
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Ctrl+Y)"
            className={`p-2 rounded-xl transition-all flex items-center gap-1 text-xs font-semibold ${
              canRedo 
                ? 'text-slate-200 hover:bg-slate-800 active:scale-95 cursor-pointer hover:text-white' 
                : 'text-slate-600 cursor-not-allowed'
            }`}
          >
            <Redo2 className="w-4 h-4" />
            <span className="hidden lg:inline">Redo</span>
          </button>

          <div className="h-4 w-[1px] bg-slate-800 mx-0.5" />

          <button
            onClick={() => setIsComparing(!isComparing)}
            title="Hold or Toggle to Compare Before & After"
            className={`p-2 rounded-xl transition-all flex items-center gap-1 text-xs font-semibold cursor-pointer ${
              isComparing 
                ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20 scale-105' 
                : 'text-slate-200 hover:bg-slate-800 active:scale-95 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span className="hidden md:inline">{isComparing ? 'Comparing' : 'Before / After'}</span>
          </button>

          <button
            onClick={onReset}
            title="Reset All Adjustments & Overlays"
            className="p-2 rounded-xl text-slate-300 hover:text-rose-400 hover:bg-slate-800 transition-all flex items-center gap-1 text-xs font-semibold cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden lg:inline">Reset All</span>
          </button>
        </div>

        {/* Right Actions: Save & Export Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* WhatsApp Channel Link Button (Desktop Only) */}
          <a
            href="https://whatsapp.com/channel/0029Vb7uioRLo4hYKuvzYw15"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-50 hover:to-emerald-400 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Dev WhatsApp</span>
          </a>

          {/* Save & Export Button (Prominent & 48px touch target for Mobile) */}
          <button
            onClick={onOpenExport}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-white/20 min-h-[48px]"
          >
            <Download className="w-4 h-4 animate-bounce" />
            <span className="hidden sm:inline">Save & Export</span>
            <span className="sm:hidden font-extrabold">Save</span>
          </button>
        </div>
      </header>

      {/* Hamburger Menu Modal / Drawer for Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B0F19]/95 backdrop-blur-3xl flex flex-col md:hidden animate-fade-in select-none">
          {/* Menu Header */}
          <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-black text-xs shadow-md">
                PRO
              </div>
              <div>
                <h3 className="text-base font-black text-white tracking-tight">KASHIF EDIT</h3>
                <p className="text-[10px] text-slate-400">Studio Tools & Profile Menu</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Quick Actions Row */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { onUndo(); setMobileMenuOpen(false); }}
                disabled={!canUndo}
                className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs min-h-[48px] ${
                  canUndo ? 'bg-slate-900 text-white border-slate-700 active:scale-95' : 'bg-slate-950 text-slate-600 border-slate-900 opacity-50'
                }`}
              >
                <Undo2 className="w-4 h-4" /> Undo Action
              </button>
              <button
                onClick={() => { onRedo(); setMobileMenuOpen(false); }}
                disabled={!canRedo}
                className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2 font-bold text-xs min-h-[48px] ${
                  canRedo ? 'bg-slate-900 text-white border-slate-700 active:scale-95' : 'bg-slate-950 text-slate-600 border-slate-900 opacity-50'
                }`}
              >
                <Redo2 className="w-4 h-4" /> Redo Action
              </button>
            </div>

            <button
              onClick={() => { onReset(); setMobileMenuOpen(false); }}
              className="w-full p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold text-xs flex items-center justify-center gap-2 min-h-[48px] active:scale-95"
            >
              <RotateCcw className="w-4 h-4" /> Reset All Adjustments & Overlays
            </button>

            {/* Studio Tools Section */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">Studio Tools</h4>
              <div className="space-y-2.5">
                {studioTools.map((tool) => {
                  const Icon = tool.icon;
                  const isActive = activeTab === tool.id;
                  return (
                    <button
                      key={tool.id}
                      onClick={() => handleToolSelect(tool.id)}
                      className={`w-full p-4 rounded-2xl flex items-center justify-between font-bold text-xs min-h-[48px] transition-all border ${
                        isActive 
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-white/20 shadow-lg shadow-indigo-500/20' 
                          : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                        <span className="text-sm">{tool.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {tool.badge && (
                          <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-400 text-slate-950 shadow-sm">
                            {tool.badge}
                          </span>
                        )}
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hidden Profile / External Links Section */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 border border-emerald-500/30 shadow-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                  <h4 className="text-xs font-black text-emerald-400 uppercase tracking-wider">Official Developer Channel</h4>
                </div>
                <p className="text-xs text-slate-300 mb-4 font-normal leading-relaxed">
                  Get exclusive Lightroom presets & iPhone Pro LUTs directly on WhatsApp!
                </p>
                <a
                  href="https://whatsapp.com/channel/0029Vb7uioRLo4hYKuvzYw15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs min-h-[48px] shadow-lg shadow-emerald-600/30 active:scale-95 cursor-pointer border border-emerald-400/30"
                >
                  Join WhatsApp Channel
                </a>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p className="text-[11px] text-slate-300 leading-tight">
                  <strong className="text-white">100% Free Studio:</strong> No watermarks, no subscriptions. Fully unlocked.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
