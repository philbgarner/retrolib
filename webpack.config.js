//webpack.config.js
const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/retrolib.ts",
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "retrolib.js", // <--- Will be compiled to this single file
    library: 'retrolib',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};