import { Platform } from 'react-native';

import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

console.log('Platform', Platform);

if (__DEV__ && Platform.OS !== 'web') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('./reactotronConfig');
}

// Must be exported or Fast Refresh won't update the context
const App = () => {
  // Use a more direct approach that's better for Fast Refresh
  return <ExpoRoot context={require.context('./app')} />;
};

export default registerRootComponent(App);
