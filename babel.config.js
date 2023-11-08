module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      "react-native-reanimated/plugin",
      'babel-plugin-styled-components',
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@auth': './src/app/auth',
            '@training': './src/app/training',
            '@onboarding': './src/app/onboarding',
            '@interview': './src/app/interview',
            '@questionnaire': './src/app/questionnaire',          
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
