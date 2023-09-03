import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		appDir: true,
		mdxRs: true,
	},
	module.exports = {
	  // Other configurations
	  experimental: {
	    output: 'export',
	  },
};

export default withContentlayer(nextConfig);
