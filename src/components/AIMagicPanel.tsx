import React from 'react';
import { 
  Wand2, 
  Eraser, 
  UserCheck, 
  Lightbulb, 
  Palette, 
  Sparkles, 
  Check,
  Scissors,
  Zap,
  CloudSun,
  Smile
} from 'lucide-react';

interface AIMagicPanelProps {
  aiEraserActive: boolean;
  setAiEraserActive: (val: boolean) => void;
  eraserSize: number;
  setEraserSize: (val: number) => void;
  bokehActive: boolean;
  setBokehActive: (val: boolean) => void;
  bokehAperture: number;
  setBokehAperture: (val: number) => void;
  relightActive: boolean;
  setRelightActive: (val: boolean) => void;
  relightAngle: number;
  setRelightAngle: (val: number) => void;
  relightIntensity: number;
  setRelightIntensity: (val: number) => void;
  relightMode: 'studio' | 'contour' | 'stage';
  setRelightMode: (val: 'studio' | 'contour' | 'stage') => void;
  colorSplashActive: boolean;
  setColorSplashActive: (val: boolean) => void;
  splashHue: number;
  setSplashHue: (val: number) => void;
  bgRemoved: boolean;
  setBgRemoved: (val: boolean) => void;
  upscalerActive: boolean;
  setUpscalerActive: (val: boolean) => void;
  skyBoostActive: boolean;
  setSkyBoostActive: (val: boolean) => void;
  skinRetouchActive: boolean;
  setSkinRetouchActive: (val: boolean) => void;
  onTriggerAutoEnhance: () => void;
}

