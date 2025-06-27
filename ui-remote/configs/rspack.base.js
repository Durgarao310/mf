const path = require("path")
const rspack = require("@rspack/core")
const { ModuleFederationPlugin } = require("@module-federation/enhanced/rspack")

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"]

module.exports = {
	entry: {
		main: path.join(__dirname, "../src/main.tsx"),
	},
	output: {
		publicPath: "http://localhost:3001/",
		uniqueName: "ui_remote", // helpful for shared scope uniqueness
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
							externalHelpers: true,
						},
						// Enable styled-components transform manually
						plugin: [
							[
								"@swc/plugin-styled-components",
								{
									displayName: true,
									fileName: true,
									pure: true,
								},
							],
						],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new rspack.HtmlRspackPlugin({
			template: path.join(__dirname, "../index.html"),
		}),
		new ModuleFederationPlugin({
			name: "ui_remote",
			filename: "remoteEntry.js",
			exposes: {
				"./Button": "./src/components/Button",
			},
			shared: {
				react: { singleton: true, eager: true, requiredVersion: false },
				"react-dom": { singleton: true, eager: true, requiredVersion: false },
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
