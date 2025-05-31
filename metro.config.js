const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add web-specific configuration
config.resolver.sourceExts = process.env.RN_SRC_EXT
  ? [...process.env.RN_SRC_EXT.split(','), ...config.resolver.sourceExts]
  : config.resolver.sourceExts;

module.exports = config;
