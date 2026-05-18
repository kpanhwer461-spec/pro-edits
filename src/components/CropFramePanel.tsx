import React from 'react';
import { 
  Crop, 
  RotateCw, 
  FlipHorizontal, 
  FlipVertical, 
  Frame, 
  Check,
  Smartphone,
  Maximize,
  Grid,
  Monitor,
  Tablet,
  Layout
} from 'lucide-react';

interface CropFramePanelProps {
  aspectRatio: string;
  setAspectRatio: (val: string) => void;
  rotation: number;
  setRotation: (val: number) => void;
  flipH: boolean;
  setFlipH: (val: boolean) => void;
  flipV: boolean;
  setFlipV: (val: boolean) => void;
  selectedFrame: string;
  setSelectedFrame: (val: string) => void;
}

export const CropFramePanel: React.FC<CropFramePanelProps> = ({
  aspectRatio,
  setAspectRatio,
  rotation,
  setRotation,
  flipH,
  setFlipH,
  flipV,
  setFlipV,
  selectedFrame,
  setSelectedFrame
}) => {
  const aspectRatios = [
    { id: 'free', label: 'Freeform', icon: Maximize },
    { id: '1:1', label: '1:1 Square', icon: Grid },
    { id: '4:5', label: '4:5 Social', icon: Tablet },
    { id: '16:9', label: '16:9 Widescreen', icon: Monitor },
    { id: '9:16', label: '9:16 Vertical', icon: Smartphone },
    { id: '3:2', label: '3:2 Classic', icon: Layout },
  ];

  const premiumFrames = [
    { id: 'none', label: 'No Frame', desc: 'Clean image export' },
    { id: 'iphone', label: 'iPhone 16 Mockup', desc: 'Sleek titanium frame & notch' },
    { id: 'polaroid', label: 'Vintage Polaroid', desc: 'Classic white instant photo border' },
    { id: 'cinematic', label: 'Cinematic Bars', desc: '2.35:1 Hollywood black bars' },
    { id: 'neon', label: 'Cyber Neon Border', desc: 'Glowing electric magenta/cyan edge' },
    { id: 'gold', label: 'Royal Gold Border', desc: 'Elegant thin golden metallic frame' },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden animate-fade-in select-none">
      {/* Header */}
      <div className="p-4 border-b border-slate-800/60 flex items-center justify-between flex-shrink-0 bg-slate-950/40">
        <div className="flex items-center gap-2">
          <Crop className="w-5 h-5 text-blue-400" />
          <h3 className="text-base font-bold text-white tracking-tight">Crop, Rotate & Frame</h3>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-inner">
          Composition Studio
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
        {/* Aspect Ratios */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Aspect Ratio</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {aspectRatios.map((item) => {
              const Icon = item.icon;
              const isActive = aspectRatio === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setAspectRatio(item.id)}
                  className={`p-3 rounded-2xl flex flex-col items-center gap-2 transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-white/20 shadow-xl shadow-indigo-500/25 font-bold scale-[1.02]'
                      : 'bg-slate-900/50 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700 shadow-inner'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                  <span className="text-xs font-semibold tracking-tight">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Rotate & Flip */}
        <div className="space-y-3 pt-4 border-t border-slate-800/60">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Rotate & Flip</h4>
          <div className="grid grid-cols-3 gap-2.5">
            <button
              onClick={() => setRotation((rotation + 90) % 360)}
              className="p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all flex flex-col items-center gap-2 cursor-pointer active:scale-95 shadow-inner"
            >
              <RotateCw className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold">Rotate 90°</span>
            </button>

            <button
              onClick={() => setFlipH(!flipH)}
              className={`p-3.5 rounded-2xl border transition-all flex flex-col items-center gap-2 cursor-pointer active:scale-95 ${
                flipH 
                  ? 'bg-indigo-600/30 border-indigo-500 text-white font-bold shadow-md shadow-indigo-500/10' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white shadow-inner'
              }`}
            >
              <FlipHorizontal className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold">Flip Horiz</span>
            </button>

            <button
              onClick={() => setFlipV(!flipV)}
              className={`p-3.5 rounded-2xl border transition-all flex flex-col items-center gap-2 cursor-pointer active:scale-95 ${
                flipV 
                  ? 'bg-indigo-600/30 border-indigo-500 text-white font-bold shadow-md shadow-indigo-500/10' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white shadow-inner'
              }`}
            >
              <FlipVertical className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold">Flip Vert</span>
            </button>
          </div>
        </div>

        {/* Premium Frames */}
        <div className="space-y-3 pt-4 border-t border-slate-800/60">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Frame className="w-4 h-4 text-amber-400" /> Premium Frames & Borders
            </h4>
            <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-400 text-slate-950 shadow-sm">
              PRO
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {premiumFrames.map((frame) => {
              const isActive = selectedFrame === frame.id;
              return (
                <div
                  key={frame.id}
                  onClick={() => setSelectedFrame(frame.id)}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-950/80 to-purple-950/80 border-indigo-500 shadow-xl shadow-indigo-500/15 scale-[1.02]'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 shadow-inner hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      isActive ? 'bg-indigo-500 border-indigo-400 text-white shadow-md' : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}>
                      {frame.id === 'iphone' ? <Smartphone className="w-4 h-4" /> : <Frame className="w-4 h-4" />}
                    </div>
                    <div>
                      <h5 className={`text-xs font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-200'}`}>
                        {frame.label}
                      </h5>
                      <p className="text-[10px] text-slate-400 mt-0.5">{frame.desc}</p>
                    </div>
                  </div>

                  {isActive && (
                    <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/50 animate-scale-up">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
