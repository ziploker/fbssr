const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === "development";
const webpack = require("webpack");
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

module.exports = {
	plugins: [
		new MiniCssExtractPlugin({
			filename: isDevelopment ? "[name].css" : "[name].[hash].css",
			chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
		}),
		new webpack.ProvidePlugin({
			process: "process/browser",
		}),
	],

	resolve: {
		extensions: [".js", ".jsx", ".scss"],
		alias: {
			process: "process/browser",
		},
	},
};
