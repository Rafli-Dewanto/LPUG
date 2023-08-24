/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lpug.gunadarma.ac.id",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
