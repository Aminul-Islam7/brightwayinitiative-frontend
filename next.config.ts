import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: ['placehold.co'],
	},
	// Optimize output for production
	output: 'standalone',
	// Disable source maps in production to simplify the build
	productionBrowserSourceMaps: false,
	// Don't show the powered by header
	poweredByHeader: false,
	// Enable React strict mode
	reactStrictMode: true,
	// Ensure SWC is used for compilation (needed for next/font)
	compiler: {
		// No need to manually configure anything here
		// SWC will be used by default when no .babelrc is present
	},
};

export default nextConfig;

