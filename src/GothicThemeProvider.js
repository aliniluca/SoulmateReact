import { ThemeProvider } from '@emotion/react';

const gothicTheme = {
  colors: {
    primary: '#a0a0a0',
    secondary: '#fff',
    background: '#000',
    text: '#fff',
    accent: '#8b0000',
  },
  fontFamily: {
    gothic: `'Creepster', cursive`,
  },
  fontSize: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
  },
};

const GothicThemeProvider = ({ children }) => {
  return <ThemeProvider theme={gothicTheme}>{children}</ThemeProvider>;
};

export default GothicThemeProvider;
