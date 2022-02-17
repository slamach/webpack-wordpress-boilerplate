const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackBar = require('webpackbar');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: ['./js/index.js', './scss/style.scss'],
  dirsToCopy: ['img', 'fonts'],
  containerUrl: 'http://localhost:8000',
};

const generateCopyPatterns = () =>
  config.dirsToCopy.map((dir) => ({
    from: dir,
    to: dir,
  }));

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: config.entry,
  output: {
    filename: isDev ? 'js/bundle.js' : 'js/bundle.[contenthash:8].js',
    path: path.resolve(__dirname, 'public/build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              import: false,
              modules: false,
              sourceMap: isDev,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDev ? 'css/style.css' : 'css/style.[contenthash:8].css',
      chunkFilename: '[id].css',
    }),
    new CopyPlugin({
      patterns: generateCopyPatterns(),
    }),
    new WebpackManifestPlugin({
      fileName: 'webpack.manifest.json',
      publicPath: '/build',
      filter: (file) => /\.(js|css)$/.test(file.name),
    }),
    new BrowserSyncPlugin({
      ui: false,
      notify: false,
      proxy: config.containerUrl,
      files: ['public/**/*.php'],
    }),
    ...(!isDev ? [new WebpackBar()] : []),
  ],
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      ...(!isDev
        ? [
            new ImageMinimizerPlugin({
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: ['mozjpeg', 'optipng', 'gifsicle', 'svgo'],
                },
              },
            }),
          ]
        : []),
    ],
  },
  devtool: isDev ? 'source-map' : false,
  stats: 'errors-warnings',
  performance: {
    hints: false,
  },
};
