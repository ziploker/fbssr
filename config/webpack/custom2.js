const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");
console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve("babel-loader"),
						options: {
							plugins: [
								isDevelopment && require.resolve("react-refresh/babel"),
							].filter(Boolean),
						},
					},
				],
			},
		],
	},
	plugins: [
		isDevelopment && new webpack.HotModuleReplacementPlugin(),
		isDevelopment &&
			new ReactRefreshWebpackPlugin({
				overlay: {
					sockPort: 3035,
				},
			}),
	].filter(Boolean),
};
