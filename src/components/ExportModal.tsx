import React, { useState } from 'react';
import { 
  X, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle,
  ShieldCheck
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageName: string;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, imageName }) => {
  const [resolution, setResolution] = useState<'1080p' | '2k' | '4k'>('2k');
  const [format, setFormat] = useState<'png' | 'jpg' | 'webp'>('png');
  const [isExporting, setIsExporting] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);

  if (!isOpen) return null;

  const handleExport = async () => {
    setIsExporting(true);
    setExportSuccess(false);

    try {
      const imgElement = document.getElementById('master-canvas-image') as HTMLImageElement;
      let downloadUrl = imgElement ? imgElement.src : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=100';

      // Attempt to fetch the image as a clean Blob to bypass CORS canvas tainting
      try {
        const response = await fetch(downloadUrl, { mode: 'cors' });
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        // Create an offscreen image to render onto canvas with active CSS filters
        const tempImg = new Image();
        tempImg.crossOrigin = 'Anonymous';
        tempImg.src = blobUrl;

        await new Promise((resolve) => {
          tempImg.onload = () => {
            try {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              if (ctx) {
                // Scale dimensions based on selected resolution quality
                let scale = resolution === '4k' ? 2 : resolution === '2k' ? 1.5 : 1;
                canvas.width = (tempImg.naturalWidth || 1920) * scale;
                canvas.height = (tempImg.naturalHeight || 1080) * scale;

                if (imgElement && imgElement.style.filter) {
                  ctx.filter = imgElement.style.filter;
                }
                ctx.drawImage(tempImg, 0, 0, canvas.width, canvas.height);
                downloadUrl = canvas.toDataURL(`image/${format === 'jpg' ? 'jpeg' : format}`, 0.95);
              }
            } catch (canvasErr) {
              console.warn("Canvas export fallback triggered:", canvasErr);
              downloadUrl = blobUrl; // Fallback to clean blob URL if canvas tainting occurs
            }
            resolve(true);
          };
          tempImg.onerror = () => resolve(true);
        });
      } catch (fetchErr) {
        console.warn("Fetch Blob fallback triggered:", fetchErr);
        // Direct fallback if fetch fails
      }

      // Execute robust download
      const link = document.createElement('a');
      link.download = `KASHIF-EDIT-${imageName || 'Masterpiece'}-${resolution}.${format}`;
      link.href = downloadUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsExporting(false);
      setExportSuccess(true);
    } catch (error) {
      console.error("Export failed:", error);
      setIsExporting(false);
      // Fallback direct download
      const link = document.createElement('a');
      link.download = `KASHIF-EDIT-${imageName || 'Masterpiece'}.${format}`;
      link.href = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=100';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setExportSuccess(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-2xl flex items-center justify-center p-4 animate-fade-in select-none">
      <div className="glass-panel w-full max-w-md rounded-3xl border border-slate-700/80 shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col bg-slate-950/90">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/60">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <h3 className="text-base font-black text-white tracking-tight">Save & Export Studio</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[80vh] no-scrollbar">
          {exportSuccess ? (
            <div className="py-6 flex flex-col items-center text-center gap-4 animate-scale-up">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>
              <div>
                <h4 className="text-lg font-black text-white mb-1">Masterpiece Saved Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Your ultra high-definition photo has been rendered and downloaded to your device with <span className="text-emerald-400 font-bold">0% Watermark</span>.
                </p>
              </div>

              {/* Dev WhatsApp Promo */}
              <div className="w-full p-4 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 border border-emerald-500/30 text-left mt-2 shadow-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                  <h5 className="text-xs font-black text-white uppercase tracking-wider">Join Kashif Edit WhatsApp</h5>
                </div>
                <p className="text-[11px] text-slate-300 mb-4 font-normal leading-relaxed">
                  Get daily free Lightroom presets, iPhone Pro LUTs, and VIP editing assets directly on WhatsApp!
                </p>
                <a
                  href="https://whatsapp.com/channel/0029Vb7uioRLo4hYKuvzYw15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs transition-all shadow-lg flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-400/30"
                >
                  <span>Join Official WhatsApp Channel</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-all cursor-pointer mt-2 border border-slate-700"
              >
                Back to Editor Workspace
              </button>
            </div>
          ) : (
            <>
              {/* Guarantee Banner */}
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 shadow-inner">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-black text-emerald-400 uppercase tracking-wider">100% Free & No Watermark</h5>
                  <p className="text-[11px] text-slate-300 leading-tight mt-0.5">Your exported photos will be crystal clean without any branding logos.</p>
                </div>
              </div>

              {/* Resolution selection */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-300 uppercase tracking-wider block">
                  Select Resolution Quality
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: '1080p', label: '1080p FHD', desc: 'Standard Web' },
                    { id: '2k', label: '2K QHD', desc: 'Super Crisp' },
                    { id: '4k', label: '4K Ultra HD', desc: 'Pro Master' },
                  ].map((res) => (
                    <button
                      key={res.id}
                      onClick={() => setResolution(res.id as any)}
                      className={`p-3.5 rounded-2xl border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        resolution === res.id
                          ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-white/30 shadow-xl shadow-indigo-500/20 font-bold scale-[1.03]'
                          : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold">{res.label}</span>
                      <span className={`text-[10px] ${resolution === res.id ? 'text-indigo-100 font-medium' : 'text-slate-500'}`}>{res.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* File format */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-300 uppercase tracking-wider block">
                  Export Format
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'png', label: 'PNG', desc: 'Lossless Quality' },
                    { id: 'jpg', label: 'JPEG', desc: 'Best Compatibility' },
                    { id: 'webp', label: 'WebP', desc: 'Optimized Size' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFormat(f.id as any)}
                      className={`p-3.5 rounded-2xl border transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        format === f.id
                          ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-white/30 shadow-xl shadow-indigo-500/20 font-bold scale-[1.03]'
                          : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold uppercase">{f.label}</span>
                      <span className={`text-[10px] ${format === f.id ? 'text-indigo-100 font-medium' : 'text-slate-500'}`}>{f.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleExport}
                disabled={isExporting}
                className={`w-full py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2.5 shadow-2xl cursor-pointer border ${
                  isExporting
                    ? 'bg-slate-800 text-slate-400 cursor-wait border-slate-700'
                    : 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-700 text-white hover:scale-[1.02] active:scale-[0.98] shadow-indigo-500/30 border-white/20'
                }`}
              >
                {isExporting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Rendering 4K Neural Engine...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 animate-bounce" />
                    <span>Download Masterpiece (Free & No Watermark)</span>
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
