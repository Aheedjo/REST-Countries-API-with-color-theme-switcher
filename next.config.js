/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "flagcdn.com", "upload.wikimedia.org"],
        minimumCacheTTL: 60 * 60,
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
