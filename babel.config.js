module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          src: './src',
          features: './src/features',
          styles: './src/styles',
          components: './src/components',
          utils: './src/utils',
          navigator: './src/navigator',
          assets: './src/assets',
          config: './src/config',
          images: './src/assets/images',
          constants: './src/constants',
          reduxStore: './src/store',
        },
      },
    ],
    'import-glob',
  ],
};
