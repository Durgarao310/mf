// base configuration for rspack

const path = require("path")
const rspack = require("@rspack/core")

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"]

module.exports = {
	entry: {
		main: path.join(__dirname, "../src/main.tsx"),
	},
	output: {
		publicPath: "http://localhost:3000/",
		uniqueName: "host_app",
	},
	mode: "development",
	target: "web",
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset",
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				use: {
					loader: "builtin:swc-loader",
					options: {
						jsc: {
							parser: {
								syntax: "typescript",
								tsx: true,
							},
							transform: {
								react: {
									runtime: "automatic",
								},
							},
						},
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["postcss-loader"],
				type: "css",
			},
		],
	},
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: path.join(__dirname, "../index.html"),
		}),
		new rspack.container.ModuleFederationPlugin({
			name: "host_app",
			exposes: {},
			remotes: {
				ui_remote: "ui_remote@http://localhost:3001/remoteEntry.js",
			},
			shared: {
				react: { singleton: true, eager: true, requiredVersion: false },
				'react-dom': { singleton: true, eager: true, requiredVersion: false }
			},
		}),
	],
	optimization: {
		minimizer: [
			new rspack.SwcJsMinimizerRspackPlugin(),
			new rspack.LightningCssMinimizerRspackPlugin({
				minimizerOptions: { targets },
			}),
		],
	},
	resolve: {
		extensions: [".jsx", ".tsx", ".ts", ".js", ".json"],
	},
	experiments: {
		css: true,
	},
}