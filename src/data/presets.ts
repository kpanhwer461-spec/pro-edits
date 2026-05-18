export interface FilterPreset {
  id: string;
  name: string;
  category: string;
  description: string;
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
}

const defaultAdvanced = {
  lutIntensity: 100,
  shadowTint: 0,
  highlightTint: 0,
  midtoneTint: 0,
  hslRedHue: 0,
  hslRedSat: 0,
  hslGreenHue: 0,
  hslGreenSat: 0,
  hslBlueHue: 0,
  hslBlueSat: 0,
  dehaze: 0,
  clarity: 0,
  grain: 0,
  chromaticAberration: 0,
  skinSmooth: 0,
  skyBoost: 0
};

export const INITIAL_SETTINGS = {
  brightness: 0,
  contrast: 0,
  exposure: 0,
  saturation: 0,
  vibrance: 0,
  temperature: 0,
  tint: 0,
  sepia: 0,
  blur: 0,
  sharpen: 0,
  vignette: 0,
  hueRotate: 0,
  highlights: 0,
  shadows: 0,
  gamma: 1.0,
  ...defaultAdvanced
};

// Generates 100+ highly advanced Lightroom & Studio Light presets
export const FILTER_PRESETS: FilterPreset[] = [
  // --- IPHONE PRO EDITIONS (10 Presets) ---
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro Max',
    category: 'iPhone Pro',
    description: 'Ultra crisp, Smart HDR 5 tone with vibrant highlights and sky boost',
    settings: { brightness: 5, contrast: 12, exposure: 4, saturation: 8, vibrance: 15, temperature: 0, tint: 0, sepia: 0, blur: 0, sharpen: 25, vignette: 5, hueRotate: 0, highlights: -8, shadows: 12, gamma: 1.02, ...defaultAdvanced, lutIntensity: 95, clarity: 15, skyBoost: 30 }
  },
  {
    id: 'iphone-15-studio',
    name: 'iPhone 15 Studio Light',
    category: 'iPhone Pro',
    description: 'Brightened facial tones with clean studio atmosphere and smooth skin',
    settings: { brightness: 8, contrast: 8, exposure: 6, saturation: 5, vibrance: 10, temperature: -3, tint: 2, sepia: 0, blur: 0, sharpen: 18, vignette: 8, hueRotate: 0, highlights: -5, shadows: 15, gamma: 1.05, ...defaultAdvanced, skinSmooth: 40, clarity: 10 }
  },
  {
    id: 'iphone-14-cinematic',
    name: 'iPhone 14 Cinematic',
    category: 'iPhone Pro',
    description: 'Subtle warm cinematic depth with rich contrast and highlight tint',
    settings: { brightness: 2, contrast: 18, exposure: 2, saturation: -5, vibrance: 20, temperature: 8, tint: -2, sepia: 5, blur: 0, sharpen: 20, vignette: 15, hueRotate: 0, highlights: -12, shadows: 8, gamma: 0.98, ...defaultAdvanced, highlightTint: 35, grain: 12 }
  },
  {
    id: 'iphone-13-dramatic',
    name: 'iPhone 13 Dramatic Warm',
    category: 'iPhone Pro',
    description: 'Apple iOS classic dramatic warm filter preset with dehaze',
    settings: { brightness: -5, contrast: 25, exposure: -2, saturation: 12, vibrance: 5, temperature: 15, tint: 5, sepia: 10, blur: 0, sharpen: 15, vignette: 20, hueRotate: 0, highlights: -15, shadows: -5, gamma: 0.95, ...defaultAdvanced, dehaze: 20 }
  },
  {
    id: 'iphone-12-deep-fusion',
    name: 'iPhone 12 Deep Fusion',
    category: 'iPhone Pro',
    description: 'Maximized micro-contrast, extreme detail clarity and structure',
    settings: { brightness: 0, contrast: 15, exposure: 0, saturation: 5, vibrance: 12, temperature: -2, tint: 0, sepia: 0, blur: 0, sharpen: 40, vignette: 10, hueRotate: 0, highlights: -10, shadows: 10, gamma: 1.0, ...defaultAdvanced, clarity: 35 }
  },
  {
    id: 'iphone-11-night',
    name: 'iPhone 11 Night Mode',
    category: 'iPhone Pro',
    description: 'Lifts shadows, adds a gentle warm ambient glow and shadow tint',
    settings: { brightness: 15, contrast: 5, exposure: 12, saturation: 10, vibrance: 15, temperature: 10, tint: 5, sepia: 0, blur: 0, sharpen: 15, vignette: 5, hueRotate: 0, highlights: -20, shadows: 30, gamma: 1.1, ...defaultAdvanced, shadowTint: 220, dehaze: 10 }
  },
  {
    id: 'apple-smart-hdr',
    name: 'Apple Smart HDR',
    category: 'iPhone Pro',
    description: 'Perfectly balanced dynamic range for tricky lighting and rich skies',
    settings: { brightness: 4, contrast: 10, exposure: 3, saturation: 6, vibrance: 18, temperature: 0, tint: 0, sepia: 0, blur: 0, sharpen: 22, vignette: 6, hueRotate: 0, highlights: -25, shadows: 25, gamma: 1.03, ...defaultAdvanced, skyBoost: 40 }
  },
  {
    id: 'ios-vivid-warm',
    name: 'iOS Vivid Warm',
    category: 'iPhone Pro',
    description: 'High saturation with golden warm undertones and clarity',
    settings: { brightness: 5, contrast: 15, exposure: 5, saturation: 25, vibrance: 20, temperature: 12, tint: 4, sepia: 5, blur: 0, sharpen: 15, vignette: 10, hueRotate: 0, highlights: -10, shadows: 5, gamma: 1.02, ...defaultAdvanced, hslRedSat: 15, clarity: 15 }
  },
  {
    id: 'ios-vivid-cool',
    name: 'iOS Vivid Cool',
    category: 'iPhone Pro',
    description: 'Crisp, punchy colors with a modern icy blue tint',
    settings: { brightness: 5, contrast: 15, exposure: 5, saturation: 25, vibrance: 20, temperature: -12, tint: -4, sepia: 0, blur: 0, sharpen: 15, vignette: 10, hueRotate: 0, highlights: -8, shadows: 8, gamma: 1.02, ...defaultAdvanced, hslBlueSat: 20 }
  },
  {
    id: 'ios-silvertone',
    name: 'iOS Silvertone',
    category: 'iPhone Pro',
    description: 'Elegant metallic monochrome with rich midtones',
    settings: { brightness: 2, contrast: 20, exposure: 0, saturation: -100, vibrance: -100, temperature: 0, tint: 0, sepia: 5, blur: 0, sharpen: 25, vignette: 15, hueRotate: 0, highlights: -5, shadows: 15, gamma: 0.98, ...defaultAdvanced }
  },

  // --- STUDIO PORTRAIT & LIGHT (15 Presets) ---
  {
    id: 'glamour-skin',
    name: 'Glamour Skin Smooth',
    category: 'Studio Portrait',
    description: 'Softened details for perfect flawless skin with bright eyes',
    settings: { brightness: 8, contrast: 8, exposure: 6, saturation: 4, vibrance: 12, temperature: 2, tint: 4, sepia: 0, blur: 0, sharpen: 8, vignette: 8, hueRotate: 0, highlights: -8, shadows: 14, gamma: 1.06, ...defaultAdvanced, skinSmooth: 65 }
  },
  {
    id: 'high-key-crisp',
    name: 'High Key Crisp',
    category: 'Studio Portrait',
    description: 'Bright, shadowless commercial studio lighting with extreme clarity',
    settings: { brightness: 18, contrast: 12, exposure: 15, saturation: 2, vibrance: 15, temperature: -2, tint: 0, sepia: 0, blur: 0, sharpen: 25, vignette: 2, hueRotate: 0, highlights: -25, shadows: 35, gamma: 1.15, ...defaultAdvanced, clarity: 20 }
  },
  {
    id: 'low-key-moody',
    name: 'Low Key Moody',
    category: 'Studio Portrait',
    description: 'Dark, dramatic portrait lighting with deep rich shadows and grain',
    settings: { brightness: -18, contrast: 30, exposure: -15, saturation: -10, vibrance: 10, temperature: 5, tint: 2, sepia: 5, blur: 0, sharpen: 22, vignette: 35, hueRotate: 0, highlights: -5, shadows: -30, gamma: 0.88, ...defaultAdvanced, grain: 25 }
  },
  {
    id: 'fashion-vogue',
    name: 'Fashion Vogue',
    category: 'Studio Portrait',
    description: 'High fashion editorial look with edgy contrast, sleek tones, and retouch',
    settings: { brightness: 4, contrast: 25, exposure: 2, saturation: -8, vibrance: 20, temperature: -4, tint: 6, sepia: 0, blur: 0, sharpen: 30, vignette: 15, hueRotate: 0, highlights: -10, shadows: 8, gamma: 0.98, ...defaultAdvanced, skinSmooth: 35 }
  },
  {
    id: 'corporate-clean',
    name: 'Corporate Clean',
    category: 'Studio Portrait',
    description: 'Ultra professional, sharp, perfectly balanced headshot tone',
    settings: { brightness: 5, contrast: 14, exposure: 4, saturation: 5, vibrance: 15, temperature: 0, tint: 0, sepia: 0, blur: 0, sharpen: 28, vignette: 8, hueRotate: 0, highlights: -12, shadows: 15, gamma: 1.02, ...defaultAdvanced, clarity: 15 }
  },
  {
    id: 'boudoir-soft',
    name: 'Boudoir Soft',
    category: 'Studio Portrait',
    description: 'Intimate, warm, hazy soft-focus portrait atmosphere with skin smooth',
    settings: { brightness: 10, contrast: 4, exposure: 8, saturation: -5, vibrance: 10, temperature: 15, tint: 10, sepia: 12, blur: 0, sharpen: 5, vignette: 18, hueRotate: 0, highlights: -20, shadows: 22, gamma: 1.1, ...defaultAdvanced, skinSmooth: 45 }
  },
  {
    id: 'classic-monochrome',
    name: 'Classic Monochrome',
    category: 'Studio Portrait',
    description: 'Timeless black & white portrait with beautiful smooth tonal gradation',
    settings: { brightness: 2, contrast: 18, exposure: 2, saturation: -100, vibrance: -100, temperature: 0, tint: 0, sepia: 0, blur: 0, sharpen: 22, vignette: 15, hueRotate: 0, highlights: -10, shadows: 15, gamma: 1.0, ...defaultAdvanced, clarity: 10 }
  },
  {
    id: 'high-contrast-bw',
    name: 'High Contrast B&W',
    category: 'Studio Portrait',
    description: 'Bold, striking black and white with deep blacks and bright whites',
    settings: { brightness: 0, contrast: 35, exposure: 0, saturation: -100, vibrance: -100, temperature: 0, tint: 0, sepia: 0, blur: 0, sharpen: 30, vignette: 22, hueRotate: 0, highlights: -5, shadows: -20, gamma: 0.95, ...defaultAdvanced, clarity: 25 }
  },
  {
    id: 'rembrandt-shadow',
    name: 'Rembrandt Shadow',
    category: 'Studio Portrait',
    description: 'Classic painterly portrait light with rich warm shadows',
    settings: { brightness: -6, contrast: 24, exposure: -4, saturation: 8, vibrance: 12, temperature: 18, tint: 5, sepia: 15, blur: 0, sharpen: 20, vignette: 28, hueRotate: 0, highlights: -10, shadows: -15, gamma: 0.95, ...defaultAdvanced }
  },
  {
    id: 'matte-fade',
    name: 'Matte Fade',
    category: 'Studio Portrait',
    description: 'Hipster faded film look with milky crushed shadows',
    settings: { brightness: 8, contrast: -8, exposure: 5, saturation: -12, vibrance: 8, temperature: 6, tint: 4, sepia: 10, blur: 0, sharpen: 15, vignette: 12, hueRotate: 0, highlights: -15, shadows: 30, gamma: 1.12, ...defaultAdvanced }
  },
  {
    id: 'studio-glamour-pro',
    name: 'Studio Glamour Pro',
    category: 'Studio Portrait',
    description: 'High-end studio magazine look with lifted shadows and crisp eyes',
    settings: { brightness: 12, contrast: 15, exposure: 8, saturation: 5, vibrance: 20, temperature: -2, tint: 3, sepia: 0, blur: 0, sharpen: 35, vignette: 10, hueRotate: 0, highlights: -15, shadows: 20, gamma: 1.05, ...defaultAdvanced, skinSmooth: 55, clarity: 18 }
  },
  {
    id: 'ethereal-light',
    name: 'Ethereal Light',
    category: 'Studio Portrait',
    description: 'Soft, glowing white highlights perfect for bridal and maternity portraits',
    settings: { brightness: 15, contrast: 5, exposure: 10, saturation: -5, vibrance: 15, temperature: -5, tint: 5, sepia: 0, blur: 0, sharpen: 20, vignette: 5, hueRotate: 0, highlights: -5, shadows: 25, gamma: 1.1, ...defaultAdvanced, skinSmooth: 50 }
  },
  {
    id: 'golden-headshot',
    name: 'Golden Headshot',
    category: 'Studio Portrait',
    description: 'Warm professional headshot tone with deep rich contrast and clarity',
    settings: { brightness: 5, contrast: 20, exposure: 5, saturation: 10, vibrance: 15, temperature: 15, tint: 0, sepia: 5, blur: 0, sharpen: 30, vignette: 15, hueRotate: 0, highlights: -10, shadows: 15, gamma: 1.02, ...defaultAdvanced, clarity: 25 }
  },
  {
    id: 'dramatic-contour',
    name: 'Dramatic Contour',
    category: 'Studio Portrait',
    description: 'Sculpts facial features with intense shadow contrast and cool highlights',
    settings: { brightness: -10, contrast: 35, exposure: -5, saturation: -15, vibrance: 10, temperature: -10, tint: 5, sepia: 0, blur: 0, sharpen: 25, vignette: 30, hueRotate: 0, highlights: 10, shadows: -30, gamma: 0.92, ...defaultAdvanced, clarity: 30 }
  },
  {
    id: 'vintage-vogue',
    name: 'Vintage Vogue',
    category: 'Studio Portrait',
    description: '1960s fashion aesthetic with sepia undertones and soft grain',
    settings: { brightness: 5, contrast: 10, exposure: 5, saturation: -20, vibrance: 10, temperature: 20, tint: 10, sepia: 30, blur: 0, sharpen: 15, vignette: 20, hueRotate: 0, highlights: -15, shadows: 20, gamma: 1.08, ...defaultAdvanced, grain: 35 }
  },

  // --- LIGHTROOM MASTER & CINEMATIC (25 Presets) ---
  {
    id: 'lr-master-pro',
    name: 'LR Master Pro',
    category: 'Lightroom Master',
    description: 'The ultimate professional color grade with perfect dynamic range and clarity',
    settings: { brightness: 5, contrast: 18, exposure: 5, saturation: 10, vibrance: 25, temperature: 2, tint: 2, sepia: 0, blur: 0, sharpen: 30, vignette: 10, hueRotate: 0, highlights: -20, shadows: 25, gamma: 1.03, ...defaultAdvanced, clarity: 25, dehaze: 15, skyBoost: 35 }
  },
  {
    id: 'lr-crisp-hdr',
    name: 'LR Crisp HDR',
    category: 'Lightroom Master',
    description: 'High dynamic range pop with intense micro-contrast and vivid colors',
    settings: { brightness: 8, contrast: 25, exposure: 6, saturation: 18, vibrance: 30, temperature: 0, tint: 0, sepia: 0, blur: 0, sharpen: 40, vignette: 12, hueRotate: 0, highlights: -30, shadows: 35, gamma: 1.05, ...defaultAdvanced, clarity: 40, dehaze: 20, skyBoost: 45 }
  },
  {
    id: 'lr-moody-teal',
    name: 'LR Moody Teal',
    category: 'Lightroom Master',
    description: 'Deep moody greens and rich teal highlights for epic outdoor shots',
    settings: { brightness: -8, contrast: 28, exposure: -4, saturation: -25, vibrance: 20, temperature: -8, tint: -15, sepia: 0, blur: 0, sharpen: 35, vignette: 25, hueRotate: -20, highlights: -15, shadows: -10, gamma: 0.95, ...defaultAdvanced, clarity: 30, dehaze: 25 }
  },
  {
    id: 'lr-golden-hour',
    name: 'LR Golden Hour',
    category: 'Lightroom Master',
    description: 'Pure golden sunlight glow with lifted shadows and warm highlights',
    settings: { brightness: 6, contrast: 15, exposure: 5, saturation: 25, vibrance: 35, temperature: 30, tint: 10, sepia: 15, blur: 0, sharpen: 25, vignette: 15, hueRotate: 0, highlights: -15, shadows: 20, gamma: 1.04, ...defaultAdvanced, highlightTint: 40, skyBoost: 40 }
  },
  {
    id: 'lr-dark-gotham',
    name: 'LR Dark Gotham',
    category: 'Lightroom Master',
    description: 'Gritty, dark blue-grey atmosphere with stark shadows and high clarity',
    settings: { brightness: -15, contrast: 35, exposure: -10, saturation: -50, vibrance: -10, temperature: -20, tint: -10, sepia: 0, blur: 0, sharpen: 35, vignette: 35, hueRotate: 10, highlights: -10, shadows: -30, gamma: 0.88, ...defaultAdvanced, clarity: 45, dehaze: 30 }
  },
  {
    id: 'lr-pure-clean',
    name: 'LR Pure Clean',
    category: 'Lightroom Master',
    description: 'Ultra clean commercial look with true whites and accurate colors',
    settings: { brightness: 10, contrast: 12, exposure: 8, saturation: 5, vibrance: 20, temperature: 0, tint: 0, sepia: 0, blur: 0, sharpen: 28, vignette: 5, hueRotate: 0, highlights: -12, shadows: 18, gamma: 1.03, ...defaultAdvanced, clarity: 15 }
  },
  {
    id: 'cyberpunk-2077',
    name: 'Cyberpunk 2077',
    category: 'Cinematic',
    description: 'Neon magenta and cyan dystopian future grading with chromatic glitch',
    settings: { brightness: -2, contrast: 25, exposure: 2, saturation: 35, vibrance: 40, temperature: -15, tint: 25, sepia: 0, blur: 0, sharpen: 30, vignette: 20, hueRotate: 30, highlights: 10, shadows: -15, gamma: 0.96, ...defaultAdvanced, shadowTint: 280, highlightTint: 180, chromaticAberration: 8, grain: 25 }
  },
  {
    id: 'teal-orange',
    name: 'Teal & Orange',
    category: 'Cinematic',
    description: 'Hollywood blockbuster color palette for pop, depth, and dehaze',
    settings: { brightness: 0, contrast: 22, exposure: 2, saturation: 18, vibrance: 25, temperature: 10, tint: -10, sepia: 0, blur: 0, sharpen: 20, vignette: 18, hueRotate: -15, highlights: -15, shadows: 12, gamma: 1.0, ...defaultAdvanced, shadowTint: 200, highlightTint: 30, dehaze: 15 }
  },
  {
    id: 'moody-dark',
    name: 'Moody Dark',
    category: 'Cinematic',
    description: 'Underexposed, desaturated aesthetic for intense atmosphere and grain',
    settings: { brightness: -15, contrast: 20, exposure: -12, saturation: -30, vibrance: -10, temperature: -5, tint: 0, sepia: 5, blur: 0, sharpen: 15, vignette: 30, hueRotate: 0, highlights: -25, shadows: -15, gamma: 0.90, ...defaultAdvanced, grain: 30, clarity: 20 }
  },
  {
    id: 'golden-sunset',
    name: 'Golden Hour Sunset',
    category: 'Cinematic',
    description: 'Bathes the image in dreamy, warm golden afternoon light and sky boost',
    settings: { brightness: 5, contrast: 15, exposure: 5, saturation: 30, vibrance: 25, temperature: 28, tint: 10, sepia: 15, blur: 0, sharpen: 15, vignette: 12, hueRotate: 0, highlights: -10, shadows: 10, gamma: 1.05, ...defaultAdvanced, highlightTint: 45, skyBoost: 50 }
  },
  {
    id: 'blade-runner',
    name: 'Blade Runner Neon',
    category: 'Cinematic',
    description: 'Deep shadows with intense orange/teal neon highlights and mist dehaze',
    settings: { brightness: -10, contrast: 35, exposure: -5, saturation: 25, vibrance: 30, temperature: 15, tint: 15, sepia: 0, blur: 0, sharpen: 25, vignette: 28, hueRotate: -25, highlights: 15, shadows: -25, gamma: 0.92, ...defaultAdvanced, dehaze: 25, chromaticAberration: 4 }
  },
  {
    id: 'vintage-film-35mm',
    name: 'Vintage Film 35mm',
    category: 'Cinematic',
    description: 'Classic analog film look with lifted blacks, warm tones, and heavy grain',
    settings: { brightness: 5, contrast: -5, exposure: 4, saturation: -15, vibrance: 10, temperature: 12, tint: 8, sepia: 20, blur: 0, sharpen: 10, vignette: 15, hueRotate: 0, highlights: -15, shadows: 25, gamma: 1.12, ...defaultAdvanced, grain: 45 }
  },
  {
    id: 'imax-dramatic',
    name: 'IMAX Dramatic',
    category: 'Cinematic',
    description: 'Ultra wide dynamic range with punchy cinema contrast and clarity',
    settings: { brightness: 3, contrast: 28, exposure: 2, saturation: 10, vibrance: 22, temperature: -2, tint: 2, sepia: 0, blur: 0, sharpen: 30, vignette: 20, hueRotate: 0, highlights: -20, shadows: 15, gamma: 0.98, ...defaultAdvanced, clarity: 25 }
  },
  {
    id: 'wes-anderson',
    name: 'Wes Anderson Pastel',
    category: 'Cinematic',
    description: 'Symmetrical pastel warmth with flattened highlights and midtone tint',
    settings: { brightness: 8, contrast: 5, exposure: 6, saturation: 15, vibrance: 25, temperature: 18, tint: -5, sepia: 12, blur: 0, sharpen: 15, vignette: 5, hueRotate: -10, highlights: -22, shadows: 18, gamma: 1.08, ...defaultAdvanced, midtoneTint: 40 }
  },
  {
    id: 'matrix-green',
    name: 'Matrix Green',
    category: 'Cinematic',
    description: 'Iconic sci-fi green digital tint with high contrast',
    settings: { brightness: -5, contrast: 30, exposure: -2, saturation: -10, vibrance: 10, temperature: -20, tint: -35, sepia: 0, blur: 0, sharpen: 25, vignette: 25, hueRotate: 70, highlights: -10, shadows: -20, gamma: 0.95, ...defaultAdvanced, shadowTint: 120 }
  },
  {
    id: 'retro-vhs',
    name: 'Retro VHS 80s',
    category: 'Cinematic',
    description: 'Slightly distorted analog vibe with bold magenta tint',
    settings: { brightness: 2, contrast: 15, exposure: 0, saturation: 20, vibrance: 15, temperature: 8, tint: 20, sepia: 10, blur: 1, sharpen: 35, vignette: 22, hueRotate: 15, highlights: 5, shadows: 5, gamma: 1.0, ...defaultAdvanced }
  },
  {
    id: 'sepia-gold',
    name: 'Sepia Gold Royale',
    category: 'Cinematic',
    description: 'Luxurious deep golden monochrome with rich clarity',
    settings: { brightness: 0, contrast: 20, exposure: 2, saturation: -60, vibrance: -20, temperature: 25, tint: 15, sepia: 75, blur: 0, sharpen: 25, vignette: 20, hueRotate: 0, highlights: -10, shadows: 15, gamma: 1.0, ...defaultAdvanced }
  },
  { id: 'lr-warm-vintage', name: 'LR Warm Vintage', category: 'Lightroom Master', description: 'Rich warm analog fade with crushed blacks', settings: { brightness: 4, contrast: 10, exposure: 4, saturation: -10, vibrance: 15, temperature: 18, tint: 5, sepia: 15, blur: 0, sharpen: 20, vignette: 18, hueRotate: 0, highlights: -15, shadows: 25, gamma: 1.08, ...defaultAdvanced, grain: 30 } },
  { id: 'lr-cool-mist', name: 'LR Cool Mist', category: 'Lightroom Master', description: 'Icy blue shadows and bright crisp highlights', settings: { brightness: 5, contrast: 22, exposure: 5, saturation: -15, vibrance: 10, temperature: -20, tint: -5, sepia: 0, blur: 0, sharpen: 25, vignette: 15, hueRotate: 0, highlights: -10, shadows: 15, gamma: 0.98, ...defaultAdvanced, dehaze: 15 } },
  { id: 'lr-urban-punch', name: 'LR Urban Punch', category: 'Lightroom Master', description: 'High contrast street style with desaturated warm tones', settings: { brightness: -2, contrast: 30, exposure: 0, saturation: -20, vibrance: 25, temperature: 10, tint: 0, sepia: 5, blur: 0, sharpen: 35, vignette: 25, hueRotate: 0, highlights: -25, shadows: 20, gamma: 0.95, ...defaultAdvanced, clarity: 35 } },
  { id: 'lr-forest-gloom', name: 'LR Forest Gloom', category: 'Lightroom Master', description: 'Dark moody greens and lifted blacks for nature photography', settings: { brightness: -10, contrast: 25, exposure: -5, saturation: -35, vibrance: 15, temperature: -5, tint: -10, sepia: 0, blur: 0, sharpen: 30, vignette: 30, hueRotate: 20, highlights: -15, shadows: -10, gamma: 0.92, ...defaultAdvanced, dehaze: 25 } },
  { id: 'lr-desert-dune', name: 'LR Desert Dune', category: 'Lightroom Master', description: 'Warm earthy tan and orange tones with smooth skies', settings: { brightness: 6, contrast: 18, exposure: 5, saturation: 15, vibrance: 28, temperature: 25, tint: 8, sepia: 10, blur: 0, sharpen: 22, vignette: 12, hueRotate: -10, highlights: -18, shadows: 15, gamma: 1.03, ...defaultAdvanced, skyBoost: 40 } },
  { id: 'lr-arctic-breeze', name: 'LR Arctic Breeze', category: 'Lightroom Master', description: 'Crisp bright whites and icy blue undertones', settings: { brightness: 15, contrast: 12, exposure: 10, saturation: -25, vibrance: 10, temperature: -25, tint: -5, sepia: 0, blur: 0, sharpen: 25, vignette: 5, hueRotate: 0, highlights: -10, shadows: 30, gamma: 1.05, ...defaultAdvanced } },
  { id: 'lr-cyber-neon', name: 'LR Cyber Neon', category: 'Lightroom Master', description: 'Intense magenta and electric cyan highlights', settings: { brightness: 0, contrast: 32, exposure: 2, saturation: 45, vibrance: 50, temperature: -15, tint: 35, sepia: 0, blur: 0, sharpen: 35, vignette: 22, hueRotate: 40, highlights: 15, shadows: -20, gamma: 0.96, ...defaultAdvanced, chromaticAberration: 6 } },
  { id: 'lr-sunset-glow', name: 'LR Sunset Glow', category: 'Lightroom Master', description: 'Vivid orange and pink sky enhancement', settings: { brightness: 8, contrast: 15, exposure: 6, saturation: 35, vibrance: 40, temperature: 35, tint: 15, sepia: 5, blur: 0, sharpen: 20, vignette: 10, hueRotate: -5, highlights: -15, shadows: 15, gamma: 1.05, ...defaultAdvanced, skyBoost: 50 } },

  // --- SOCIAL MEDIA & INFLUENCER (15 Presets) ---
  {
    id: 'insta-baddie',
    name: 'Insta Baddie',
    category: 'Social Media',
    description: 'Flawless tan glow, high vibrance, crisp contrast, and skin retouch',
    settings: { brightness: 6, contrast: 18, exposure: 5, saturation: 15, vibrance: 30, temperature: 10, tint: 5, sepia: 5, blur: 0, sharpen: 25, vignette: 12, hueRotate: 0, highlights: -12, shadows: 14, gamma: 1.02, ...defaultAdvanced, skinSmooth: 50 }
  },
  {
    id: 'minimalist-white',
    name: 'Minimalist White',
    category: 'Social Media',
    description: 'Bright, clean desaturated aesthetic for modern feeds with clarity',
    settings: { brightness: 12, contrast: 8, exposure: 10, saturation: -25, vibrance: 5, temperature: -5, tint: 0, sepia: 0, blur: 0, sharpen: 18, vignette: 2, hueRotate: 0, highlights: -15, shadows: 20, gamma: 1.1, ...defaultAdvanced, clarity: 15 }
  },
  {
    id: 'clean-aesthetic',
    name: 'Clean Aesthetic',
    category: 'Social Media',
    description: 'Perfect everyday natural enhancement with pure whites and sky boost',
    settings: { brightness: 8, contrast: 12, exposure: 6, saturation: 8, vibrance: 18, temperature: 0, tint: 2, sepia: 0, blur: 0, sharpen: 20, vignette: 6, hueRotate: 0, highlights: -10, shadows: 12, gamma: 1.04, ...defaultAdvanced, skyBoost: 25 }
  },
  {
    id: 'dark-academia',
    name: 'Dark Academia',
    category: 'Social Media',
    description: 'Moody, intellectual warm brown and olive tones with film grain',
    settings: { brightness: -8, contrast: 15, exposure: -5, saturation: -15, vibrance: -5, temperature: 20, tint: 8, sepia: 25, blur: 0, sharpen: 15, vignette: 25, hueRotate: 10, highlights: -15, shadows: -5, gamma: 0.94, ...defaultAdvanced, grain: 20 }
  },
  {
    id: 'cottagecore',
    name: 'Cottagecore Warm',
    category: 'Social Media',
    description: 'Soft, dreamy rural warmth with gentle highlights and smooth details',
    settings: { brightness: 5, contrast: 5, exposure: 4, saturation: 12, vibrance: 15, temperature: 22, tint: 12, sepia: 15, blur: 0, sharpen: 12, vignette: 10, hueRotate: -5, highlights: -18, shadows: 18, gamma: 1.06, ...defaultAdvanced, skinSmooth: 20 }
  },
  {
    id: 'moody-travel',
    name: 'Moody Travel',
    category: 'Social Media',
    description: 'Desaturated greens, boosted orange for epic landscapes and dehaze',
    settings: { brightness: -4, contrast: 22, exposure: -2, saturation: -10, vibrance: 25, temperature: 8, tint: -5, sepia: 5, blur: 0, sharpen: 28, vignette: 20, hueRotate: -10, highlights: -20, shadows: 10, gamma: 0.96, ...defaultAdvanced, dehaze: 30, skyBoost: 35 }
  },
  {
    id: 'foodie-pop',
    name: 'Foodie Pop',
    category: 'Social Media',
    description: 'Makes dishes look mouthwatering with vibrant warm highlights and clarity',
    settings: { brightness: 8, contrast: 16, exposure: 6, saturation: 28, vibrance: 35, temperature: 10, tint: 4, sepia: 0, blur: 0, sharpen: 30, vignette: 8, hueRotate: 0, highlights: -10, shadows: 15, gamma: 1.05, ...defaultAdvanced, clarity: 20 }
  },
  {
    id: 'bali-sun',
    name: 'Bali Sun',
    category: 'Social Media',
    description: 'Tropical vibrant turquoise waters, golden warm skin, and sky boost',
    settings: { brightness: 6, contrast: 18, exposure: 5, saturation: 32, vibrance: 28, temperature: 15, tint: -2, sepia: 5, blur: 0, sharpen: 22, vignette: 12, hueRotate: -8, highlights: -15, shadows: 15, gamma: 1.03, ...defaultAdvanced, skyBoost: 45 }
  },
  { id: 'tokyo-night', name: 'Tokyo Night', category: 'Social Media', description: 'Cyberpunk lite with boosted blues and pinks for night streets', settings: { brightness: 2, contrast: 20, exposure: 4, saturation: 22, vibrance: 30, temperature: -12, tint: 15, sepia: 0, blur: 0, sharpen: 25, vignette: 18, hueRotate: 20, highlights: -5, shadows: 12, gamma: 1.0, ...defaultAdvanced } },
  { id: 'paris-glamour', name: 'Paris Glamour', category: 'Social Media', description: 'Romantic soft pink undertone with luminous highlights', settings: { brightness: 10, contrast: 10, exposure: 8, saturation: 5, vibrance: 15, temperature: 5, tint: 18, sepia: 8, blur: 0, sharpen: 15, vignette: 10, hueRotate: 0, highlights: -12, shadows: 16, gamma: 1.08, ...defaultAdvanced } },
  { id: 'vlog-daily', name: 'Vlog Daily', category: 'Social Media', description: 'Bright, punchy, and ultra clean look for daily lifestyle creators', settings: { brightness: 10, contrast: 14, exposure: 6, saturation: 12, vibrance: 22, temperature: 2, tint: 0, sepia: 0, blur: 0, sharpen: 25, vignette: 5, hueRotate: 0, highlights: -15, shadows: 15, gamma: 1.04, ...defaultAdvanced, clarity: 15 } },
  { id: 'aesthetic-peach', name: 'Aesthetic Peach', category: 'Social Media', description: 'Soft peachy warm undertones with lifted creamy shadows', settings: { brightness: 8, contrast: 8, exposure: 6, saturation: 5, vibrance: 15, temperature: 15, tint: 12, sepia: 10, blur: 0, sharpen: 18, vignette: 8, hueRotate: 0, highlights: -10, shadows: 22, gamma: 1.06, ...defaultAdvanced } },
  { id: 'rich-lifestyle', name: 'Rich Lifestyle', category: 'Social Media', description: 'Deep contrast and rich warm saturation for luxury feeds', settings: { brightness: 4, contrast: 22, exposure: 4, saturation: 20, vibrance: 28, temperature: 10, tint: 2, sepia: 0, blur: 0, sharpen: 30, vignette: 12, hueRotate: 0, highlights: -18, shadows: 18, gamma: 1.02, ...defaultAdvanced, clarity: 20 } },
  { id: 'cyber-street', name: 'Cyber Street', category: 'Social Media', description: 'Edgy cool blue and violet street style', settings: { brightness: -4, contrast: 26, exposure: -2, saturation: 15, vibrance: 25, temperature: -15, tint: 10, sepia: 0, blur: 0, sharpen: 32, vignette: 22, hueRotate: 15, highlights: -10, shadows: 10, gamma: 0.96, ...defaultAdvanced } },
  { id: 'creamy-neutral', name: 'Creamy Neutral', category: 'Social Media', description: 'Perfect neutral beige aesthetic with soft highlights', settings: { brightness: 10, contrast: 10, exposure: 8, saturation: -15, vibrance: 10, temperature: 8, tint: 0, sepia: 5, blur: 0, sharpen: 20, vignette: 6, hueRotate: 0, highlights: -12, shadows: 25, gamma: 1.05, ...defaultAdvanced } },

  // --- ARTISTIC FX & ULTRA (15 Presets) ---
  {
    id: 'duotone-purple',
    name: 'Duotone Purple/Cyan',
    category: 'Artistic FX',
    description: 'Striking modern duotone art effect',
    settings: { brightness: 0, contrast: 30, exposure: 0, saturation: 50, vibrance: 50, temperature: -30, tint: 40, sepia: 0, blur: 0, sharpen: 25, vignette: 20, hueRotate: 45, highlights: 15, shadows: -15, gamma: 1.0, ...defaultAdvanced, shadowTint: 260, highlightTint: 180 }
  },
  {
    id: 'infrared-red',
    name: 'Infrared Crimson',
    category: 'Artistic FX',
    description: 'Surreal false-color infrared photography simulation',
    settings: { brightness: -5, contrast: 35, exposure: -2, saturation: 40, vibrance: 30, temperature: 50, tint: 50, sepia: 0, blur: 0, sharpen: 30, vignette: 25, hueRotate: 140, highlights: 20, shadows: -25, gamma: 0.92, ...defaultAdvanced, hslRedSat: 50 }
  },
  {
    id: 'solarize-blast',
    name: 'Solarize Blast',
    category: 'Artistic FX',
    description: 'Extreme artistic color inversion and high contrast pop',
    settings: { brightness: 10, contrast: 40, exposure: 5, saturation: 60, vibrance: 40, temperature: -25, tint: -30, sepia: 0, blur: 0, sharpen: 35, vignette: 30, hueRotate: 210, highlights: 30, shadows: -30, gamma: 0.85, ...defaultAdvanced }
  },
  {
    id: 'retro-pop-art',
    name: 'Retro Pop Art 80s',
    category: 'Artistic FX',
    description: 'Andy Warhol inspired hyper-vibrant color blast',
    settings: { brightness: 5, contrast: 30, exposure: 5, saturation: 80, vibrance: 80, temperature: 20, tint: -20, sepia: 0, blur: 0, sharpen: 25, vignette: 15, hueRotate: 90, highlights: 20, shadows: 10, gamma: 1.05, ...defaultAdvanced }
  },
  {
    id: 'thermal-vision',
    name: 'Thermal Vision',
    category: 'Artistic FX',
    description: 'Simulated heat map camera effect with wild spectrum shifts',
    settings: { brightness: -10, contrast: 45, exposure: -5, saturation: 100, vibrance: 90, temperature: -50, tint: 50, sepia: 0, blur: 0, sharpen: 40, vignette: 35, hueRotate: 280, highlights: 40, shadows: -40, gamma: 0.80, ...defaultAdvanced }
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow Dream',
    category: 'Artistic FX',
    description: 'Luminous glowing edges with intense electric color punch',
    settings: { brightness: 5, contrast: 25, exposure: 5, saturation: 45, vibrance: 50, temperature: -15, tint: 30, sepia: 0, blur: 1, sharpen: 50, vignette: 25, hueRotate: 35, highlights: 25, shadows: -10, gamma: 1.0, ...defaultAdvanced }
  },
  {
    id: 'gothic-mist',
    name: 'Gothic Mist',
    category: 'Artistic FX',
    description: 'Eerie, dark, desaturated fantasy atmosphere',
    settings: { brightness: -15, contrast: 25, exposure: -10, saturation: -60, vibrance: -20, temperature: -10, tint: 15, sepia: 10, blur: 1, sharpen: 15, vignette: 40, hueRotate: 0, highlights: -15, shadows: -20, gamma: 0.88, ...defaultAdvanced }
  },
  {
    id: 'cyber-glitch',
    name: 'Cyber Glitch Acid',
    category: 'Artistic FX',
    description: 'Acidic neon green and violet extreme futuristic grading',
    settings: { brightness: 0, contrast: 38, exposure: 2, saturation: 65, vibrance: 70, temperature: -40, tint: -45, sepia: 0, blur: 0, sharpen: 45, vignette: 28, hueRotate: 165, highlights: 25, shadows: -20, gamma: 0.90, ...defaultAdvanced }
  },
  { id: 'fx-matrix-rain', name: 'FX Matrix Rain', category: 'Artistic FX', description: 'Deep digital green monochrome with high contrast', settings: { brightness: -5, contrast: 35, exposure: -5, saturation: 20, vibrance: 20, temperature: -30, tint: -45, sepia: 0, blur: 0, sharpen: 40, vignette: 30, hueRotate: 80, highlights: 10, shadows: -25, gamma: 0.92, ...defaultAdvanced, chromaticAberration: 5 } },
  { id: 'fx-golden-dream', name: 'FX Golden Dream', category: 'Artistic FX', description: 'Surreal heavy golden blur and glow', settings: { brightness: 10, contrast: 15, exposure: 8, saturation: 40, vibrance: 30, temperature: 45, tint: 20, sepia: 25, blur: 2, sharpen: 10, vignette: 15, hueRotate: 0, highlights: 15, shadows: 15, gamma: 1.1, ...defaultAdvanced } },
  { id: 'fx-cyber-punk-2', name: 'FX Cyber Glitch 2', category: 'Artistic FX', description: 'Intense cyan and hot pink chromatic split', settings: { brightness: 0, contrast: 40, exposure: 0, saturation: 75, vibrance: 80, temperature: -25, tint: 40, sepia: 0, blur: 0, sharpen: 50, vignette: 25, hueRotate: 50, highlights: 25, shadows: -20, gamma: 0.95, ...defaultAdvanced, chromaticAberration: 12 } },
  { id: 'fx-blood-moon', name: 'FX Blood Moon', category: 'Artistic FX', description: 'Deep crimson red monochrome with crushed blacks', settings: { brightness: -10, contrast: 45, exposure: -8, saturation: 80, vibrance: 70, temperature: 50, tint: 50, sepia: 0, blur: 0, sharpen: 35, vignette: 35, hueRotate: 340, highlights: 20, shadows: -30, gamma: 0.90, ...defaultAdvanced } },
  { id: 'fx-alien-world', name: 'FX Alien World', category: 'Artistic FX', description: 'Surreal purple foliage and turquoise skies simulation', settings: { brightness: 0, contrast: 30, exposure: 2, saturation: 60, vibrance: 65, temperature: -20, tint: 45, sepia: 0, blur: 0, sharpen: 30, vignette: 20, hueRotate: 240, highlights: 15, shadows: -15, gamma: 1.0, ...defaultAdvanced } },
  { id: 'fx-vintage-vhs-2', name: 'FX Analog Tape', category: 'Artistic FX', description: 'Distorted 90s tape look with heavy grain and blur', settings: { brightness: 5, contrast: 12, exposure: 4, saturation: 25, vibrance: 15, temperature: 15, tint: 25, sepia: 15, blur: 3, sharpen: 40, vignette: 25, hueRotate: 15, highlights: 10, shadows: 10, gamma: 1.02, ...defaultAdvanced, grain: 50, chromaticAberration: 10 } },
  { id: 'fx-psychedelic', name: 'FX Psychedelic', category: 'Artistic FX', description: 'Wild hyper-saturated trippy color shifts', settings: { brightness: 5, contrast: 35, exposure: 5, saturation: 100, vibrance: 100, temperature: 30, tint: -30, sepia: 0, blur: 0, sharpen: 40, vignette: 20, hueRotate: 180, highlights: 30, shadows: -20, gamma: 1.05, ...defaultAdvanced, chromaticAberration: 8 } },

  // --- STREET & LANDSCAPE HDR (20 Presets) ---
  { id: 'street-gritty', name: 'Street Gritty', category: 'Street Photography', description: 'High clarity, desaturated urban street tone', settings: { brightness: -4, contrast: 28, exposure: -2, saturation: -30, vibrance: 15, temperature: -5, tint: 5, sepia: 0, blur: 0, sharpen: 38, vignette: 22, hueRotate: 0, highlights: -20, shadows: 15, gamma: 0.96, ...defaultAdvanced, clarity: 40 } },
  { id: 'street-neon-rain', name: 'Street Neon Rain', category: 'Street Photography', description: 'Boosted night reflections and rich neon contrast', settings: { brightness: 2, contrast: 32, exposure: 4, saturation: 25, vibrance: 35, temperature: -12, tint: 15, sepia: 0, blur: 0, sharpen: 35, vignette: 25, hueRotate: 10, highlights: -10, shadows: 18, gamma: 1.02, ...defaultAdvanced, clarity: 30 } },
  { id: 'street-mono-pro', name: 'Street Mono Pro', category: 'Street Photography', description: 'Striking high contrast black and white for street portraits', settings: { brightness: 0, contrast: 40, exposure: 0, saturation: -100, vibrance: -100, temperature: 0, tint: 0, sepia: 0, blur: 0, sharpen: 40, vignette: 28, hueRotate: 0, highlights: -15, shadows: -25, gamma: 0.94, ...defaultAdvanced, clarity: 35 } },
  { id: 'street-film-look', name: 'Street Film Look', category: 'Street Photography', description: 'Analog street style with lifted shadows and grain', settings: { brightness: 6, contrast: 12, exposure: 4, saturation: -15, vibrance: 10, temperature: 12, tint: 4, sepia: 10, blur: 0, sharpen: 25, vignette: 18, hueRotate: 0, highlights: -12, shadows: 25, gamma: 1.06, ...defaultAdvanced, grain: 35 } },
  { id: 'street-tokyo-blue', name: 'Street Tokyo Blue', category: 'Street Photography', description: 'Cool blue shadows and crisp clean street highlights', settings: { brightness: -2, contrast: 25, exposure: 0, saturation: 10, vibrance: 20, temperature: -18, tint: -8, sepia: 0, blur: 0, sharpen: 32, vignette: 20, hueRotate: -5, highlights: -15, shadows: 12, gamma: 0.98, ...defaultAdvanced, clarity: 25 } },
  { id: 'street-warm-alley', name: 'Street Warm Alley', category: 'Street Photography', description: 'Golden warm alleyway aesthetic with rich shadows', settings: { brightness: 4, contrast: 20, exposure: 4, saturation: 18, vibrance: 22, temperature: 22, tint: 8, sepia: 5, blur: 0, sharpen: 30, vignette: 22, hueRotate: 0, highlights: -18, shadows: 15, gamma: 1.03, ...defaultAdvanced, clarity: 20 } },
  { id: 'street-minimal', name: 'Street Minimal', category: 'Street Photography', description: 'Clean, desaturated minimalist architecture tone', settings: { brightness: 10, contrast: 15, exposure: 8, saturation: -40, vibrance: 5, temperature: -5, tint: 0, sepia: 0, blur: 0, sharpen: 30, vignette: 12, hueRotate: 0, highlights: -20, shadows: 20, gamma: 1.05, ...defaultAdvanced, clarity: 30 } },
  { id: 'street-cyber-night', name: 'Street Cyber Night', category: 'Street Photography', description: 'Deep cyberpunk street vibe with magenta/cyan punch', settings: { brightness: -5, contrast: 35, exposure: -2, saturation: 30, vibrance: 40, temperature: -15, tint: 25, sepia: 0, blur: 0, sharpen: 38, vignette: 28, hueRotate: 35, highlights: 10, shadows: -15, gamma: 0.95, ...defaultAdvanced, clarity: 35 } },
  { id: 'street-sunset-sil', name: 'Street Sunset Silhouette', category: 'Street Photography', description: 'Crushed blacks and vibrant golden skies for silhouettes', settings: { brightness: -12, contrast: 40, exposure: -8, saturation: 40, vibrance: 45, temperature: 35, tint: 15, sepia: 10, blur: 0, sharpen: 25, vignette: 30, hueRotate: 0, highlights: 15, shadows: -40, gamma: 0.90, ...defaultAdvanced, skyBoost: 50 } },
  { id: 'street-faded-retro', name: 'Street Faded Retro', category: 'Street Photography', description: 'Hipster faded street look with milky shadows', settings: { brightness: 8, contrast: -5, exposure: 6, saturation: -20, vibrance: 12, temperature: 15, tint: 5, sepia: 15, blur: 0, sharpen: 20, vignette: 15, hueRotate: 0, highlights: -15, shadows: 35, gamma: 1.1, ...defaultAdvanced, grain: 25 } },
  { id: 'hdr-epic-landscape', name: 'HDR Epic Landscape', category: 'Landscape HDR', description: 'Maximized dynamic range, extreme clarity, and sky boost', settings: { brightness: 5, contrast: 28, exposure: 5, saturation: 22, vibrance: 35, temperature: 2, tint: 2, sepia: 0, blur: 0, sharpen: 45, vignette: 15, hueRotate: 0, highlights: -35, shadows: 40, gamma: 1.04, ...defaultAdvanced, clarity: 50, dehaze: 25, skyBoost: 60 } },
  { id: 'hdr-mountain-mist', name: 'HDR Mountain Mist', category: 'Landscape HDR', description: 'Cuts through atmospheric haze with intense structure', settings: { brightness: 2, contrast: 30, exposure: 2, saturation: 15, vibrance: 25, temperature: -8, tint: -5, sepia: 0, blur: 0, sharpen: 40, vignette: 18, hueRotate: 0, highlights: -25, shadows: 30, gamma: 0.98, ...defaultAdvanced, clarity: 45, dehaze: 40 } },
  { id: 'hdr-golden-valley', name: 'HDR Golden Valley', category: 'Landscape HDR', description: 'Vibrant golden hour landscape with rich lifted shadows', settings: { brightness: 8, contrast: 22, exposure: 6, saturation: 30, vibrance: 40, temperature: 28, tint: 10, sepia: 8, blur: 0, sharpen: 38, vignette: 12, hueRotate: 0, highlights: -30, shadows: 35, gamma: 1.05, ...defaultAdvanced, clarity: 35, skyBoost: 50 } },
  { id: 'hdr-forest-canopy', name: 'HDR Forest Canopy', category: 'Landscape HDR', description: 'Deep rich greens and extreme foliage micro-contrast', settings: { brightness: -4, contrast: 32, exposure: -2, saturation: 18, vibrance: 28, temperature: -5, tint: -12, sepia: 0, blur: 0, sharpen: 42, vignette: 22, hueRotate: 15, highlights: -25, shadows: 28, gamma: 0.96, ...defaultAdvanced, clarity: 48, dehaze: 20 } },
  { id: 'hdr-desert-mesa', name: 'HDR Desert Mesa', category: 'Landscape HDR', description: 'Intense warm earthy tones with crystal clear sky contrast', settings: { brightness: 6, contrast: 26, exposure: 5, saturation: 25, vibrance: 32, temperature: 25, tint: 8, sepia: 5, blur: 0, sharpen: 40, vignette: 15, hueRotate: -8, highlights: -28, shadows: 32, gamma: 1.03, ...defaultAdvanced, clarity: 42, skyBoost: 55 } },
  { id: 'hdr-coastal-cliff', name: 'HDR Coastal Cliff', category: 'Landscape HDR', description: 'Vibrant turquoise seas and sharp dramatic rock textures', settings: { brightness: 4, contrast: 28, exposure: 4, saturation: 28, vibrance: 36, temperature: -5, tint: -2, sepia: 0, blur: 0, sharpen: 42, vignette: 16, hueRotate: -5, highlights: -30, shadows: 35, gamma: 1.02, ...defaultAdvanced, clarity: 45, dehaze: 30, skyBoost: 50 } },
  { id: 'hdr-autumn-ridge', name: 'HDR Autumn Ridge', category: 'Landscape HDR', description: 'Boosted red and orange foliage with deep crisp shadows', settings: { brightness: 5, contrast: 25, exposure: 4, saturation: 32, vibrance: 40, temperature: 22, tint: 15, sepia: 10, blur: 0, sharpen: 38, vignette: 14, hueRotate: 0, highlights: -25, shadows: 30, gamma: 1.04, ...defaultAdvanced, clarity: 40, skyBoost: 45 } },
  { id: 'hdr-winter-peak', name: 'HDR Winter Peak', category: 'Landscape HDR', description: 'Ultra crisp white snow and deep icy blue mountain shadows', settings: { brightness: 12, contrast: 24, exposure: 8, saturation: -15, vibrance: 18, temperature: -22, tint: -5, sepia: 0, blur: 0, sharpen: 45, vignette: 12, hueRotate: 0, highlights: -20, shadows: 25, gamma: 1.06, ...defaultAdvanced, clarity: 38, dehaze: 20 } },
  { id: 'hdr-dramatic-sky', name: 'HDR Dramatic Sky', category: 'Landscape HDR', description: 'Extreme sky structure and storm cloud enhancement', settings: { brightness: 0, contrast: 35, exposure: 2, saturation: 15, vibrance: 25, temperature: -2, tint: 4, sepia: 0, blur: 0, sharpen: 45, vignette: 20, hueRotate: 0, highlights: -40, shadows: 30, gamma: 0.98, ...defaultAdvanced, clarity: 55, dehaze: 35, skyBoost: 70 } },
  { id: 'hdr-sunrise-lake', name: 'HDR Sunrise Lake', category: 'Landscape HDR', description: 'Luminous pastel pink/orange morning mist and water reflections', settings: { brightness: 8, contrast: 20, exposure: 6, saturation: 28, vibrance: 38, temperature: 25, tint: 18, sepia: 5, blur: 0, sharpen: 35, vignette: 12, hueRotate: 0, highlights: -25, shadows: 28, gamma: 1.05, ...defaultAdvanced, clarity: 30, skyBoost: 45 } }
];
