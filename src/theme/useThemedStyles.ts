import { useMemo } from 'react';
import { useTheme } from './ThemeContext';

// generic helper
export function useThemedStyles<T extends (theme: any) => any>(
  createStyles: T,
) {
  const { theme } = useTheme();

  return useMemo(
    () => createStyles(theme),
    [theme, createStyles],
  ) as ReturnType<T>;
}
