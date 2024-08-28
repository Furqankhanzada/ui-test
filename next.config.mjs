/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'dummyjson.com',
            }
        ],
    },
};

export default nextConfig;
