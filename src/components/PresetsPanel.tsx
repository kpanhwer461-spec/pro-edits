import React, { useState } from 'react';
import { FILTER_PRESETS, FilterPreset } from '../data/presets';
import { Search, Sparkles, Check, MessageCircle } from 'lucide-react';

interface PresetsPanelProps {
  onSelectPreset: (preset: FilterPreset) => void;
  activePresetId: string | null;
  currentImage?: string;
}

export const PresetsPanel: React.FC<PresetsPanelProps> = ({ onSelectPreset, activePresetId, currentImage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Rectangular image preview thumbnails replacing plain text category buttons
  const categoriesWithThumbnails = [
    { 
      id: 'All', 
      label: 'All Presets', 
      sampleUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
      filter: 'none', 
      accent: 'from-indigo-500 to-purple-500' 
    },
    { 
      id: 'iPhone Pro', 
      label: 'iPhone Pro', 
      sampleUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', 
      filter: 'contrast(1.2) saturate(1.1)', 
      accent: 'from-amber-500 to-orange-500' 
    },
    { 
      id: 'Cinematic', 
      label: 'Cinematic', 
      sampleUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=300&q=80', 
      filter: 'contrast(1.3) hue-rotate(-15deg) saturate(1.2)', 
      accent: 'from-blue-600 to-cyan-500' 
    },
    { 
      id: 'Social Media', 
      label: 'Social Media', 
      sampleUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80', 
      filter: 'brightness(1.1) contrast(1.15) saturate(1.25)', 
      accent: 'from-pink-500 to-rose-500' 
    },
    { 
      id: 'Studio Portrait', 
      label: 'Studio Portrait', 
      sampleUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', 
      filter: 'brightness(1.08) contrast(1.05) sepia(0.1)', 
      accent: 'from-emerald-500 to-teal-500' 
    },
    { 
      id: 'Artistic FX', 
      label: 'Artistic FX', 
      sampleUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80', 
      filter: 'hue-rotate(90deg) saturate(2.0) contrast(1.4)', 
      accent: 'from-purple-600 to-fuchsia-500' 
    },
    { 
      id: 'Lightroom Master', 
      label: 'Lightroom Master', 
      sampleUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=300&q=80', 
      filter: 'contrast(1.25) saturate(1.15) brightness(0.95)', 
      accent: 'from-indigo-600 to-blue-600' 
    },
    { 
      id: 'Street Photography', 
      label: 'Street Photo', 
      sampleUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80', 
      filter: 'contrast(1.35) saturate(0.8) sepia(0.05)', 
      accent: 'from-slate-600 to-slate-400' 
    },
    { 
      id: 'Landscape HDR', 
      label: 'Landscape HDR', 
      sampleUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80', 
      filter: 'contrast(1.3) saturate(1.3) brightness(1.05)', 
      accent: 'from-teal-600 to-emerald-600' 
    }
  ];

  const filteredPresets = FILTER_PRESETS.filter(preset => {
    const matchesSearch = preset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          preset.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || preset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Helper to compute live CSS preview filter for preset thumbnails
  const getPresetPreviewStyle = (preset: FilterPreset) => {
    const s = preset.settings;
    const intensity = (s.lutIntensity || 100) / 100;
    const bright = 1 + (((s.brightness || 0) + (s.exposure || 0)) * intensity) / 100;
    const cont = 1 + ((s.contrast || 0) * intensity) / 100;
    const sat = Math.max(0, 1 + (((s.saturation || 0) + (s.vibrance || 0) / 2) * intensity) / 100);
    const sep = ((s.sepia || 0) * intensity) / 100;
    const blr = s.blur || 0;
    const hue = s.hueRotate || 0;

    return {
      filter: `brightness(${bright}) contrast(${cont}) saturate(${sat}) sepia(${sep}) blur(${blr}px) hue-rotate(${hue}deg)`
    };
  };

  const defaultPlaceholder = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';

  return (
    <div className="flex flex-col h-full overflow-hidden animate-fade-in select-none">
      {/* Header & Search */}
      <div className="p-4 border-b border-slate-800/60 flex flex-col gap-3 flex-shrink-0 bg-slate-950/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white tracking-tight">100+ Advanced Presets</h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-inner">
            Lightroom & Studio
          </span>
        </div>

        {/* Dev WhatsApp Channel Callout banner */}
        <a
          href="https://whatsapp.com/channel/0029Vb7uioRLo4hYKuvzYw15"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-2.5 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-emerald-950/60 border border-emerald-500/30 hover:border-emerald-500/50 transition-all cursor-pointer shadow-md group min-h-[48px]"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
              <MessageCircle className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white">Join Dev WhatsApp Channel</h4>
              <p className="text-[10px] text-slate-400">Get daily free iPhone LUTs & Lightroom Presets</p>
            </div>
          </div>
          <span className="text-[10px] font-bold bg-emerald-500 text-slate-950 px-2 py-0.5 rounded-md shadow-sm">JOIN</span>
        </a>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search iPhone Pro, Cinematic, Lightroom..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-50 text-xs focus:outline-none focus:border-indigo-500 transition-all shadow-inner font-medium min-h-[48px]"
          />
        </div>

        {/* Visual Rectangular Image Preview Category Thumbnails */}
        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">Filter Categories (Interactive Previews)</h4>
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 px-1 no-scrollbar">
            {categoriesWithThumbnails.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`group relative rounded-2xl overflow-hidden flex-shrink-0 w-28 sm:w-32 h-16 sm:h-20 border transition-all cursor-pointer shadow-lg ${
                    isSelected 
                      ? 'border-indigo-500 ring-2 ring-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-105' 
                      : 'border-slate-800 hover:border-slate-600 hover:scale-[1.02]'
                  }`}
                >
                  {/* Filtered Sample Photo / Split Screen Simulation */}
                  <img
                    src={cat.sampleUrl}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ filter: cat.filter }}
                  />

                  {/* Dark gradient overlay & Neon Glow Accent */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity`} />
                  
                  {/* Subtle top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.accent}`} />

                  {/* Label & Active Indicator */}
                  <div className="absolute inset-x-2 bottom-1.5 flex items-center justify-between z-10">
                    <span className={`text-[11px] font-black tracking-tight truncate ${isSelected ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-slate-200 group-hover:text-white'}`}>
                      {cat.label}
                    </span>
                    {isSelected && (
                      <div className="w-3.5 h-3.5 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_8px_#6366f1]">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Preset Cards Grid completely replaced with Vertical Image Preview Cards */}
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3.5 no-scrollbar">
        {filteredPresets.map((preset) => {
          const isSelected = activePresetId === preset.id;
          return (
            <div
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 border flex flex-col h-40 sm:h-48 shadow-lg ${
                isSelected 
                  ? 'border-indigo-500 ring-2 ring-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.6)] scale-[1.03]' 
                  : 'border-slate-800 hover:border-slate-600 hover:scale-[1.02]'
              }`}
            >
              {/* Rectangular image thumbnail acting as 'Live Preview' of the filter applied to user's photo */}
              <img
                src={currentImage || defaultPlaceholder}
                alt={preset.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out absolute inset-0"
                style={getPresetPreviewStyle(preset)}
              />

              {/* Top Category Badge Overlay */}
              <div className="absolute top-2.5 right-2.5 z-10">
                <span className={`text-[9px] font-black px-2 py-0.5 rounded shadow-md ${
                  preset.category === 'iPhone Pro' 
                    ? 'bg-amber-500 text-slate-950' 
                    : preset.category === 'Cinematic'
                    ? 'bg-blue-500 text-slate-950'
                    : preset.category === 'Social Media'
                    ? 'bg-pink-500 text-white'
                    : preset.category === 'Studio Portrait'
                    ? 'bg-emerald-500 text-slate-950'
                    : preset.category === 'Lightroom Master'
                    ? 'bg-indigo-500 text-white font-extrabold'
                    : 'bg-purple-500 text-white'
                }`}>
                  {preset.category}
                </span>
              </div>

              {/* Subtle dark gradient behind the text for perfect readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity pointer-events-none" />

              {/* Preset Name Overlayed at the Bottom-Left */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between z-10">
                <div>
                  <h4 className={`text-xs font-black tracking-tight mb-0.5 line-clamp-1 ${
                    isSelected ? 'text-white text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-slate-100 group-hover:text-white'
                  }`}>
                    {preset.name}
                  </h4>
                  <p className="text-[10px] text-slate-300 line-clamp-1 font-normal opacity-80 group-hover:opacity-100 transition-opacity">
                    {preset.description}
                  </p>
                </div>

                {isSelected && (
                  <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_12px_#6366f1] flex-shrink-0 animate-pulse">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}
              </div>

              {/* Subtle neon glow border on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          );
        })}

        {filteredPresets.length === 0 && (
          <div className="col-span-full py-12 text-center flex flex-col items-center gap-2">
            <p className="text-sm text-slate-400 font-medium">No presets found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="text-xs text-indigo-400 underline hover:text-indigo-300 cursor-pointer font-bold"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
