/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            }
        ]
    }
};

export default nextConfig;
