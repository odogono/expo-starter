import { config } from 'dotenv';

import { ConfigContext, ExpoConfig } from '@expo/config';

const IS_DEV = process.env.APP_VARIANT === 'development';

config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  android: {
    adaptiveIcon: {
      backgroundColor: '#ffffff',
      foregroundImage: './assets/images/adaptive-icon.png'
    },
    package: 'net.odgn.expostarter'
  },
  icon: './assets/images/icon.png',
  ios: {
    bundleIdentifier: 'net.odgn.expostarter',
    supportsTablet: true
  },
  experiments: {
    typedRoutes: true
  },
  name: 'ODGN Expo Starter',
  newArchEnabled: true,
  orientation: 'portrait',
  plugins: [
    'expo-router',
    [
      'expo-splash-screen',
      {
        backgroundColor: '#ffffff',
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain'
      }
    ],
    [
      'react-native-edge-to-edge',
      {
        android: {
          parentTheme: 'Default',
          enforceNavigationBarContrast: false
        }
      }
    ]
  ],
  scheme: 'myapp',
  slug: 'odgn-expo-starter',
  userInterfaceStyle: 'automatic',
  version: '1.0.0',
  web: {
    bundler: 'metro',
    favicon: './assets/images/favicon.png',
    output: 'static'
  }
});
