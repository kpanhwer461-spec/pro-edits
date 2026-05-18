import React from 'react';
import { Layers, Sparkles, Check } from 'lucide-react';

interface OverlaysPanelProps {
  selectedOverlay: string;
  setSelectedOverlay: (val: string) => void;
  overlayOpacity: number;
  setOverlayOpacity: (val: number) => void;
  overlayBlend: string;
  setOverlayBlend: (val: string) => void;
}

export const OverlaysPanel: React.FC<OverlaysPanelProps> = ({
  selectedOverlay,
  setSelectedOverlay,
  overlayOpacity,
  setOverlayOpacity,
  overlayBlend,
  setOverlayBlend
}) => {
  const overlays = [
    { id: 'none', label: 'None', desc: 'No overlay effect' },
    { id: 'light-leak', label: 'Light Leak 35mm', desc: 'Warm analog edge burn' },
    { id: 'bokeh', label: 'Bokeh Flares', desc: 'Dreamy hexagonal light circles' },
    { id: 'dust', label: 'Film Dust & Scratches', desc: 'Vintage 80s film texture' },
    { id: 'cyber', label: 'Cyber Grid Scan', desc: 'Sci-fi holographic lines' },
    { id: 'rain', label: 'Cinematic Rain', desc: 'Moody diagonal raindrops' },
    { id: 'confetti', label: 'Golden Confetti', desc: 'Luxurious floating gold specks' },
  ];

  const blendModes = [
    { id: 'screen', label: 'Screen' },
    { id: 'overlay', label: 'Overlay' },
    { id: 'color-dodge', label: 'Color Dodge' },
    { id: 'hard-light', label: 'Hard Light' },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="p-4 border-b border-slate-800/60 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-slate-100 tracking-tight">Premium Overlays</h3>
        </div>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
          Texture Studio
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
        {/* Overlays List */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Select Overlay Texture</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {overlays.map((item) => {
              const isActive = selectedOverlay === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedOverlay(item.id)}
                  className={`p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-950/60 to-purple-950/60 border-amber-500 shadow-lg shadow-amber-500/10 scale-[1.02]'
                      : 'glass-panel-subtle border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${
                      isActive ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}>
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className={`text-xs font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-200'}`}>
                        {item.label}
                      </h5>
                      <p className="text-[10px] text-slate-400">{item.desc}</p>
                    </div>
                  </div>

                  {isActive && (
                    <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/50">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Adjustments if overlay is active */}
        {selectedOverlay !== 'none' && (
          <div className="space-y-4 pt-4 border-t border-slate-800/60 animate-fade-in">
            {/* Opacity Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Overlay Opacity</span>
                <span className="font-mono text-amber-400 font-bold">{overlayOpacity}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                value={overlayOpacity}
                onChange={(e) => setOverlayOpacity(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Blend Mode Selector */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Blend Mode</h4>
              <div className="grid grid-cols-2 gap-2">
                {blendModes.map((blend) => (
                  <button
                    key={blend.id}
                    onClick={() => setOverlayBlend(blend.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                      overlayBlend === blend.id
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold shadow-md shadow-amber-500/10'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {overlayBlend === blend.id && <Check className="w-3 h-3 text-amber-400" />}
                    <span>{blend.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
