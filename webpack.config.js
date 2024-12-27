const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Main JS file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Clean the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Load CSS into JS
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'public'), // Serve files from 'public'
    port: 9000, // Set the port
    open: true, // Automatically open in the browser
  },
};
