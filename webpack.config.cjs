const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: 'swc-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      templateContent: `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Webpack App</title>
  </head>
    <body>
       <div id="app" />
    </body>
    </html>
  `,
    }),
    new ProgressBarPlugin(),
  ],
};
