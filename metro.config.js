const { getDefaultConfig } = require('expo/metro-config');

// NOTE reanimated recommends this, but does expo do this already?
const {
  wrapWithReanimatedMetroConfig
} = require('react-native-reanimated/metro-config');

const config = getDefaultConfig(__dirname);

// Add web-specific configuration
config.resolver.sourceExts = process.env.RN_SRC_EXT
  ? [...process.env.RN_SRC_EXT.split(','), ...config.resolver.sourceExts]
  : config.resolver.sourceExts;

module.exports = wrapWithReanimatedMetroConfig(config);
