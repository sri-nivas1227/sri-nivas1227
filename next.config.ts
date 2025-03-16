import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sri-misc-bucket.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/portfolio/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
