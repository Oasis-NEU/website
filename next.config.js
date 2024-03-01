/** @type {import('next').NextConfig} */
nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.licdn.com" }],
  },
  target: "serverless",
};

module.exports = nextConfig;
