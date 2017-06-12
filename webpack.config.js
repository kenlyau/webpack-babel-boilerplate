var path = require('path');
const env = process.env.NODE_ENV;
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash].js',
    publicPath: 'public/'
  },
  devtool: "#source-map"
}
