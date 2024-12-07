import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React's Strict Mode
  swcMinify: true,       // Use SWC compiler for minification
  images: {
    domains: ["example.com"], // Allow external images from specific domains
  },
  basePath: process.env.NODE_ENV === "production" ? "/hotspotmobile" : "", // Base path for GitHub Pages
  assetPrefix: process.env.NODE_ENV === "production" ? "/hotspotmobile" : "", // Asset prefix for GitHub Pages
};

export default nextConfig;
