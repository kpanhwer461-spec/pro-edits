import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { PresetsPanel } from './components/PresetsPanel';
import { AdjustmentsPanel } from './components/AdjustmentsPanel';
import { AIMagicPanel } from './components/AIMagicPanel';
import { CropFramePanel } from './components/CropFramePanel';
import { TextStickerPanel, OverlayText, OverlaySticker } from './components/TextStickerPanel';
import { OverlaysPanel } from './components/OverlaysPanel';
import { CanvasArea } from './components/CanvasArea';
import { ExportModal } from './components/ExportModal';
import { WhatsAppBanner } from './components/WhatsAppBanner';
import { INITIAL_SETTINGS, FilterPreset } from './data/presets';
import { SAMPLE_IMAGES } from './data/sampleImages';

export const App: React.FC = () => {
  // Navigation
  const [activeTab, setActiveTab] = useState<string>('presets');

  // Image & Metadata
  const [currentImage, setCurrentImage] = useState<string>(SAMPLE_IMAGES[0].url);
  const [imageName, setImageName] = useState<string>(SAMPLE_IMAGES[0].name);

  // Core Adjustment Settings State
  const [settings, setSettings] = useState(INITIAL_SETTINGS);
  const [activePresetId, setActivePresetId] = useState<string | null>(null);

  // History for Undo / Redo
  const [history, setHistory] = useState<typeof INITIAL_SETTINGS[]>([INITIAL_SETTINGS]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  // UI Modes
  const [isComparing, setIsComparing] = useState<boolean>(false);
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState<boolean>(false);

  // AI Magic States
  const [aiEraserActive, setAiEraserActive] = useState<boolean>(false);
  const [eraserSize, setEraserSize] = useState<number>(30);
  const [bokehActive, setBokehActive] = useState<boolean>(false);
  const [bokehAperture, setBokehAperture] = useState<number>(2.8);
  const [relightActive, setRelightActive] = useState<boolean>(false);
  const [relightAngle, setRelightAngle] = useState<number>(120);
  const [relightIntensity, setRelightIntensity] = useState<number>(60);
  const [relightMode, setRelightMode] = useState<'studio' | 'contour' | 'stage'>('studio');
  const [colorSplashActive, setColorSplashActive] = useState<boolean>(false);
  const [splashHue, setSplashHue] = useState<number>(0); // Red default
  const [bgRemoved, setBgRemoved] = useState<boolean>(false);
  const [upscalerActive, setUpscalerActive] = useState<boolean>(false);
  const [skyBoostActive, setSkyBoostActive] = useState<boolean>(false);
  const [skinRetouchActive, setSkinRetouchActive] = useState<boolean>(false);

  // Crop & Frame States
  const [aspectRatio, setAspectRatio] = useState<string>('free');
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [selectedFrame, setSelectedFrame] = useState<string>('none');

  // Text & Sticker States
  const [texts, setTexts] = useState<OverlayText[]>([]);
  const [stickers, setStickers] = useState<OverlaySticker[]>([]);

  // Overlays States
  const [selectedOverlay, setSelectedOverlay] = useState<string>('none');
  const [overlayOpacity, setOverlayOpacity] = useState<number>(40);
  const [overlayBlend, setOverlayBlend] = useState<string>('screen');

  // Helper to push new settings into history
  const updateSettingsWithHistory = (newSettings: typeof INITIAL_SETTINGS) => {
    setSettings(newSettings);
    const updatedHistory = history.slice(0, historyIndex + 1);
    updatedHistory.push(newSettings);
    setHistory(updatedHistory);
    setHistoryIndex(updatedHistory.length - 1);
  };

  // Preset Selection
  const handleSelectPreset = (preset: FilterPreset) => {
    setActivePresetId(preset.id);
    const newSettings = { ...INITIAL_SETTINGS, ...preset.settings };
    updateSettingsWithHistory(newSettings);
  };

  // Single Setting Change
  const handleChangeSetting = (key: string, value: number) => {
    setActivePresetId(null); // Custom adjustment overrides preset
    const newSettings = { ...settings, [key]: value };
    updateSettingsWithHistory(newSettings);
  };

  // Reset Single Setting
  const handleResetSetting = (key: string, defaultValue: number) => {
    const newSettings = { ...settings, [key]: defaultValue };
    updateSettingsWithHistory(newSettings);
  };

  // Reset All Settings
  const handleResetAll = () => {
    setActivePresetId(null);
    setAspectRatio('free');
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
    setSelectedFrame('none');
    setTexts([]);
    setStickers([]);
    setSelectedOverlay('none');
    setAiEraserActive(false);
    setBokehActive(false);
    setRelightActive(false);
    setColorSplashActive(false);
    setBgRemoved(false);
    setUpscalerActive(false);
    setSkyBoostActive(false);
    setSkinRetouchActive(false);
    updateSettingsWithHistory(INITIAL_SETTINGS);
  };

  // Undo / Redo Actions
  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setSettings(history[prevIndex]);
      setHistoryIndex(prevIndex);
      setActivePresetId(null);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setSettings(history[nextIndex]);
      setHistoryIndex(nextIndex);
      setActivePresetId(null);
    }
  };

  // AI Auto Enhance Trigger
  const handleTriggerAutoEnhance = () => {
    setActivePresetId(null);
    const enhancedSettings = {
      ...settings,
      brightness: 8,
      contrast: 18,
      exposure: 5,
      saturation: 15,
      vibrance: 25,
      temperature: 2,
      sharpen: 25,
      highlights: -15,
      shadows: 20,
      gamma: 1.05,
      lutIntensity: 100,
      clarity: 15,
      skinSmooth: 25,
      skyBoost: 30
    };
    updateSettingsWithHistory(enhancedSettings);
  };

  // Automatically show WhatsApp banner after 5 seconds for community growth
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWhatsAppOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Panel props bundles for clean passing to Sidebar's mobile bottom sheet
  const presetProps = { onSelectPreset: handleSelectPreset, activePresetId, currentImage };
  const adjustmentProps = { settings, onChangeSetting: handleChangeSetting, onResetSetting: handleResetSetting };
  const aiMagicProps = {
    aiEraserActive, setAiEraserActive, eraserSize, setEraserSize,
    bokehActive, setBokehActive, bokehAperture, setBokehAperture,
    relightActive, setRelightActive, relightAngle, setRelightAngle,
    relightIntensity, setRelightIntensity, relightMode, setRelightMode,
    colorSplashActive, setColorSplashActive, splashHue, setSplashHue,
    bgRemoved, setBgRemoved, upscalerActive, setUpscalerActive,
    skyBoostActive, setSkyBoostActive, skinRetouchActive, setSkinRetouchActive,
    onTriggerAutoEnhance: handleTriggerAutoEnhance
  };
  const cropProps = { aspectRatio, setAspectRatio, rotation, setRotation, flipH, setFlipH, flipV, setFlipV, selectedFrame, setSelectedFrame };
  const textProps = { texts, setTexts, stickers, setStickers };
  const overlayProps = { selectedOverlay, setSelectedOverlay, overlayOpacity, setOverlayOpacity, overlayBlend, setOverlayBlend };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#0B0F19] text-slate-100 font-sans select-none">
      {/* Top Navbar */}
      <Navbar
        onReset={handleResetAll}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        isComparing={isComparing}
        setIsComparing={setIsComparing}
        onOpenExport={() => setIsExportOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        imageName={imageName}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex overflow-hidden relative pb-16 md:pb-0">
        {/* Sidebar / Navigation Tabs (Contains Mobile Bottom Bar & Swipeable Sheets) */}
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          presetProps={presetProps}
          adjustmentProps={adjustmentProps}
          aiMagicProps={aiMagicProps}
          cropProps={cropProps}
          textProps={textProps}
          overlayProps={overlayProps}
        />

        {/* Central Canvas Area (Automatically scales to fit 100% mobile screen width) */}
        <CanvasArea
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          imageName={imageName}
          setImageName={setImageName}
          settings={settings}
          isComparing={isComparing}
          setIsComparing={setIsComparing}
          aiEraserActive={aiEraserActive}
          eraserSize={eraserSize}
          bokehActive={bokehActive}
          bokehAperture={bokehAperture}
          relightActive={relightActive}
          relightAngle={relightAngle}
          relightIntensity={relightIntensity}
          relightMode={relightMode}
          colorSplashActive={colorSplashActive}
          splashHue={splashHue}
          bgRemoved={bgRemoved}
          upscalerActive={upscalerActive}
          skyBoostActive={skyBoostActive}
          skinRetouchActive={skinRetouchActive}
          aspectRatio={aspectRatio}
          rotation={rotation}
          flipH={flipH}
          flipV={flipV}
          selectedFrame={selectedFrame}
          texts={texts}
          stickers={stickers}
          selectedOverlay={selectedOverlay}
          overlayOpacity={overlayOpacity}
          overlayBlend={overlayBlend}
          onTriggerAutoEnhance={handleTriggerAutoEnhance}
        />

        {/* Right Tool Panel (Desktop Only - Hidden on Mobile by default) */}
        <aside className="hidden md:flex w-85 glass-panel border-l border-slate-800/80 flex-col h-full flex-shrink-0 z-30 bg-[#0B0F19]/90 backdrop-blur-2xl">
          {activeTab === 'presets' && <PresetsPanel {...presetProps} />}
          {activeTab === 'adjustments' && <AdjustmentsPanel {...adjustmentProps} />}
          {activeTab === 'ai-magic' && <AIMagicPanel {...aiMagicProps} />}
          {activeTab === 'crop' && <CropFramePanel {...cropProps} />}
          {activeTab === 'text' && <TextStickerPanel {...textProps} />}
          {activeTab === 'overlays' && <OverlaysPanel {...overlayProps} />}
        </aside>
      </div>

      {/* Modals & Popups */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        imageName={imageName}
      />

      <WhatsAppBanner
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />
    </div>
  );
};
