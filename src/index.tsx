import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import { verifyInstallation } from 'nativewind';

import './global.css';

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('./reactotronConfig');

  // Verify NativeWind installation
  verifyInstallation();
}

// Must be exported or Fast Refresh won't update the context
const App = () => {
  // Use a more direct approach that's better for Fast Refresh
  return <ExpoRoot context={require.context('./app')} />;
};

export default registerRootComponent(App);
