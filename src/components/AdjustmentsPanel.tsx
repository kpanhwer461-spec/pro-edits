import React, { useState } from 'react';
import { 
  Sun, 
  Aperture, 
  Sunset, 
  Sliders, 
  RotateCcw,
  Sparkles,
  Smartphone,
  Palette
} from 'lucide-react';

interface AdjustmentsPanelProps {
  settings: {
    brightness: number;
    contrast: number;
    exposure: number;
    saturation: number;
    vibrance: number;
    temperature: number;
    tint: number;
    sepia: number;
    blur: number;
    sharpen: number;
    vignette: number;
    hueRotate: number;
    highlights: number;
    shadows: number;
    gamma: number;
    lutIntensity: number;
    shadowTint: number;
    highlightTint: number;
    midtoneTint: number;
    hslRedHue: number;
    hslRedSat: number;
    hslGreenHue: number;
    hslGreenSat: number;
    hslBlueHue: number;
    hslBlueSat: number;
    dehaze: number;
    clarity: number;
    grain: number;
    chromaticAberration: number;
    skinSmooth: number;
    skyBoost: number;
  };
  onChangeSetting: (key: string, value: number) => void;
  onResetSetting: (key: string, defaultValue: number) => void;
}

export const AdjustmentsPanel: React.FC<AdjustmentsPanelProps> = ({
  settings,
  onChangeSetting,
  onResetSetting
}) => {
  const [activeCategory, setActiveCategory] = useState<'light' | 'color' | 'hsl' | 'detail' | 'curves'>('light');

  const categories = [
    { id: 'light', label: 'Light & Exposure', icon: Sun },
    { id: 'color', label: 'Color & Split Tone', icon: Sunset },
    { id: 'hsl', label: 'HSL Color Tuning', icon: Palette, badge: 'Pro' },
    { id: 'detail', label: 'Detail & Clarity', icon: Aperture },
    { id: 'curves', label: 'iPhone Tone Curves', icon: Sliders, badge: 'Apple' }
  ];

  const sliderGroups = {
    light: [
      { key: 'exposure', label: 'Exposure', min: -50, max: 50, default: 0, unit: '%' },
      { key: 'brightness', label: 'Brightness', min: -50, max: 50, default: 0, unit: '%' },
      { key: 'contrast', label: 'Contrast', min: -50, max: 100, default: 0, unit: '%' },
      { key: 'highlights', label: 'Highlights', min: -50, max: 50, default: 0, unit: '%' },
      { key: 'shadows', label: 'Shadows', min: -50, max: 50, default: 0, unit: '%' },
      { key: 'skyBoost', label: 'AI Blue Sky Boost', min: 0, max: 100, default: 0, unit: '%' },
    ],
    color: [
      { key: 'lutIntensity', label: 'LUT Profile Intensity', min: 0, max: 100, default: 100, unit: '%' },
      { key: 'saturation', label: 'Saturation', min: -100, max: 100, default: 0, unit: '%' },
      { key: 'vibrance', label: 'Vibrance', min: -100, max: 100, default: 0, unit: '%' },
      { key: 'temperature', label: 'Temperature (Warmth)', min: -50, max: 50, default: 0, unit: 'K' },
      { key: 'tint', label: 'Tint (Green/Magenta)', min: -50, max: 50, default: 0, unit: '' },
      { key: 'hueRotate', label: 'Global Hue Rotation', min: 0, max: 360, default: 0, unit: '°' },
      { key: 'shadowTint', label: 'Split Tone: Shadow Tint', min: 0, max: 360, default: 0, unit: '°' },
      { key: 'midtoneTint', label: 'Split Tone: Midtone Tint', min: 0, max: 360, default: 0, unit: '°' },
      { key: 'highlightTint', label: 'Split Tone: Highlight Tint', min: 0, max: 360, default: 0, unit: '°' },
    ],
    hsl: [
      { key: 'hslRedHue', label: 'Red Band Hue', min: -50, max: 50, default: 0, unit: '°' },
      { key: 'hslRedSat', label: 'Red Band Saturation', min: -100, max: 100, default: 0, unit: '%' },
      { key: 'hslGreenHue', label: 'Green Band Hue', min: -50, max: 50, default: 0, unit: '°' },
      { key: 'hslGreenSat', label: 'Green Band Saturation', min: -100, max: 100, default: 0, unit: '%' },
      { key: 'hslBlueHue', label: 'Blue Band Hue', min: -50, max: 50, default: 0, unit: '°' },
      { key: 'hslBlueSat', label: 'Blue Band Saturation', min: -100, max: 100, default: 0, unit: '%' },
    ],
    detail: [
      { key: 'sharpen', label: 'Sharpen Clarity', min: 0, max: 100, default: 0, unit: '%' },
      { key: 'clarity', label: 'Structure Clarity', min: 0, max: 100, default: 0, unit: '%' },
      { key: 'dehaze', label: 'Atmospheric Dehaze', min: 0, max: 100, default: 0, unit: '%' },
      { key: 'grain', label: 'Film Grain Amount', min: 0, max: 100, default: 0, unit: '%' },
      { key: 'chromaticAberration', label: 'Chromatic Glitch Shift', min: 0, max: 20, default: 0, unit: 'px' },
      { key: 'skinSmooth', label: 'AI Skin Retouch Smooth', min: 0, max: 100, default: 0, unit: '%' },
      { key: 'blur', label: 'Lens Blur', min: 0, max: 20, default: 0, unit: 'px' },
      { key: 'vignette', label: 'Vignette Shade', min: 0, max: 100, default: 0, unit: '%' },
      { key: 'sepia', label: 'Sepia Vintage', min: 0, max: 100, default: 0, unit: '%' },
    ],
    curves: [
      { key: 'gamma', label: 'Gamma Correction (Midtones)', min: 0.5, max: 2.0, step: 0.05, default: 1.0, unit: '' },
    ]
  };

  return (
    <div className="flex flex-col h-full overflow-hidden animate-fade-in select-none">
      {/* Category Tabs */}
      <div className="p-4 border-b border-slate-800/60 flex flex-col gap-3 flex-shrink-0 bg-slate-950/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base font-bold text-slate-100 tracking-tight">Fine-Tune Adjustments</h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1 shadow-inner">
            <Smartphone className="w-3 h-3" /> Pro Studio
          </span>
        </div>

        {/* Category Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 border-white/20 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-slate-800/80 shadow-inner'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                {cat.badge && (
                  <span className="text-[9px] font-black px-1.5 py-0.5 bg-amber-400 text-slate-950 rounded shadow-sm">
                    {cat.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sliders List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 no-scrollbar">
        {sliderGroups[activeCategory].map((item) => {
          const val = (settings as any)[item.key];
          const isModified = val !== item.default;
          const stepVal = (item as any).step || 1;

          return (
            <div key={item.key} className="glass-panel-subtle p-4 rounded-2xl space-y-2.5 border border-slate-800/60 transition-all hover:border-slate-700 bg-slate-900/50 shadow-inner">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-200 tracking-tight">{item.label}</span>
                  {isModified && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#fbbf24]" />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-xl border ${
                    isModified ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30 shadow-inner' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {val}{item.unit}
                  </span>

                  {isModified && (
                    <button 
                      onClick={() => onResetSetting(item.key, item.default)}
                      className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 transition-all cursor-pointer border border-slate-700"
                      title={`Reset ${item.label}`}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Clean Range Slider (Restored Original Style) */}
              <div className="relative flex items-center py-1">
                <input
                  type="range"
                  min={item.min}
                  max={item.max}
                  step={stepVal}
                  value={val}
                  onChange={(e) => onChangeSetting(item.key, parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
              </div>

              {/* Quick Min/Max/Default indicators */}
              <div className="flex justify-between text-[10px] text-slate-500 font-mono px-1">
                <span>{item.min}{item.unit}</span>
                <span className="cursor-pointer hover:text-slate-300 underline font-sans" onClick={() => onResetSetting(item.key, item.default)}>
                  Reset Default ({item.default})
                </span>
                <span>{item.max}{item.unit}</span>
              </div>
            </div>
          );
        })}

        {activeCategory === 'curves' && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-purple-950/60 border border-indigo-500/20 space-y-3 shadow-xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">iPhone Tone Curve Mapping</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Adjusting the Gamma correction instantly maps midtone luminescence to emulate Apple's Smart HDR 5 and Deep Fusion neural processing algorithms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
