module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "nativewind/babel",
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@': '.',
            '@components': './app/components',
            '@screens': './app/screens',
            '@assets': './app/assets',
            '@utils': './app/utils',
            '@routes': './app/routes'
          }
        }
      ]
    ],
  };
}; 