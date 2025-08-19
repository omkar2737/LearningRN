import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { useThemedStyles } from '../theme/useThemedStyles';
import { createStyles } from './styles';

const Splash = () => {
  const { toggleTheme, isDark } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.input}>
      <StatusBar barStyle={!isDark ? 'dark-content' : 'light-content'} />
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
