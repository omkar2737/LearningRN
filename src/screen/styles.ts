// styles.ts
import { StyleSheet } from 'react-native';
import { Theme } from '../theme';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    input: {
      backgroundColor: theme.background,
      padding: 12,
      color: theme.text,
    },
    label: {
      color: theme.text,
      fontSize: 16,
      marginBottom: 6,
    },
    button: {
      backgroundColor: theme.primary,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: theme.text,
      fontSize: 16,
    },
  });
