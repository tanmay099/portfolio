const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   inject: "body" || "head",
    //   title: "Tanmay Sharma"
    // }),
    // new BundleAnalyzerPlugin(),
    new WorkboxPlugin.InjectManifest({
      swSrc: "./service-worker.js"
    })
  ]
  // optimization: {
  //       splitChunks: {
  //          chunks: 'all',
  //        },
  //      },
};
