const path = require('path')
const webpack = require('webpack')

module.exports = {
	devtool: 'source-map',
	entry:[
		'./src/index'
	],
	output:{
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: './public/'
	},
	plugins:[
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress:{
				warnings: false
			}
		}),
		new web.DefinePlugin({
			'process.env': {
				'NODE_ENV': Json.stringify('production')
			}
		})
	],
	module:{
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: path.join(__dirname, 'node_modules')
			},
			{
				test: /\.scss?$/,
				loader: 'style!css!sass',
				include: path.join(__dirname, 'src', 'styles')
			}
		]
	}
}