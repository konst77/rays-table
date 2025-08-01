import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'intuitive-garden-31d1aa9fd4.media.strapiapp.com',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
