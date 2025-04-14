const jestConfig = {
  fakeTimers: {
    enableGlobally: true
  },
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@shopify/react-native-skia/.*|@sentry/react-native|native-base|react-native-svg)'
  ]
};

export default jestConfig;
