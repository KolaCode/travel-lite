const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/assets/scripts/modules/app.js'),
  output: {
    path: path.resolve(__dirname, 'app/temp/scripts'),
    filename: 'App.js'
  },
  module: {
	  loaders: [
		{
		  loader: 'babel-loader',
		  query: {
			  presets: ['es2015']
		  },
		  test: /\.js$/,
		  exclude: /node_modules/
		}
	  ]
  },
  resolve: {
	  modules: [
		path.resolve(__dirname, 'app'),
		path.resolve(__dirname, 'app/assets/scripts/modules'),
		path.resolve(__dirname, 'node_modules')
	  ]
  }
};