export const AIMagicPanel: React.FC<AIMagicPanelProps> = ({
  aiEraserActive,
  setAiEraserActive,
  eraserSize,
  setEraserSize,
  bokehActive,
  setBokehActive,
  bokehAperture,
  setBokehAperture,
  relightActive,
  setRelightActive,
  relightAngle,
  setRelightAngle,
  relightIntensity,
  setRelightIntensity,
  relightMode,
  setRelightMode,
  colorSplashActive,
  setColorSplashActive,
  splashHue,
  setSplashHue,
  bgRemoved,
  setBgRemoved,
  upscalerActive,
  setUpscalerActive,
  skyBoostActive,
  setSkyBoostActive,
  skinRetouchActive,
  setSkinRetouchActive,
  onTriggerAutoEnhance
}) => {
  return (
    <div className="flex flex-col h-full overflow-hidden animate-fade-in select-none">
      {/* Header */}
      <div className="p-4 border-b border-slate-800/60 flex items-center justify-between flex-shrink-0 bg-slate-950/40">
        <div className="flex items-center gap-2">
          <Wand2 className="w-5 h-5 text-purple-400" />
          <h3 className="text-base font-bold text-white tracking-tight">Ultra AI Magic Studio</h3>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center gap-1 shadow-inner">
          <Sparkles className="w-3.5 h-3.5" /> Neural Engine
        </span>
      </div>

      {/* Tools Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {/* AI Auto-Enhance Button */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-[1px] shadow-xl shadow-purple-500/10">
          <div className="bg-slate-950 p-4 rounded-[15px] flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
                <h4 className="text-sm font-bold text-white tracking-tight">AI Smart HDR Auto-Enhance</h4>
              </div>
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-400 text-slate-950 shadow-sm">INSTANT</span>
            </div>
            <p className="text-xs text-slate-300 font-normal leading-relaxed">
              Analyzes image lighting, tone mapping, and facial structures to apply optimal pro-grade adjustments instantly.
            </p>
            <button
              onClick={onTriggerAutoEnhance}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-xs tracking-wide shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-white/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" /> Apply AI Magic Enhance
            </button>
          </div>
        </div>

        {/* AI Sky Enhancer */}
        <div className={`p-4 rounded-2xl border transition-all ${
          skyBoostActive 
            ? 'bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 shadow-inner'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${skyBoostActive ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                <CloudSun className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI Sky Enhancer</h4>
                <p className="text-[10px] text-slate-400">Detect & enrich blue sky luminescence</p>
              </div>
            </div>

            <button
              onClick={() => setSkyBoostActive(!skyBoostActive)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                skyBoostActive 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-white/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {skyBoostActive ? 'Active (Boosted)' : 'Enhance Sky'}
            </button>
          </div>
        </div>

        {/* AI Skin Retouch Auto-Heal */}
        <div className={`p-4 rounded-2xl border transition-all ${
          skinRetouchActive 
            ? 'bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 shadow-inner'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${skinRetouchActive ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                <Smile className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI Skin Retouch Auto-Heal</h4>
                <p className="text-[10px] text-slate-400">Smooth blemish textures & balance skin tone</p>
              </div>
            </div>

            <button
              onClick={() => setSkinRetouchActive(!skinRetouchActive)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                skinRetouchActive 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-white/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {skinRetouchActive ? 'Active (Flawless)' : 'Retouch Skin'}
            </button>
          </div>
        </div>

        {/* AI Background Remover */}
        <div className={`p-4 rounded-2xl border transition-all ${
          bgRemoved 
            ? 'bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 shadow-inner'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${bgRemoved ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                <Scissors className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI Background Remover</h4>
                <p className="text-[10px] text-slate-400">Instantly isolate subject on transparent grid</p>
              </div>
            </div>

            <button
              onClick={() => setBgRemoved(!bgRemoved)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                bgRemoved 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-white/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {bgRemoved ? 'Active (Isolated)' : 'Remove BG'}
            </button>
          </div>
        </div>

        {/* AI 4K Upscaler */}
        <div className={`p-4 rounded-2xl border transition-all ${
          upscalerActive 
            ? 'bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 shadow-inner'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${upscalerActive ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI 4K Detail Upscaler</h4>
                <p className="text-[10px] text-slate-400">Enhance micro-details & edge clarity</p>
              </div>
            </div>

            <button
              onClick={() => setUpscalerActive(!upscalerActive)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                upscalerActive 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-white/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {upscalerActive ? 'Active (4K Ultra)' : 'Upscale 4K'}
            </button>
          </div>
        </div>

        {/* AI Magic Eraser */}
        <div className={`p-4 rounded-2xl border transition-all ${
          aiEraserActive 
            ? 'bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 shadow-inner'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${aiEraserActive ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                <Eraser className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI Magic Eraser</h4>
                <p className="text-[10px] text-slate-400">Remove blemishes & unwanted objects</p>
              </div>
            </div>

            <button
              onClick={() => setAiEraserActive(!aiEraserActive)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                aiEraserActive 
                  ? 'bg-indigo-600 hover:bg-indigo-50 text-white shadow-lg shadow-indigo-500/30 border-white/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {aiEraserActive ? 'Active (Tap Canvas)' : 'Enable Brush'}
            </button>
          </div>

          {aiEraserActive && (
            <div className="space-y-2 pt-3 border-t border-slate-800/80 animate-fade-in">
              <div className="flex justify-between text-xs text-slate-300 font-bold">
                <span>Brush Size</span>
                <span className="font-mono text-indigo-400">{eraserSize}px</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={eraserSize}
                onChange={(e) => setEraserSize(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <p className="text-[11px] text-indigo-300 pt-1 font-normal">
                Tip: Swipe or click on the photo preview above to magically heal & erase areas!
              </p>
            </div>
          )}
        </div>

        {/* AI Portrait Bokeh */}
        <div className={`p-4 rounded-2xl border transition-all ${
          bokehActive 
            ? 'bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 shadow-inner'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${bokehActive ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI Portrait Bokeh</h4>
                <p className="text-[10px] text-slate-400">Cinematic depth of field simulation</p>
              </div>
            </div>

            <button
              onClick={() => setBokehActive(!bokehActive)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                bokehActive 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-white/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {bokehActive ? 'Active (f/2.8)' : 'Enable Bokeh'}
            </button>
          </div>

          {bokehActive && (
            <div className="space-y-3 pt-3 border-t border-slate-800/80 animate-fade-in">
              <div className="flex justify-between text-xs text-slate-300 font-bold">
                <span>Simulated Aperture</span>
                <span className="font-mono text-indigo-400">f/{bokehAperture.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="1.4"
                max="16"
                step="0.2"
                value={bokehAperture}
                onChange={(e) => setBokehAperture(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>f/1.4 (Extreme Blur)</span>
                <span>f/16 (Sharp)</span>
              </div>
            </div>
          )}
        </div>

        {/* AI Studio Relight */}
        <div className={`p-4 rounded-2xl border transition-all ${
          relightActive 
            ? 'bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 shadow-inner'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${relightActive ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                <Lightbulb className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI Studio Relight</h4>
                <p className="text-[10px] text-slate-400">iPhone Pro portrait lighting studio</p>
              </div>
            </div>

            <button
              onClick={() => setRelightActive(!relightActive)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                relightActive 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-white/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {relightActive ? 'Active (Studio)' : 'Enable Relight'}
            </button>
          </div>

          {relightActive && (
            <div className="space-y-4 pt-3 border-t border-slate-800/80 animate-fade-in">
              {/* Lighting Mode Selection */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'studio', label: 'Studio Light' },
                  { id: 'contour', label: 'Contour Light' },
                  { id: 'stage', label: 'Stage Mono' }
                ].map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setRelightMode(mode.id as any)}
                    className={`py-2 px-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer border ${
                      relightMode === mode.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md border-white/20'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-slate-800'
                    }`}
                  >
                    {relightMode === mode.id && <Check className="w-3 h-3" />}
                    <span>{mode.label}</span>
                  </button>
                ))}
              </div>

              {/* Light Angle Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300 font-bold">
                  <span>Light Angle Direction</span>
                  <span className="font-mono text-indigo-400">{relightAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={relightAngle}
                  onChange={(e) => setRelightAngle(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              {/* Light Intensity Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300 font-bold">
                  <span>Light Intensity</span>
                  <span className="font-mono text-indigo-400">{relightIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={relightIntensity}
                  onChange={(e) => setRelightIntensity(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* AI Color Splash */}
        <div className={`p-4 rounded-2xl border transition-all ${
          colorSplashActive 
            ? 'bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
            : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 shadow-inner'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${colorSplashActive ? 'bg-indigo-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">AI Color Splash</h4>
                <p className="text-[10px] text-slate-400">Keep one color, turn rest B&W</p>
              </div>
            </div>

            <button
              onClick={() => setColorSplashActive(!colorSplashActive)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                colorSplashActive 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 border-white/20' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              {colorSplashActive ? 'Active (Splash)' : 'Enable Splash'}
            </button>
          </div>

          {colorSplashActive && (
            <div className="space-y-3 pt-3 border-t border-slate-800/80 animate-fade-in">
              <div className="flex justify-between text-xs text-slate-300 font-bold">
                <span>Target Hue to Preserve</span>
                <span className="font-mono text-indigo-400">
                  {splashHue < 30 ? 'Red' : splashHue < 90 ? 'Yellow' : splashHue < 180 ? 'Green' : splashHue < 270 ? 'Blue' : 'Magenta'} ({splashHue}°)
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={splashHue}
                onChange={(e) => setSplashHue(parseInt(e.target.value))}
                className="w-full h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-red-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
