const withPreact = require("next-plugin-preact");

/** @type {import('next').NextConfig} */
// const nextConfig = {
// 	webpack: (config, { dev, isServer}) => {
// 		if (!dev && !isServer) {
// 			Object.assign(config.resolve.alias, {
// 				"react/jsx-runtime.js": "preact/compat/jsx-runtime",
// 				react: "preact/compat",
// 				"react-dom/test-utils": "preact/test-utils",
// 				"react-dom": "preact/compat",
// 			});
// 		}
// 		return config;
// 	}
// };

/** @type {import('next').NextConfig} */
const nextConfig = withPreact({});

module.exports = nextConfig;
