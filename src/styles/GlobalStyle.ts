import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* CSS Variables for Consistent Theming */
  :root {
    /* Primary Colors */
    --primary-color: #2c3e50;
    --primary-light: #34495e;
    --primary-dark: #1a252f;
    
    /* Secondary Colors */
    --secondary-color: #3498db;
    --secondary-light: #5dade2;
    --secondary-dark: #2874a6;
    
    /* Accent Colors */
    --accent-color: #667eea;
    --accent-light: #764ba2;
    --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    /* Status Colors */
    --success-color: #27ae60;
    --warning-color: #f39c12;
    --error-color: #e74c3c;
    --info-color: #3498db;
    
    /* Neutral Colors */
    --white: #ffffff;
    --light-gray: #f8f9fa;
    --medium-gray: #6c757d;
    --dark-gray: #343a40;
    --black: #000000;
    
    /* Text Colors */
    --text-primary: #2c3e50;
    --text-secondary: #6c757d;
    --text-muted: #95a5a6;
    --text-light: #ffffff;
    
    /* Background Colors */
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --bg-dark: #2c3e50;
    --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-xxl: 3rem;
    
    /* Typography */
    --font-family-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-family-mono: 'Courier New', Courier, monospace;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    --font-size-4xl: 2.5rem;
    
    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);
    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-2xl: 20px;
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Z-Index */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal: 1040;
    --z-popover: 1050;
    --z-tooltip: 1060;
  }

  /* Reset and Base Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family-primary);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
  }

  h1 { font-size: var(--font-size-4xl); }
  h2 { font-size: var(--font-size-3xl); }
  h3 { font-size: var(--font-size-2xl); }
  h4 { font-size: var(--font-size-xl); }
  h5 { font-size: var(--font-size-lg); }
  h6 { font-size: var(--font-size-base); }

  p {
    margin-bottom: var(--spacing-md);
    color: var(--text-secondary);
  }

  a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: var(--transition-fast);
  }

  a:hover {
    color: var(--secondary-dark);
    text-decoration: underline;
  }

  /* Utility Classes */
  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }

  .d-none { display: none; }
  .d-block { display: block; }
  .d-flex { display: flex; }
  .d-grid { display: grid; }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: var(--transition-slow);
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;