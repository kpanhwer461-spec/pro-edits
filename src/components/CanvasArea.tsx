import React, { useState, useRef, useEffect } from 'react';
import { SAMPLE_IMAGES, SampleImage } from '../data/sampleImages';
import { OverlayText, OverlaySticker } from './TextStickerPanel';
import { 
  Upload, 
  Image as ImageIcon, 
  Sparkles, 
  Sliders,
  RotateCcw,
  ChevronsLeftRight,
  Eye,
  EyeOff,
  Split,
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
  Activity
} from 'lucide-react';

interface CanvasAreaProps {
  currentImage: string;
  setCurrentImage: (url: string) => void;
  imageName: string;
  setImageName: (name: string) => void;
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
  isComparing: boolean;
  setIsComparing: (val: boolean) => void;
  aiEraserActive: boolean;
  eraserSize: number;
  bokehActive: boolean;
  bokehAperture: number;
  relightActive: boolean;
  relightAngle: number;
  relightIntensity: number;
  relightMode: string;
  colorSplashActive: boolean;
  splashHue: number;
  bgRemoved: boolean;
  upscalerActive: boolean;
  skyBoostActive: boolean;
  skinRetouchActive: boolean;
  aspectRatio: string;
  rotation: number;
  flipH: boolean;
  flipV: boolean;
  selectedFrame: string;
  texts: OverlayText[];
  stickers: OverlaySticker[];
  selectedOverlay: string;
  overlayOpacity: number;
  overlayBlend: string;
  onTriggerAutoEnhance?: () => void;
}

