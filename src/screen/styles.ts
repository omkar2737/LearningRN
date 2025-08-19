// styles.ts
import { StyleSheet } from 'react-native';

export const createStyles = (theme: any) =>
  StyleSheet.create({
    input: {
      backgroundColor: theme.background,
      padding: 12,
      borderRadius: 8,
      color: theme.text,
    },
    label: {
      color: theme.text,
      fontSize: 16,
      marginBottom: 6,
    },
  });
