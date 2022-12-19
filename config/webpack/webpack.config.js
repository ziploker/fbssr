const { env, merge } = require("shakapacker");
const { existsSync } = require("fs");
const { resolve } = require("path");
const custom1 = require("./custom");
const custom2 = require("./custom2");

const envSpecificConfig = () => {
	const path = resolve(__dirname, `${env.nodeEnv}.js`);
	if (existsSync(path)) {
		console.log(`Loading ENV specific webpack configuration file ${path}`);
		return require(path);
	} else {
		throw new Error(`Could not find file to load ${path}, based on NODE_ENV`);
	}
};

module.exports = envSpecificConfig();
module.exports = merge(envSpecificConfig(), custom1, custom2);