export const CanvasArea: React.FC<CanvasAreaProps> = ({
  currentImage,
  setCurrentImage,
  imageName,
  setImageName,
  settings,
  isComparing,
  setIsComparing,
  aiEraserActive,
  eraserSize,
  bokehActive,
  bokehAperture,
  relightActive,
  relightAngle,
  relightIntensity,
  relightMode,
  colorSplashActive,
  splashHue,
  bgRemoved,
  upscalerActive,
  skyBoostActive,
  skinRetouchActive,
  aspectRatio,
  rotation,
  flipH,
  flipV,
  selectedFrame,
  texts,
  stickers,
  selectedOverlay,
  overlayOpacity,
  overlayBlend,
  onTriggerAutoEnhance
}) => {
  const [splitPos, setSplitPos] = useState<number>(50);
  const [isDraggingSplit, setIsDraggingSplit] = useState<boolean>(false);
  const [compareMode, setCompareMode] = useState<'split' | 'before' | 'after'>('split');
  const [healingParticles, setHealingParticles] = useState<{ id: number; x: number; y: number }[]>([]);
  const [showSampleSelector, setShowSampleSelector] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute CSS Filter string for the adjusted image
  const getFilterStyle = (isOrig: boolean) => {
    if (isOrig || isComparing || compareMode === 'before') {
      return { filter: 'none', transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})` };
    }

    // Apply LUT Intensity modifier
    const intensity = settings.lutIntensity / 100;
    const bright = 1 + ((settings.brightness + settings.exposure) * intensity) / 100;
    const cont = 1 + (settings.contrast * intensity) / 100;
    const sat = Math.max(0, 1 + ((settings.saturation + settings.vibrance / 2) * intensity) / 100);
    const sep = (settings.sepia * intensity) / 100;
    const blr = settings.blur + (skinRetouchActive ? 0.5 : 0) + (settings.skinSmooth > 0 ? settings.skinSmooth / 100 : 0);
    const hue = settings.hueRotate;

    return {
      filter: `brightness(${bright}) contrast(${cont}) saturate(${sat}) sepia(${sep}) blur(${blr}px) hue-rotate(${hue}deg)`,
      transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
      transition: 'filter 0.2s ease-out, transform 0.3s ease-out'
    };
  };

  // Render sticker vector graphics
  const renderVectorSticker = (name: string, col: string) => {
    const props = { className: "w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]", style: { color: col } };
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

  // Handle Image Upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCurrentImage(url);
      setImageName(file.name.split('.')[0]);
      setShowSampleSelector(false);
    }
  };

  // Handle Sample Image Selection
  const handleSelectSample = (sample: SampleImage) => {
    setCurrentImage(sample.url);
    setImageName(sample.name);
    setShowSampleSelector(false);
  };

  // Handle AI Magic Eraser Click/Drag simulation
  const handleCanvasInteraction = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!aiEraserActive) return;

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Spawn healing particles
      const newParticles = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        x: x + (Math.random() - 0.5) * eraserSize,
        y: y + (Math.random() - 0.5) * eraserSize
      }));

      setHealingParticles(prev => [...prev.slice(-20), ...newParticles]);
    }
  };

  // Auto cleanup healing particles
  useEffect(() => {
    if (healingParticles.length > 0) {
      const timer = setTimeout(() => {
        setHealingParticles([]);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [healingParticles]);

  // Compute aspect ratio CSS classes
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case '1:1': return 'aspect-square max-w-[500px] max-h-[60vh]';
      case '4:5': return 'aspect-[4/5] max-w-[450px] max-h-[60vh]';
      case '16:9': return 'aspect-video max-w-[800px] max-h-[60vh]';
      case '9:16': return 'aspect-[9/16] max-w-[380px] max-h-[60vh]';
      case '3:2': return 'aspect-[3/2] max-w-[700px] max-h-[60vh]';
      default: return 'max-w-[800px] max-h-[65vh]'; // free
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-950 overflow-hidden relative select-none">
      {/* Top Utility Bar */}
      <div className="p-3 glass-panel border-b border-slate-800/80 flex items-center justify-between z-20 flex-shrink-0 bg-slate-950/80 backdrop-blur-2xl overflow-x-auto no-scrollbar gap-2">
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">Active Canvas:</span>
          <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="text-xs font-extrabold text-white tracking-wide line-clamp-1 max-w-[120px] sm:max-w-none">
              {imageName}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Explicit AI Image Enhancer Button (Instant 1-Click Accessibility) */}
          {onTriggerAutoEnhance && (
            <button
              onClick={onTriggerAutoEnhance}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer min-h-[44px]"
              title="Apply AI Image Enhancer / Auto HDR"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span className="hidden md:inline font-black">AI Image Enhancer</span>
              <span className="md:hidden font-black">AI Enhancer</span>
            </button>
          )}

          {/* Sample Selector Toggle */}
          <button
            onClick={() => setShowSampleSelector(!showSampleSelector)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-700/80 shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 min-h-[44px]"
          >
            <ImageIcon className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">Stock Library</span>
            <span className="sm:hidden font-bold">Stock</span>
          </button>

          {/* Upload Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all cursor-pointer hover:scale-105 active:scale-95 border border-indigo-400/30 min-h-[44px]"
          >
            <Upload className="w-4 h-4" />
            <span className="hidden sm:inline">Upload Image</span>
            <span className="sm:hidden font-bold">Upload</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Stock Image Selector Drawer / Modal */}
      {showSampleSelector && (
        <div className="absolute inset-x-0 top-14 z-30 p-6 glass-panel border-b border-slate-800 shadow-2xl animate-fade-in bg-slate-950/95 backdrop-blur-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Select High-Quality Stock Masterpiece</h4>
            </div>
            <button 
              onClick={() => setShowSampleSelector(false)}
              className="text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded-xl cursor-pointer transition-all border border-slate-700"
            >
              Close Library
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 overflow-x-auto pb-2 no-scrollbar">
            {SAMPLE_IMAGES.map((sample) => (
              <div
                key={sample.id}
                onClick={() => handleSelectSample(sample)}
                className="group relative rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500 cursor-pointer transition-all aspect-video shadow-xl hover:scale-[1.03] bg-slate-900"
              >
                <img 
                  src={sample.url} 
                  alt={sample.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                  <span className="text-xs font-black text-white tracking-tight line-clamp-1">{sample.name}</span>
                  <span className="text-[9px] font-extrabold bg-indigo-500/40 text-indigo-200 px-1.5 py-0.5 rounded border border-indigo-500/40">{sample.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Canvas Workspace */}
      <div 
        ref={containerRef}
        onMouseDown={handleCanvasInteraction}
        onTouchStart={handleCanvasInteraction}
        className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden relative select-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"
      >
        {/* Outer Frame Wrapper */}
        <div className={`relative w-full h-full flex items-center justify-center transition-all duration-300 ${getAspectRatioClass()}`}>
          
          {/* Premium Frame Overlay Containers */}
          {selectedFrame === 'iphone' && (
            <div className="absolute inset-0 z-30 border-[16px] sm:border-[20px] border-slate-900 rounded-[48px] sm:rounded-[56px] pointer-events-none shadow-[0_0_50px_rgba(0,0,0,0.9)] flex items-center justify-center overflow-hidden">
              {/* Dynamic Island */}
              <div className="iphone-dynamic-island">
                <div className="w-3.5 h-3.5 rounded-full bg-slate-950 border border-slate-800" />
                <div className="w-3 h-3 rounded-full bg-indigo-950 border border-indigo-500/50 animate-pulse" />
              </div>
            </div>
          )}

          {selectedFrame === 'polaroid' && (
            <div className="absolute inset-0 z-30 border-[18px] border-b-[70px] border-white rounded-xl pointer-events-none shadow-2xl flex items-end justify-center pb-4">
              <span className="text-sm font-serif font-black text-slate-800 tracking-widest uppercase">{imageName}</span>
            </div>
          )}

          {selectedFrame === 'cinematic' && (
            <div className="absolute inset-0 z-30 border-y-[45px] sm:border-y-[70px] border-black pointer-events-none shadow-2xl" />
          )}

          {selectedFrame === 'neon' && (
            <div className="absolute inset-0 z-30 border-4 border-fuchsia-500 rounded-3xl pointer-events-none shadow-[0_0_35px_rgba(217,70,239,0.85)]" />
          )}

          {selectedFrame === 'gold' && (
            <div className="absolute inset-0 z-30 border-[8px] border-amber-500/90 rounded-2xl pointer-events-none shadow-[0_0_30px_rgba(245,158,11,0.6)]" />
          )}

          {/* Image Container */}
          <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex items-center justify-center border border-slate-700/50 backdrop-blur-sm ${
            bgRemoved ? 'bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] bg-slate-950' : 'bg-slate-900/80'
          }`}>
            
            {/* Base Image with CSS Filters */}
            <img
              id="master-canvas-image"
              src={currentImage}
              alt="Preview"
              className={`w-full h-full object-contain select-none transition-all duration-300 ${
                upscalerActive ? 'contrast-[1.15] saturate-[1.05]' : ''
              } ${settings.clarity > 0 ? 'contrast-[1.10]' : ''} ${
                settings.dehaze > 0 ? 'contrast-[1.12] brightness-[0.95]' : ''
              }`}
              style={getFilterStyle(false)}
            />

            {/* Split Before/After Slider Overlay */}
            {compareMode === 'split' && !isComparing && (
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)` }}
              >
                <img 
                  src={currentImage} 
                  alt="Original" 
                  className="w-full h-full object-contain select-none absolute inset-0"
                  style={getFilterStyle(true)} 
                />
              </div>
            )}

            {/* Split Divider Line & Vector Handle */}
            {compareMode === 'split' && !isComparing && (
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)] z-20 cursor-ew-resize flex items-center justify-center pointer-events-auto"
                style={{ left: `${splitPos}%` }}
                onMouseDown={() => setIsDraggingSplit(true)}
                onTouchStart={() => setIsDraggingSplit(true)}
              >
                <div className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-2xl border-2 border-indigo-500 hover:scale-110 active:scale-95 transition-transform cursor-ew-resize">
                  <ChevronsLeftRight className="w-4 h-4 text-indigo-400 animate-pulse" />
                </div>
              </div>
            )}

            {/* AI Sky Boost Simulation */}
            {(skyBoostActive || settings.skyBoost > 0) && (
              <div 
                className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none bg-gradient-to-b from-blue-500/20 via-blue-500/5 to-transparent mix-blend-overlay"
              />
            )}

            {/* Chromatic Aberration Glitch Simulation */}
            {settings.chromaticAberration > 0 && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-50"
                style={{
                  backgroundImage: `url(${currentImage})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transform: `translate(${settings.chromaticAberration}px, 0px)`,
                  filter: 'hue-rotate(90deg)'
                }}
              />
            )}

            {/* Film Grain Simulation */}
            {settings.grain > 0 && (
              <div 
                className="absolute inset-0 z-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-40 mix-blend-overlay" 
              />
            )}

            {/* AI Studio Relight Overlay */}
            {relightActive && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none transition-all duration-300 mix-blend-overlay"
                style={{
                  background: relightMode === 'stage' 
                    ? `radial-gradient(circle at ${relightAngle}% 50%, rgba(255,255,255,${relightIntensity/100}) 0%, rgba(0,0,0,0.95) 80%)`
                    : relightMode === 'contour'
                    ? `linear-gradient(${relightAngle}deg, rgba(255,255,255,${relightIntensity/100}) 0%, rgba(0,0,0,0.6) 100%)`
                    : `radial-gradient(circle at ${relightAngle}% 30%, rgba(255,255,255,${relightIntensity/100}) 10%, transparent 70%)`
                }}
              />
            )}

            {/* AI Portrait Bokeh Ring Simulation */}
            {bokehActive && (
              <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                <div 
                  className="rounded-full border-2 border-white/30 animate-pulse-glow"
                  style={{
                    width: `${300 / bokehAperture}px`,
                    height: `${300 / bokehAperture}px`,
                    boxShadow: `0 0 ${60 / bokehAperture}px rgba(255,255,255,0.5)`
                  }}
                />
              </div>
            )}

            {/* AI Color Splash Monotone Tint Simulation */}
            {colorSplashActive && (
              <div 
                className="absolute inset-0 z-10 pointer-events-none mix-blend-color"
                style={{
                  backgroundColor: `hsl(${splashHue}, 100%, 50%)`,
                  opacity: 0.4
                }}
              />
            )}

            {/* AI Magic Eraser Particle Effect */}
            {healingParticles.map(p => (
              <span
                key={p.id}
                className="absolute w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_15px_#818cf8] animate-ping z-30 pointer-events-none"
                style={{ left: p.x, top: p.y }}
              />
            ))}

            {/* Vignette Overlay */}
            {settings.vignette > 0 && (
              <div 
                className="absolute inset-0 z-15 pointer-events-none transition-all duration-300"
                style={{
                  background: `radial-gradient(circle, transparent 50%, rgba(0,0,0,${settings.vignette / 100}) 100%)`
                }}
              />
            )}

            {/* Premium Overlays */}
            {selectedOverlay === 'light-leak' && (
              <div className="absolute inset-0 z-15 pointer-events-none bg-gradient-to-tr from-amber-500/50 via-transparent to-rose-500/50" style={{ opacity: overlayOpacity / 100, mixBlendMode: overlayBlend as any }} />
            )}
            {selectedOverlay === 'bokeh' && (
              <div className="absolute inset-0 z-15 pointer-events-none flex items-center justify-around flex-wrap p-8 overflow-hidden" style={{ opacity: overlayOpacity / 100, mixBlendMode: overlayBlend as any }}>
                {[...Array(14)].map((_, i) => (
                  <div key={i} className="w-16 h-16 rounded-full bg-amber-200/40 blur-md m-4 shadow-[0_0_25px_rgba(253,230,138,0.6)]" />
                ))}
              </div>
            )}
            {selectedOverlay === 'dust' && (
              <div className="absolute inset-0 z-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" style={{ opacity: overlayOpacity / 100, mixBlendMode: overlayBlend as any }} />
            )}
            {selectedOverlay === 'cyber' && (
              <div className="absolute inset-0 z-15 pointer-events-none bg-[linear-gradient(rgba(14,165,233,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.35)_1px,transparent_1px)] [background-size:24px_24px]" style={{ opacity: overlayOpacity / 100, mixBlendMode: overlayBlend as any }} />
            )}
            {selectedOverlay === 'rain' && (
              <div className="absolute inset-0 z-15 pointer-events-none bg-[linear-gradient(70deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:10px_35px]" style={{ opacity: overlayOpacity / 100, mixBlendMode: overlayBlend as any }} />
            )}
            {selectedOverlay === 'confetti' && (
              <div className="absolute inset-0 z-15 pointer-events-none flex items-center justify-around flex-wrap p-4 overflow-hidden" style={{ opacity: overlayOpacity / 100, mixBlendMode: overlayBlend as any }}>
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-3.5 h-3.5 bg-amber-400 rotate-45 m-6 shadow-[0_0_20px_rgba(251,191,36,0.9)]" />
                ))}
              </div>
            )}

            {/* Typography Overlays */}
            {texts.map((t) => (
              <div
                key={t.id}
                className={`absolute z-20 px-6 py-3 rounded-2xl transition-all cursor-move select-none ${t.font} ${
                  t.hasBg ? 'bg-slate-950/90 backdrop-blur-xl border border-white/20 shadow-2xl' : ''
                }`}
                style={{
                  color: t.color,
                  textShadow: t.hasGlow ? `0 0 20px ${t.color}, 0 0 35px ${t.color}` : 'none',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <span className="text-2xl sm:text-3xl font-black tracking-tight">{t.text}</span>
              </div>
            ))}

            {/* Sticker Badges (Vector Graphics) */}
            {stickers.map((s, idx) => (
              <div
                key={s.id}
                className="absolute z-20 cursor-move select-none animate-float"
                style={{
                  top: `${25 + (idx * 15)}%`,
                  left: `${25 + (idx * 20)}%`,
                }}
              >
                {renderVectorSticker(s.iconName, s.color)}
              </div>
            ))}

          </div>
        </div>

        {/* Global Split Drag Listener */}
        {isDraggingSplit && (
          <div 
            className="absolute inset-0 z-50 cursor-ew-resize"
            onMouseMove={(e) => {
              if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const pos = ((e.clientX - rect.left) / rect.width) * 100;
                setSplitPos(Math.max(0, Math.min(100, pos)));
              }
            }}
            onTouchMove={(e) => {
              if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const pos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                setSplitPos(Math.max(0, Math.min(100, pos)));
              }
            }}
            onMouseUp={() => setIsDraggingSplit(false)}
            onTouchEnd={() => setIsDraggingSplit(false)}
          />
        )}
      </div>

      {/* Bottom Status / Helper Bar with Explicit Button Toggles */}
      <div className="p-3 bg-slate-950/90 backdrop-blur-2xl border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 z-20 flex-shrink-0 gap-3 sm:gap-0">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 shadow-inner text-white font-bold flex-shrink-0">
            <Sliders className="w-4 h-4 text-indigo-400" /> 
            <span>Split: <strong className="text-indigo-300 font-mono">{splitPos.toFixed(0)}%</strong></span>
          </span>

          {/* Explicit View Toggles (Buttons instead of just slider) */}
          <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 flex-shrink-0">
            <button
              onClick={() => { setCompareMode('before'); setIsComparing(false); }}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 cursor-pointer ${
                compareMode === 'before' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Before</span>
            </button>

            <button
              onClick={() => { setCompareMode('split'); setIsComparing(false); }}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 cursor-pointer ${
                compareMode === 'split' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>Split View</span>
            </button>

            <button
              onClick={() => { setCompareMode('after'); setIsComparing(false); }}
              className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all flex items-center gap-1 cursor-pointer ${
                compareMode === 'after' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>After</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 font-normal w-full sm:w-auto justify-between sm:justify-end">
          {aiEraserActive ? (
            <span className="text-purple-400 font-bold animate-pulse bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-xl text-[11px]">
              ✨ Tap/Swipe Canvas to Heal
            </span>
          ) : (
            <span className="text-slate-400 text-[11px] hidden md:inline">Use View Buttons or Drag Divider to inspect edits</span>
          )}

          <button
            onClick={() => { setSplitPos(50); setCompareMode('split'); }}
            className="text-indigo-400 hover:text-indigo-300 font-bold underline cursor-pointer flex items-center gap-1 text-xs"
          >
            <RotateCcw className="w-3 h-3" /> Reset View
          </button>
        </div>
      </div>
    </div>
  );
};
