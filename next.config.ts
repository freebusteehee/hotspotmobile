import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/hotspotmobile' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hotspotmobile' : '',
  images: {
    unoptimized: true
  },
};

export default nextConfig;
