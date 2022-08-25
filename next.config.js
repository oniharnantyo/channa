const path = require("path");
const n = "node_modules";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en", // set <html lang="en">
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack(config, { isServer, webpack, dev, buildId }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, ".", n, "react"),
    };

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.BASE_API}/:path*`,
      },
    ];
  },
});
