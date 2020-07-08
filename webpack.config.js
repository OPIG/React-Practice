const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './index.js',
	mode: 'development',
	output:{
		filename:'./bundle.js'
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'index.html',
			filename:'index.html'
		}),
		new ExtractTextWebpackPlugin("bundle.css")
	],
	module:{
		rules:[
		{
			test:/\.(js|jsx)$/,
			loader:'babel-loader',
			exclude:/node_modules/
			
		},{
			test:/\.css$/,
			exclude:/node_modules/,
			//loader: 'style-loader!css-loader',
			use:ExtractTextWebpackPlugin.extract({
				fallback:'style-loader',
				use:"css-loader"
			})
		}
		]
	},
	devtool:'cheap-source-map'
}