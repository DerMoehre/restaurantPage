const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
/*       {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }, */
    ],
  },
  plugins: [
    new CopyPlugin({
        patterns: [
            { from: path.resolve(__dirname, './src/'),
              to: path.resolve(__dirname, 'dist') } //to the dist root directory
        ],
    }),
    ]
};