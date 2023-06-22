const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    main: './src/pages/index.js'
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: 'asset/[hash][ext][query]',
    publicPath: ""
  },


  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,

    port: 8080,
    open: true,
    devMiddleware: {
      writeToDisk: true
    }

  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
      type: 'asset/resource'
    },
    {
      test: /.s?css$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    },


    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  }

}
