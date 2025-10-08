import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Enables the new app router optimizations
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },

  // 🌍 Domain & Image optimization
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.pixabay.com",
      "res.cloudinary.com",
      "flowstack.vercel.app",
    ],
    formats: ["image/avif", "image/webp"],
  },

  // 🧭 Redirects / rewrites (example for custom routes)
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },

  // 📦 Bundle analyzer ready (optional — activate if needed)
  webpack: (config) => {
    // Example: enable top-level await or additional plugins
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
