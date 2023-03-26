const { merge } = require('webpack-merge');
const common = require('./webpack.base');
const paths = require('./paths');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
  mode: 'production',
  output: {
    path: paths.build,
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[name].[chunkhash].chunk.js',
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'static/css/[name].[contenthash:8].css' }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: paths.build,
          toType: 'dir',
          noErrorOnMissing: true,
          globOptions: {
            dot: true, // 允许匹配以 . 开头的文件, 比如 .gitignore
            gitignore: false,
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new CompressionPlugin({
      algorithm: 'gzip', // 压缩算法
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240, // 只压缩大于 10240 bytes 的chunk
      minRatio: 0.8, // 只压缩大于该值的 minRatio = Compressed Size / Original Size
    }),
  ].filter(Boolean),
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    nodeEnv: 'production',
    moduleIds: 'deterministic',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  devtool: 'source-map',
};

module.exports = merge(common, prodConfig);
