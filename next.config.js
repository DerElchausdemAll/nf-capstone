require("dotenv").config();

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		MONGODB_URI: process.env.MONGODB_URI,
	},
};

module.exports = nextConfig;
