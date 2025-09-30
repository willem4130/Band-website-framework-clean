/**
 * Band Website Framework Configuration
 *
 * This configuration system provides 16 strategic parameters for visual brand differentiation.
 * Optimized for developer workflow and Queen Claude integration.
 *
 * Parameter Groups:
 * - Core Developer Controls (8 parameters): 80% of visual impact
 * - Genre Flexibility (8 parameters): Fine-tuning for different music genres
 */

// ================================
// CORE DEVELOPER CONTROLS (Top 20%)
// ================================

export interface CoreDeveloperControls {
  /** 1. Primary Color Palette - Main brand colors used throughout the site */
  primaryColorPalette: {
    primary: string      // Main brand color (e.g., amber-900)
    secondary: string    // Secondary accent color (e.g., teal-800)
    accent: string       // Highlight color (e.g., purple-600)
    background: string   // Base background color (e.g., black)
    surface: string      // Card/surface color (e.g., gray-900)
  }

  /** 2. Typography Pair - Header and body font combination */
  typographyPair: {
    headingFont: string  // Font for headings (e.g., 'Inter', 'Playfair Display')
    bodyFont: string     // Font for body text (e.g., 'Inter', 'Source Sans Pro')
    fontScale: 'compact' | 'balanced' | 'spacious' // Overall size scaling
  }

  /** 3. Hero Background - Main hero section styling */
  heroBackground: {
    type: 'image' | 'video' | 'gradient' | 'hybrid'
    source: string       // Path to image/video or gradient definition
    overlayIntensity: number // 0-1, how dark the overlay is
  }

  /** 4. Section Background Style - How each main section is styled */
  sectionBackgroundStrategy: {
    about: 'video' | 'gradient' | 'image' | 'solid'
    shows: 'video' | 'gradient' | 'image' | 'solid'
    gallery: 'video' | 'gradient' | 'image' | 'solid'
    contact: 'video' | 'gradient' | 'image' | 'solid'
  }

  /** 5. Animation Intensity - Overall motion and effects level */
  animationIntensity: 'minimal' | 'moderate' | 'full'

  /** 6. Color Temperature - Warm/cool bias for entire palette */
  colorTemperature: 'warm' | 'neutral' | 'cool'

  /** 7. Contrast Level - Overall contrast across components */
  contrastLevel: 'subtle' | 'balanced' | 'high'

  /** 8. Border Radius System - Sharp to rounded aesthetic */
  borderRadiusScale: 'sharp' | 'subtle' | 'modern' | 'rounded'
}

// ================================
// GENRE FLEXIBILITY (Next 20%)
// ================================

export interface GenreFlexibilityControls {
  /** 9. Particle Effects Density - Atmospheric elements intensity */
  particleEffectsDensity: number // 0-1, 0 = none, 1 = heavy atmospheric

  /** 10. Glow/Neon Intensity - Cyberpunk-style glow effects */
  glowIntensity: number // 0-1, 0 = none, 1 = cyberpunk level

  /** 11. Texture Overlays - Surface treatment from clean to grungy */
  textureOverlays: 'none' | 'subtle' | 'moderate' | 'grungy'

  /** 12. Motion Speed - Animation speed scaling */
  motionSpeedMultiplier: number // 0.5-2.0, affects all animation speeds

  /** 13. Shadow Intensity - Depth and drama of shadows */
  shadowIntensity: 'flat' | 'subtle' | 'moderate' | 'dramatic'

  /** 14. Background Blur/Focus - Image focus effects */
  backgroundFocusEffect: 'sharp' | 'subtle' | 'moderate' | 'heavy'

  /** 15. Color Saturation Level - Vibrancy of colors */
  colorSaturation: 'muted' | 'balanced' | 'vibrant' | 'neon'

  /** 16. Layout Spacing - Density of layout elements */
  layoutSpacing: 'compact' | 'balanced' | 'spacious'
}

// ================================
// BAND CONTENT CONFIGURATION
// ================================

export interface BandContent {
  bandName: string
  tagline: string
  description: {
    short: string      // For meta descriptions, hero subtitle
    medium: string     // For about sections
    long: string       // For detailed about pages
  }
  contact: {
    email: string
    phone?: string
    address?: string
  }
  social: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
    spotify?: string
    bandcamp?: string
  }
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
}

// ================================
// MEDIA ASSET CONFIGURATION
// ================================

