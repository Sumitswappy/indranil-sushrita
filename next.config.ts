import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // <--- Creates the 'out' folder for Netlify
  images: {
    unoptimized: true,   // <--- Required for images to work in static mode
  },
};

export default nextConfig;