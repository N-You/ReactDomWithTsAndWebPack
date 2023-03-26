const paths = require('./paths');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env == 'development';

function getCssStyle(arg, options) {
  return [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env'],
        },
      },
    },
    arg && {
      loader: arg,
      options,
    },
  ].filter(Boolean);
}

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: getCssStyle(),
      },
      //sass
      {
        test: /\.s[ac]ss$/,
        use: getCssStyle('sass-loader'),
      },
      {
        test: /\.less$/,
        use: getCssStyle('less-loader', {
          lessOptions: {
            modifyVars: {
              'primary-color': '#1DA57A',
            },
            javascriptEnabled: true, // 支持js
          },
        }),
      },
      //ts tsx js jsx
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g|webp|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        generator: {
          filename: 'static/images/[hash:10][ext]',
        },
      },
      {
        test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
        type: 'asset/resource',
        generator: {
          // 输出图片名称
          //[hash:10]取文件前10位
          filename: 'static/media/[hash:10][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@': paths.src,
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
};
