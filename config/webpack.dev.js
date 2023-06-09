const { merge } = require('webpack-merge');
const common = require('./webpack.base');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const devConfig = {
  mode: 'development',
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].js',
    clean: true,
  },
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    clean: true,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/],
    }),
  ].filter(Boolean),
  devServer: {
    port: 8000,
    devMiddleware: {
      publicPath: '/',
    },
    open: false,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
};

module.exports = merge(common, devConfig);
