import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /* just in case 
  async redirects() {
    return [
      {
        source: '/((?!$).*)', // Matches everything except the root path `/`
        destination: '/',
        permanent: false,
      },
    ];
  },
  */
};

export default nextConfig;
