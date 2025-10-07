export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    accent: string;
    accentLight: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    white: string;
    lightGray: string;
    mediumGray: string;
    darkGray: string;
    black: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textLight: string;
    bgPrimary: string;
    bgSecondary: string;
    bgDark: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  fontFamily: {
    primary: string;
    mono: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  zIndex: {
    dropdown: number;
    sticky: number;
    fixed: number;
    modal: number;
    popover: number;
    tooltip: number;
  };
  gradients: {
    accent: string;
    bg: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#2c3e50',
    primaryLight: '#34495e',
    primaryDark: '#1a252f',
    secondary: '#3498db',
    secondaryLight: '#5dade2',
    secondaryDark: '#2874a6',
    accent: '#667eea',
    accentLight: '#764ba2',
    success: '#27ae60',
    warning: '#f39c12',
    error: '#e74c3c',
    info: '#3498db',
    white: '#ffffff',
    lightGray: '#f8f9fa',
    mediumGray: '#6c757d',
    darkGray: '#343a40',
    black: '#000000',
    textPrimary: '#2c3e50',
    textSecondary: '#6c757d',
    textMuted: '#95a5a6',
    textLight: '#ffffff',
    bgPrimary: '#ffffff',
    bgSecondary: '#f8f9fa',
    bgDark: '#2c3e50',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },
  fontFamily: {
    primary: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    mono: "'Courier New', Courier, monospace",
  },
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
  gradients: {
    accent: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
};

export default theme;