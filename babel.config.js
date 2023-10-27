module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'babel-plugin-styled-components',
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@movies': './src/app/movies',
            '@authentication': './src/app/authentication',
            '@interview': './src/app/interview',
            '@shared': './src/app/shared',
            '@core': './src/app/core',
            '@ui-components': './src/app/shared/components',
            '@translations': './src/libs/translations',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
