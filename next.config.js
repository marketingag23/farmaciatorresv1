/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "www.droguerialaeconomia.com",
      },
    ],
  },
  env: {
    NEXT_API_GOOGLE_ANALYTICS: "UA-00000-01",
  },
};

module.exports = nextConfig;
