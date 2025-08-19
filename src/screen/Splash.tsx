import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { useThemedStyles } from '../theme/useThemedStyles';
import { createStyles } from './styles';

const Splash = () => {
  const { toggleTheme } = useTheme();

  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.input}>
      <Text style={styles.label}>Splash</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          toggleTheme();
        }}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
