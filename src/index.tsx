import { Platform } from 'react-native';

import { registerRootComponent } from 'expo';
import { ExpoRoot, type RequireContext } from 'expo-router';

if (__DEV__ && Platform.OS !== 'web') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('./reactotronConfig');
}

const appContext = (
  require as unknown as { context: (path: string) => RequireContext }
).context('./app');

// Must be exported or Fast Refresh won't update the context
const App = () => <ExpoRoot context={appContext} />;

export default registerRootComponent(App);
