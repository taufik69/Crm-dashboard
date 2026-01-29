import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets-v2.lottiefiles.com",
      },
    ],
  },
};

export default nextConfig;
