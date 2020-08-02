const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './index.ts',
  mode: 'development',
  output: {
    filename: 'crom.js',
    path: path.resolve(__dirname, 'output'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { allowTsInNodeModules: true }
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  },
};
