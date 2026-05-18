import React, { useState } from 'react';
import { 
  Type, 
  Plus, 
  Trash2,
  Sparkles,
  Crown, 
  ShieldCheck, 
  Star, 
  Heart, 
  Zap, 
  Camera, 
  Award, 
  Compass, 
  Flame, 
  CheckCircle2, 
  Activity,
  Shapes
} from 'lucide-react';

export interface OverlayText {
  id: string;
  text: string;
  font: string;
  color: string;
  hasGlow: boolean;
  hasBg: boolean;
}

export interface OverlaySticker {
  id: string;
  iconName: string;
  label: string;
  color: string;
}

interface TextStickerPanelProps {
  texts: OverlayText[];
  setTexts: React.Dispatch<React.SetStateAction<OverlayText[]>>;
  stickers: OverlaySticker[];
  setStickers: React.Dispatch<React.SetStateAction<OverlaySticker[]>>;
}

export const TextStickerPanel: React.FC<TextStickerPanelProps> = ({
  texts,
  setTexts,
  stickers,
  setStickers
}) => {
  const [activeTab, setActiveTab] = useState<'text' | 'stickers'>('text');
  
  // New Text Form State
  const [newText, setNewText] = useState('');
  const [selectedFont, setSelectedFont] = useState('font-sans');
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  const [hasGlow, setHasGlow] = useState(false);
  const [hasBg, setHasBg] = useState(false);

  const fonts = [
    { id: 'font-sans', label: 'Inter Clean' },
    { id: 'font-serif', label: 'Elegant Serif' },
    { id: 'font-mono', label: 'Cyber Mono' },
  ];

  const colors = ['#ffffff', '#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#000000'];

  const availableStickers = [
    { id: 'sparkles', iconName: 'Sparkles', label: 'Pro Sparkles', color: '#f59e0b' },
    { id: 'crown', iconName: 'Crown', label: 'VIP Crown', color: '#f59e0b' },
    { id: 'shield', iconName: 'ShieldCheck', label: 'Verified Shield', color: '#10b981' },
    { id: 'star', iconName: 'Star', label: 'Gold Star', color: '#f59e0b' },
    { id: 'heart', iconName: 'Heart', label: 'Love Heart', color: '#ef4444' },
    { id: 'zap', iconName: 'Zap', label: 'Kashif Bolt', color: '#3b82f6' },
    { id: 'camera', iconName: 'Camera', label: 'Pro Lens', color: '#ffffff' },
    { id: 'award', iconName: 'Award', label: 'Elite Badge', color: '#8b5cf6' },
    { id: 'compass', iconName: 'Compass', label: 'Adventure', color: '#ec4899' },
    { id: 'flame', iconName: 'Flame', label: 'Ultra Fire', color: '#ef4444' },
    { id: 'check', iconName: 'CheckCircle2', label: '100% Legit', color: '#10b981' },
    { id: 'activity', iconName: 'Activity', label: 'Cyber Pulse', color: '#3b82f6' },
  ];

  const handleAddText = () => {
    if (!newText.trim()) return;
    const item: OverlayText = {
      id: 'text-' + Date.now(),
      text: newText,
      font: selectedFont,
      color: selectedColor,
      hasGlow,
      hasBg
    };
    setTexts([...texts, item]);
    setNewText('');
  };

  const handleRemoveText = (id: string) => {
    setTexts(texts.filter(t => t.id !== id));
  };

  const handleAddSticker = (item: { id: string; iconName: string; label: string; color: string }) => {
    const s: OverlaySticker = {
      id: 'sticker-' + Date.now(),
      iconName: item.iconName,
      label: item.label,
      color: item.color
    };
    setStickers([...stickers, s]);
  };

  const handleRemoveSticker = (id: string) => {
    setStickers(stickers.filter(s => s.id !== id));
  };

  const renderStickerIcon = (name: string, col: string, sizeClass = "w-6 h-6") => {
    const props = { className: `${sizeClass} flex-shrink-0`, style: { color: col } };
    switch (name) {
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Crown': return <Crown {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Star': return <Star {...props} />;
      case 'Heart': return <Heart {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Camera': return <Camera {...props} />;
      case 'Award': return <Award {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Flame': return <Flame {...props} />;
      case 'CheckCircle2': return <CheckCircle2 {...props} />;
      case 'Activity': return <Activity {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden animate-fade-in select-none">
      {/* Header & Tabs */}
      <div className="p-4 border-b border-slate-800/60 flex flex-col gap-3 flex-shrink-0 bg-slate-950/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-pink-400" />
            <h3 className="text-base font-bold text-white tracking-tight">Text & Shapes</h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 shadow-inner">
            Typography Studio
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex rounded-xl bg-slate-900/90 p-1 border border-slate-800 shadow-inner">
          <button 
            onClick={() => setActiveTab('text')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'text' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md border border-white/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Custom Text</span>
          </button>

          <button 
            onClick={() => setActiveTab('stickers')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === 'stickers' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md border border-white/20' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shapes className="w-3.5 h-3.5" />
            <span>Pro Badges</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
        {activeTab === 'text' && (
          <div className="space-y-4">
            {/* Add Text Form */}
            <div className="bg-slate-900/50 p-4 rounded-2xl space-y-4 border border-slate-800 shadow-inner">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Add Custom Typography</h4>
              
              <input
                type="text"
                placeholder="Enter text (e.g., KASHIF EDIT PRO)..."
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500 transition-all shadow-inner font-medium"
              />

              {/* Font Selector */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1.5 uppercase tracking-wider">Font Family</label>
                <div className="grid grid-cols-3 gap-2">
                  {fonts.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFont(f.id)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                        selectedFont === f.id
                          ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-inner'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 block mb-1.5 uppercase tracking-wider">Text Color</label>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`w-7 h-7 rounded-full border-2 transition-all cursor-pointer flex-shrink-0 shadow-md ${
                        selectedColor === c ? 'border-indigo-500 scale-110 shadow-[0_0_12px_#6366f1]' : 'border-slate-700 hover:scale-105'
                      }`}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasGlow}
                    onChange={(e) => setHasGlow(e.target.checked)}
                    className="rounded bg-slate-950 border-slate-700 text-indigo-500 focus:ring-indigo-500/30 w-4 h-4 cursor-pointer"
                  />
                  <span>Neon Glow Shadow</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasBg}
                    onChange={(e) => setHasBg(e.target.checked)}
                    className="rounded bg-slate-950 border-slate-700 text-indigo-500 focus:ring-indigo-500/30 w-4 h-4 cursor-pointer"
                  />
                  <span>Background Pill</span>
                </label>
              </div>

              <button
                onClick={handleAddText}
                disabled={!newText.trim()}
                className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg ${
                  newText.trim()
                    ? 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white cursor-pointer hover:scale-[1.02] active:scale-[0.98] border border-white/20'
                    : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700'
                }`}
              >
                <Plus className="w-4 h-4" />
                <span>Add Text Overlay</span>
              </button>
            </div>

            {/* Active Texts List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Text Overlays</h4>
              {texts.length === 0 ? (
                <p className="text-xs text-slate-500 italic font-normal">No text overlays added yet.</p>
              ) : (
                texts.map((t) => (
                  <div key={t.id} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 shadow-inner">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: t.color }} />
                      <span className={`text-xs font-bold text-white ${t.font}`}>{t.text}</span>
                      {t.hasGlow && <span className="text-[9px] font-black bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">Glow</span>}
                      {t.hasBg && <span className="text-[9px] font-black bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded border border-blue-500/30">Pill</span>}
                    </div>

                    <button
                      onClick={() => handleRemoveText(t.id)}
                      className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 transition-all cursor-pointer border border-slate-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === 'stickers' && (
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Tap to Add Pro Badges & Shapes</h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {availableStickers.map((st) => (
                <button
                  key={st.id}
                  onClick={() => handleAddSticker(st)}
                  className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 flex flex-col items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer group shadow-inner"
                >
                  {renderStickerIcon(st.iconName, st.color, "w-6 h-6 group-hover:scale-110 transition-transform")}
                  <span className="text-xs font-bold text-slate-300 group-hover:text-white tracking-tight mt-0.5">{st.label}</span>
                </button>
              ))}
            </div>

            {/* Active Stickers List */}
            <div className="space-y-2 pt-4 border-t border-slate-800/60">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Pro Badges</h4>
              {stickers.length === 0 ? (
                <p className="text-xs text-slate-500 italic font-normal">No badges added yet.</p>
              ) : (
                stickers.map((s) => (
                  <div key={s.id} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 shadow-inner">
                    <div className="flex items-center gap-3">
                      {renderStickerIcon(s.iconName, s.color, "w-5 h-5")}
                      <span className="text-xs font-bold text-white">{s.label}</span>
                    </div>

                    <button
                      onClick={() => handleRemoveSticker(s.id)}
                      className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 transition-all cursor-pointer border border-slate-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
