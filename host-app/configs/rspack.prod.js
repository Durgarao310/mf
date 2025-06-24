const path = require("path")
const { merge } = require("webpack-merge")
const rspackBaseConfig = require("./rspack.base")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = merge(rspackBaseConfig, {
	mode: "production",
	cache: false,
	optimization: {
		minimize: true,
		splitChunks: {
			chunks: 'all',
			minSize: 20000,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
					priority: -10,
				},
				common: {
					name: 'common',
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},
	plugins: [
		// other plugins...
		// new BundleAnalyzerPlugin({
		// 	analyzerMode: "static", // Generates report.html
		// 	openAnalyzer: false,    // Don’t auto-open browser
		// 	reportFilename: "bundle-report.html",
		// }),
	],
	output: {
		clean: true,
		filename: "[name].[contenthash].js",
		chunkFilename: "[name].[contenthash].bundle.js",
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "../dist"),
		},
		client: {
			overlay: false,
		},
		port: 3000,
		compress: true,
		historyApiFallback: true,
	},
})