export interface MediaAssets {
  hero: {
    background: string     // Path to hero background image/video
    fallbackImage: string // Fallback if video fails to load
  }
  sections: {
    about: string[]        // Background videos/images for about section
    shows: string[]        // Background videos/images for shows section
    gallery: string[]      // Background videos/images for gallery section
    contact: string[]      // Background videos/images for contact section
  }
  gallery: {
    images: string[]       // Array of gallery image filenames
    thumbnails?: string[]  // Optional thumbnail versions
  }
  logos: {
    main: string          // Main logo file
    icon: string          // Favicon/icon version
    light?: string        // Light version for dark backgrounds
    dark?: string         // Dark version for light backgrounds
  }
}

// ================================
// COMPLETE CONFIGURATION TYPE
// ================================

export interface BandWebsiteConfig {
  core: CoreDeveloperControls
  genre: GenreFlexibilityControls
  content: BandContent
  media: MediaAssets
  version: string       // Config version for compatibility
}

// ================================
// DEFAULT CONFIGURATION
// ================================

export const defaultConfig: BandWebsiteConfig = {
  // Core Developer Controls
  core: {
    primaryColorPalette: {
      primary: 'amber-900',
      secondary: 'teal-800',
      accent: 'purple-600',
      background: 'black',
      surface: 'gray-900'
    },
    typographyPair: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      fontScale: 'balanced'
    },
    heroBackground: {
      type: 'image',
      source: '/hero-bg.jpg',
      overlayIntensity: 0.4
    },
    sectionBackgroundStrategy: {
      about: 'video',
      shows: 'video',
      gallery: 'gradient',
      contact: 'gradient'
    },
    animationIntensity: 'full',
    colorTemperature: 'neutral',
    contrastLevel: 'balanced',
    borderRadiusScale: 'subtle'
  },

  // Genre Flexibility
  genre: {
    particleEffectsDensity: 0.8,
    glowIntensity: 0.3,
    textureOverlays: 'subtle',
    motionSpeedMultiplier: 1.0,
    shadowIntensity: 'moderate',
    backgroundFocusEffect: 'moderate',
    colorSaturation: 'balanced',
    layoutSpacing: 'balanced'
  },

  // Band Content
  content: {
    bandName: '[BAND_NAME]',
    tagline: '[BAND_TAGLINE]',
    description: {
      short: '[SHORT_DESCRIPTION]',
      medium: '[MEDIUM_DESCRIPTION]',
      long: '[LONG_DESCRIPTION]'
    },
    contact: {
      email: 'contact@[BAND_DOMAIN].com'
    },
    social: {
      facebook: 'https://facebook.com/[BAND_HANDLE]',
      instagram: 'https://instagram.com/[BAND_HANDLE]'
    },
    seo: {
      metaTitle: '[BAND_NAME] | Official Website',
      metaDescription: '[SHORT_DESCRIPTION]',
      keywords: ['band', 'music', 'live', 'shows']
    }
  },

  // Media Assets
  media: {
    hero: {
      background: '/hero-bg.jpg',
      fallbackImage: '/hero-fallback.jpg'
    },
    sections: {
      about: ['/videos/about-bg-1.mp4'],
      shows: ['/videos/shows-bg-1.mp4'],
      gallery: [],
      contact: []
    },
    gallery: {
      images: [
        'gallery-1.jpg',
        'gallery-2.jpg',
        'gallery-3.jpg',
        'gallery-4.jpg'
      ]
    },
    logos: {
      main: '/logo.png',
      icon: '/favicon.ico'
    }
  },

  version: '1.0.0'
}

// ================================
// GENRE PRESETS
// ================================

export const genrePresets = {
  'edm-pop': {
    ...defaultConfig.genre,
    particleEffectsDensity: 1.0,
    glowIntensity: 0.8,
    motionSpeedMultiplier: 1.5,
    colorSaturation: 'neon',
    borderRadiusScale: 'rounded'
  } as GenreFlexibilityControls,

  'indie-rock': {
    ...defaultConfig.genre,
    particleEffectsDensity: 0.4,
    glowIntensity: 0.1,
    textureOverlays: 'moderate',
    motionSpeedMultiplier: 0.8,
    colorSaturation: 'muted',
    borderRadiusScale: 'subtle'
  } as GenreFlexibilityControls,

  'metal-rock': {
    ...defaultConfig.genre,
    particleEffectsDensity: 0.6,
    glowIntensity: 0.0,
    textureOverlays: 'grungy',
    shadowIntensity: 'dramatic',
    colorSaturation: 'muted',
    borderRadiusScale: 'sharp',
    contrastLevel: 'high'
  } as GenreFlexibilityControls
}