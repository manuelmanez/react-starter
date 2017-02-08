var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: 'inline-source-map', // gives line number in case of error in debugging
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: { // for production only when webpack-dev-server is used
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx']
},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
//var SRC = path.resolve(__dirname, "src");
// var OUTPUT = path.resolve(__dirname, "dist");
//
// var config = {
//   entry: SRC + "/index.jsx",
//   output: {
//     path: OUTPUT,
//     filename: "myScript.js"
//   },
//   module: {
//     loaders: [{
//         include: SRC,
//         loader: "babel-loader",
//     }]
//   }
// };
//
// module.exports = config;
