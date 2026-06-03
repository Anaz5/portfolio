/**
 * Centralized Color Palette for Portfolio
 * Cyber Goth Theme 🖤💜
 */

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',

  // Cyber goth neon purple palette
  // 'pink' key kept for compatibility with all existing components
  pink: {
    25: '#0D0010',
    50: '#110016',
    100: '#1A0025',
    200: '#4B0082',
    300: '#7B00CC',
    400: '#9B30FF',
    500: '#CC66FF',
    600: '#B44FFF',
    700: '#A020F0',
    800: '#BF5FFF',
    900: '#E0AAFF',
  },

  dark: {
    50: '#1A1A2E',
    100: '#16213E',
    200: '#0F3460',
    300: '#1A0030',
    400: '#0D0020',
    500: '#08001A',
    600: '#050010',
    700: '#03000A',
    800: '#020008',
    900: '#010005',
    950: '#000000',
  },

  background: {
    light: {
      primary: '#0A0010',
      secondary: '#0D0018',
      gradient: 'linear-gradient(180deg, #0A0010 0%, #0D0018 50%, #110020 100%)',
      gradientEnd: '#0A0010',
      overlay: 'rgba(0, 0, 0, 0.7)',
      sections: {
        about: 'linear-gradient(180deg, #0A0010 0%, #0D0015 30%, #0A0010 100%)',
        skills: 'linear-gradient(180deg, #0A0010 0%, #0D0018 30%, #0D0018 70%, #0A0010 100%)',
        projects: 'linear-gradient(180deg, #0A0010 0%, #0D0015 15%, #0D0015 85%, #0A0010 100%)',
        experience: 'linear-gradient(180deg, #0A0010 0%, #0D0018 25%, #0D0018 75%, #0A0010 100%)',
        certifications: 'linear-gradient(180deg, #0A0010 0%, #0D0015 60%, #0A0010 100%)',
      },
    },
    dark: {
      primary: '#0A0010',
      secondary: '#0D0018',
      gradient: '#050008',
      gradientEnd: '#050008',
      overlay: 'rgba(0, 0, 0, 0.85)',
      sections: {
        about: '#0A0010',
        skills: '#0A0010',
        projects: '#0A0010',
        experience: '#0A0010',
        certifications: '#0A0010',
      },
    },
  },

  text: {
    light: {
      primary: '#E0AAFF',
      secondary: '#BF5FFF',
      tertiary: '#9B30FF',
      accent: '#CC66FF',
      pink: '#FF00FF',
    },
    dark: {
      primary: '#F0D0FF',
      secondary: '#CC66FF',
      tertiary: '#A020F0',
      accent: '#BF5FFF',
      pink: '#FF00FF',
    },
  },

  interactive: {
    light: {
      primary: 'rgba(155, 48, 255, 0.1)',
      hover: 'rgba(155, 48, 255, 0.25)',
      active: '#9B30FF',
      focus: 'rgba(155, 48, 255, 0.4)',
    },
    dark: {
      primary: 'rgba(155, 48, 255, 0.1)',
      hover: 'rgba(155, 48, 255, 0.25)',
      active: '#9B30FF',
      focus: 'rgba(155, 48, 255, 0.4)',
    },
  },

  navigation: {
    light: {
      background: 'rgba(10, 0, 16, 0.6)',
      backgroundScrolled: 'rgba(10, 0, 16, 0.85)',
      border: 'rgba(155, 48, 255, 0.2)',
      borderScrolled: 'rgba(155, 48, 255, 0.35)',
      shadow: 'rgba(155, 48, 255, 0.1)',
      shadowScrolled: 'rgba(155, 48, 255, 0.2)',
      mobile: 'rgba(10, 0, 16, 0.97)',
    },
    dark: {
      background: 'rgba(5, 0, 8, 0.6)',
      backgroundScrolled: 'rgba(5, 0, 8, 0.9)',
      border: 'rgba(155, 48, 255, 0.15)',
      borderScrolled: 'rgba(155, 48, 255, 0.3)',
      shadow: 'rgba(155, 48, 255, 0.15)',
      shadowScrolled: 'rgba(155, 48, 255, 0.25)',
      mobile: 'rgba(5, 0, 8, 0.98)',
    },
  },

  button: {
    primary: {
      light: {
        background: '#7B00CC',
        text: '#F0D0FF',
        hover: '#9B30FF',
        shadow: 'rgba(155, 48, 255, 0.5)',
      },
      dark: {
        background: '#9B30FF',
        text: '#000000',
        hover: '#CC66FF',
        shadow: 'rgba(155, 48, 255, 0.6)',
      },
    },
    secondary: {
      light: {
        background: 'rgba(10, 0, 16, 0.8)',
        text: '#E0AAFF',
        border: '#7B00CC',
        hover: 'rgba(123, 0, 204, 0.2)',
      },
      dark: {
        background: 'rgba(13, 0, 24, 0.9)',
        text: '#E0AAFF',
        border: '#4B0082',
        hover: 'rgba(155, 48, 255, 0.15)',
      },
    },
    outline: {
      light: {
        background: 'transparent',
        text: '#CC66FF',
        border: '#9B30FF',
        hover: 'rgba(155, 48, 255, 0.15)',
      },
      dark: {
        background: 'rgba(13, 0, 24, 0.5)',
        text: '#CC66FF',
        border: '#7B00CC',
        hover: 'rgba(155, 48, 255, 0.2)',
      },
    },
  },

  card: {
    light: {
      background: '#0D0018',
      border: 'rgba(155, 48, 255, 0.25)',
      shadow: 'rgba(155, 48, 255, 0.15)',
    },
    dark: {
      background: '#0A0015',
      border: 'rgba(155, 48, 255, 0.2)',
      shadow: 'rgba(155, 48, 255, 0.2)',
    },
  },

  effects: {
    glow: 'rgba(155, 48, 255, 0.4)',
    dropShadow: 'rgba(155, 48, 255, 0.35)',
    textShadow: 'rgba(155, 48, 255, 0.6)',
    blur: 'rgba(155, 48, 255, 0.1)',
  },

  utility: {
    success: '#00FF9F',
    warning: '#FFD700',
    error: '#FF003C',
    info: '#00FFFF',
    neutral: '#6B4C8A',
  },

  special: {
    dragMe: '#FF00FF',
    aurora: {
      dark: '#9B30FF',
      light: {
        1: '#2D0040',
        2: '#4B0082',
        3: '#7B00CC',
      }
    }
  },
} as const;

type ColorTheme = 'light' | 'dark';
type ColorVariant = keyof typeof colors;

export type { ColorTheme, ColorVariant };

export const getThemeColors = (theme: ColorTheme) => ({
  background: colors.background[theme],
  text: colors.text[theme],
  interactive: colors.interactive[theme],
  navigation: colors.navigation[theme],
  button: {
    primary: colors.button.primary[theme],
    secondary: colors.button.secondary[theme],
    outline: colors.button.outline[theme],
  },
  card: colors.card[theme],
});
