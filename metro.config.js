const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Configure NativeWind with Fast Refresh support
module.exports = withNativeWind(config, {
  input: './src/global.css'
});
