// ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './index';

type ThemeContextType = {
  theme: typeof lightTheme;
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme(); // system theme
  const [isDark, setIsDark] = useState(systemScheme === 'dark');

  const toggleTheme = () => setIsDark(prev => !prev);

  const theme = isDark ? darkTheme : lightTheme;

  // add listener for color scheme changes

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark,
      toggleTheme,
    }),
    [theme, isDark],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return ctx;
};
