module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        parser: 'babel',
        arrowParens: 'avoid',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          src: './src',
          features: './src/features',
          components: './src/components',
          config: './src/config',
          utils: './src/utils',
          navigator: './src/navigator',
        },
      },
    },
  },
};
