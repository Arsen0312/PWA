import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'instagram.ffru7-1.fna.fbcdn.net',
            },
            {
                protocol: 'https',
                hostname: 'instagram.ffru7-1.fna.fbcdn.net',
            },
        ]
    }
};

export default nextConfig;
