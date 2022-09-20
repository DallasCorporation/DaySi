module.exports = {
  presets: ['module:metro-react-native-babel-preset',
    "@babel/preset-env",
    {
      "targets": {
        "chrome": "49",
        "ios": "10"
      }
    }
  ],
  plugins: [
    'react-native-reanimated/plugin',
  ],
};
