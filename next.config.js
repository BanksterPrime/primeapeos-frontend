/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      default: 0,
    },
  },
};

module.exports = nextConfig;
