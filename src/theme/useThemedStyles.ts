import { useMemo } from 'react';
import { Theme } from '.';
import { useTheme } from './ThemeContext';

// generic helper
export function useThemedStyles<T extends (theme: Theme) => any>(
  createStyles: T,
) {
  const { theme } = useTheme();

  return useMemo(
    () => createStyles(theme),
    [theme, createStyles],
  ) as ReturnType<T>;
}
