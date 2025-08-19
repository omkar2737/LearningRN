/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Splash from './src/screen/Splash';
import { ThemeProvider } from './src/theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Splash />
    </ThemeProvider>
  );
}

export default App;
