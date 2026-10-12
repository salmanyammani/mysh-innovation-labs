import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder imagery in lib/data.ts is served from Unsplash.
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
